import React, {
    useEffect,
    useState,
    FocusEvent,
    MouseEvent,
    forwardRef,
    Ref,
    RefObject,
    useRef,
    JSXElementConstructor,
    ReactElement,
    ReactNode
} from 'react';
import cn from 'classnames';
import {IKitOption, IKitSelect} from './types';
import {KitIcon} from '@kit/General';
import type {CustomTagProps} from 'rc-select/lib/BaseSelect';
import {StyledBadge, StyledKitSelect, StyledLabel} from './style';
import KitInputWrapper from '@kit/DataEntry/Input/InputWrapper';
import {KitTag} from '@kit/DataDisplay/';
import {useKitTheme} from '@theme/useKitTheme';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircleXmark} from '@fortawesome/free-regular-svg-icons';
import {faCheck, faCircleNotch, faChevronDown} from '@fortawesome/free-solid-svg-icons';
import type {RefSelectProps} from 'antd';
import {useDebouncedCallback} from 'use-debounce';
import ShortUniqueId from 'short-unique-id';

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
                <StyledBadge className="kit-select-option-badge">
                    {color && <div className="kit-select-option-color" style={{backgroundColor: color}} />}
                </StyledBadge>
            )}
            <StyledLabel className="kit-select-option-label">{label}</StyledLabel>
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
            label: labelOnly ? <StyledLabel>{rest.label}</StyledLabel> : _getOptionLabel(rest),
            className: rest.highlight ? `${className} kit-select-highlight-option` : (className as string),
            disabled: disabled as boolean,
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            value
        };
    });
};

const _dropDownRenderer = (menu: ReactElement<unknown, string | JSXElementConstructor<unknown>>) => {
    return <div className="kit-select-dropdown-content">{menu}</div>;
};

const _tagRender = (props: CustomTagProps) => {
    const {label, onClose} = props;
    const onPreventMouseDown = (event: React.MouseEvent<HTMLSpanElement>) => {
        event.preventDefault();
        event.stopPropagation();
    };

    return (
        <KitTag color="blue" secondaryColorInvert onMouseDown={onPreventMouseDown} onClose={onClose}>
            {typeof label === 'object' && label}
            {typeof label === 'string' && (
                <div className="kit-select-option">
                    <StyledLabel className="kit-select-option-label">{label}</StyledLabel>
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

const _getPlacementClasses = (placement: IKitSelect['placement']) => {
    return ' ant-select-' + (placement && placement.indexOf('top') >= 0 ? 'top' : 'bottom');
};

const _getPopupPlacementClasses = (placement: IKitSelect['placement']) => {
    return cn({
        'kit-select-dropdown-top': placement && placement.indexOf('top') >= 0,
        'kit-select-dropdown-bottom': !placement || placement.indexOf('top') < 0
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
            labelOnly,
            label,
            helper,
            placement,
            onClick,
            onClear,
            onBlur,
            wrapperClassName,
            className,
            popupClassName,
            oneLineTags = false,
            allowClear = true,
            ...props
        },
        ref?: Ref<RefSelectProps> | undefined
    ) => {
        const {appId} = useKitTheme();
        const [internalOptions, setOptions] = useState<IKitOption[]>([]);
        const [isOpen, setIsOpen] = useState(false);
        const internalKitSelectRef = useRef(id ?? uid.rnd());

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

        useEffect(() => {
            if (!options) {
                setOptions([]);
            } else {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
                setOptions(_parseOptions(options, !!labelOnly));
            }
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
            onBlur && onBlur(event);
        };

        return (
            <KitInputWrapper
                label={label}
                helper={helper}
                disabled={props.disabled}
                status={props.status}
                className={wrapperClassName}
            >
                <StyledKitSelect
                    {...props}
                    id={internalKitSelectRef.current}
                    className={`${appId} ${className ?? ''} ${_getPlacementClasses(placement)}`}
                    popupClassName={`${appId} ${popupClassName ?? ''} ${_getPopupPlacementClasses(placement)}`}
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
                    allowClear={allowClear ? {clearIcon: <FontAwesomeIcon icon={faCircleXmark} />} : undefined}
                    dropdownRender={_dropDownRenderer}
                    tagRender={props.mode ? _tagRender : undefined}
                    maxTagCount={oneLineTags ? 'responsive' : undefined}
                    maxTagPlaceholder={oneLineTags ? _maxTagRender : undefined}
                    ref={ref}
                    open={props.open !== undefined ? props.open : isOpen}
                    onClick={event => _handleOnClick(event)}
                    onClear={() => _handleOnClear()}
                    onBlur={event => _handleOnBlur(event)}
                />
            </KitInputWrapper>
        );
    }
);

KitSelect.displayName = 'KitSelect';
