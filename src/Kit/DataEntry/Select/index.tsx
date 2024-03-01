import {faCircleXmark} from '@fortawesome/free-regular-svg-icons';
import {faCheck, faChevronDown, faCircleNotch} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {KitTag} from '@kit/DataDisplay/Tag';
import {KitInputWrapper} from '@kit/DataEntry/InputWrapper';
import {KitIcon} from '@kit/General';
import {useKitTheme} from '@theme/useKitTheme';
import type {RefSelectProps} from 'antd';
import {Select as AntdSelect} from 'antd';
import cn from 'classnames';
import type {CustomTagProps} from 'rc-select/es/BaseSelect';
import React, {
    FocusEvent,
    JSXElementConstructor,
    MouseEvent,
    ReactElement,
    ReactNode,
    Ref,
    RefObject,
    forwardRef,
    useEffect,
    useMemo,
    useRef,
    useState
} from 'react';
import ShortUniqueId from 'short-unique-id';
import {useDebouncedCallback} from 'use-debounce';
import {IKitOption, IKitSelect} from './types';

import styles from './styles.module.scss';

interface ISelectOption {
    icon?: ReactNode;
    color?: string;
    label?: string;
}

const _getOptionLabel = (selectOption: ISelectOption): ReactElement => {
    const {icon, color, label} = selectOption;
    return (
        <div className="kit-select-option">
            {icon && <KitIcon className="kit-select-option-icon" icon={icon} on />}
            {!icon && (
                <div className="kit-select-option-badge">{color && <div style={{backgroundColor: color}} />}</div>
            )}
            <div className="kit-select-option-label">{label}</div>
        </div>
    );
};

const _parseOptions = (list: IKitOption[], labelOnly?: boolean) => {
    return list.map(option => {
        const {className, disabled, value, options, ...rest} = option;
        if (options) {
            return {
                label: rest.label,
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-argument
                options: _parseOptions(options, labelOnly)
            };
        }
        return {
            label: labelOnly ? <div className={'kit-select-option-label'}>{rest.label}</div> : _getOptionLabel(rest),
            className: rest.highlight ? `${className} kit-select-highlight-option` : (className as string),
            disabled: disabled as boolean,
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            value
        };
    });
};

const _dropDownRenderer = (menu: ReactElement<unknown, string | JSXElementConstructor<unknown>>, status) => {
    const clx = cn('kit-select-dropdown-content', {
        'kit-select-dropdown-content-default': status !== 'warning' && status !== 'error',
        'kit-select-dropdown-content-warning': status === 'warning',
        'kit-select-dropdown-content-error': status === 'error'
    });
    return <div className={clx}>{menu}</div>;
};

const _tagRender = (props: CustomTagProps) => {
    const {label, onClose} = props;
    const onPreventMouseDown = (event: React.MouseEvent<HTMLSpanElement>) => {
        event.preventDefault();
        event.stopPropagation();
    };

    const clx = cn(styles['kit-select-option-label']);

    return (
        <KitTag color="blue" secondaryColorInvert onMouseDown={onPreventMouseDown} onClose={onClose}>
            {typeof label === 'object' && label}
            {typeof label === 'string' && (
                <div className="kit-select-option">
                    <div className={clx}>{label}</div>
                </div>
            )}
        </KitTag>
    );
};

const _maxTagRender = (omittedValues: {length: number}) => {
    return (
        <KitTag color="blue" secondaryColorInvert>
            +{omittedValues.length}
        </KitTag>
    );
};

const _getPlacementClasses = (appId: string, className: string | undefined, placement: IKitSelect['placement']) => {
    return cn(appId, styles['kit-select'], className, {
        ['ant-select-top']: placement && placement.indexOf('top') >= 0,
        ['ant-select-bottom']: !(placement && placement.indexOf('top') >= 0)
    });
};

const _getPopupPlacementClasses = (
    appId: string,
    className: string | undefined,
    placement: IKitSelect['placement'],
    isFocus: boolean,
    status: IKitSelect['status']
) => {
    return cn(appId, className, {
        'kit-select-dropdown-top': placement && placement.indexOf('top') >= 0,
        'kit-select-dropdown-bottom': !placement || placement.indexOf('top') < 0,
        'kit-select-dropdown-focus': isFocus,
        'kit-select-dropdown-error': status === 'error',
        'kit-select-dropdown-warning': status === 'warning'
    });
};

const _fixSelectRender = (id: string) => {
    const inputElement = document.getElementById(id);
    const selectElement = inputElement?.closest('.ant-select');
    const dropDownElement = document.getElementById(id + '_list')?.closest('.ant-select-dropdown');

    if (selectElement && dropDownElement) {
        const isDropDownOnTop = dropDownElement.className.indexOf('ant-select-dropdown-placement-top') >= 0;
        const isDropDownOnBottom = dropDownElement.className.indexOf('ant-select-dropdown-placement-bottom') >= 0;

        if (isDropDownOnTop) {
            selectElement.classList.remove('ant-select-bottom');
            selectElement.classList.add('ant-select-top');
        }

        if (isDropDownOnBottom) {
            selectElement.classList.remove('ant-select-top');
            selectElement.classList.add('ant-select-bottom');
        }
    }
};

const uid = new ShortUniqueId({length: 10, dictionary: 'alpha'});

export const KitSelect = forwardRef<RefSelectProps, IKitSelect>(
    (
        {
            id,
            options,
            label,
            helper,
            placement,
            onClick,
            onClear,
            onBlur,
            onFocus,
            wrapperClassName,
            className,
            popupClassName,
            labelOnly = false,
            oneLineTags = false,
            allowClear = true,
            required,
            infoIcon,
            actions,
            onInfoClick,
            ...props
        },
        ref?: Ref<RefSelectProps> | undefined
    ) => {
        const {appId} = useKitTheme();
        const [isOpen, setIsOpen] = useState(false);
        const internalKitSelectRef = useRef(id ?? uid.rnd());
        const [isFocus, setIsFocus] = useState(false);

        const _handleDocumentScroll = useDebouncedCallback(() => {
            _fixSelectRender(internalKitSelectRef.current);
        }, 15);

        useEffect(() => {
            if (isOpen) {
                requestAnimationFrame(() => {
                    _fixSelectRender(internalKitSelectRef.current);
                });

                document.addEventListener('scroll', _handleDocumentScroll);
            }

            return () => {
                document.removeEventListener('scroll', _handleDocumentScroll);
            };
        }, [_handleDocumentScroll, isOpen]);

        const internalOptions = useMemo((): IKitOption[] => {
            return options ? (_parseOptions(options, labelOnly) as IKitOption[]) : [];
        }, [options, labelOnly]);

        const _handleOnClick = (event: MouseEvent<HTMLDivElement>) => {
            (ref as RefObject<RefSelectProps>)?.current?.focus();

            if (
                (!props.mode && isOpen) ||
                (props.mode && isOpen && (event.target as HTMLElement).closest('.ant-select'))
            ) {
                setIsOpen(false);
            } else {
                setIsOpen(true);
            }

            onClick && onClick(event);
        };

        const _handleOnClear = () => {
            setIsOpen(false);
            onClear && onClear();
        };

        const _handleOnBlur = (event: FocusEvent<HTMLElement, Element>) => {
            setIsOpen(false);
            setIsFocus(false);
            onBlur && onBlur(event);
        };

        const _handleFocus = (event: FocusEvent<HTMLElement, Element>) => {
            setIsFocus(true);
            onFocus && onFocus(event);
        };

        return (
            <KitInputWrapper
                label={label}
                helper={helper}
                disabled={props.disabled}
                status={props.status}
                className={wrapperClassName}
                required={required}
                infoIcon={infoIcon}
                actions={actions}
                onInfoClick={onInfoClick}
            >
                <AntdSelect
                    {...props}
                    id={internalKitSelectRef.current}
                    className={_getPlacementClasses(appId, className, placement)}
                    popupClassName={_getPopupPlacementClasses(appId, popupClassName, placement, isFocus, props.status)}
                    options={internalOptions}
                    placement={placement}
                    menuItemSelectedIcon={<KitIcon icon={<FontAwesomeIcon icon={faCheck} />} on />}
                    suffixIcon={
                        props.loading ? (
                            <FontAwesomeIcon icon={faCircleNotch} spin />
                        ) : (
                            <FontAwesomeIcon icon={faChevronDown} />
                        )
                    }
                    allowClear={
                        allowClear
                            ? {clearIcon: <FontAwesomeIcon aria-label="clear" icon={faCircleXmark} />}
                            : undefined
                    }
                    dropdownRender={menu => _dropDownRenderer(menu, props.status)}
                    tagRender={props.mode ? _tagRender : undefined}
                    maxTagCount={oneLineTags ? 'responsive' : undefined}
                    maxTagPlaceholder={oneLineTags ? _maxTagRender : undefined}
                    ref={ref}
                    open={props.open !== undefined ? props.open : isOpen}
                    onClick={event => _handleOnClick(event)}
                    onClear={_handleOnClear}
                    onBlur={event => _handleOnBlur(event)}
                    onFocus={event => _handleFocus(event)}
                />
            </KitInputWrapper>
        );
    }
);

KitSelect.displayName = 'KitSelect';
