import {KitInputWrapper} from '@kit/DataEntry/InputWrapper';
import {useKitTheme} from '@theme/useKitTheme';
import type {RefSelectProps} from 'antd';
import {Select as AntdSelect} from 'antd';
import cn from 'classnames';
import {FocusEvent, MouseEvent, Ref, RefObject, forwardRef, useEffect, useMemo, useRef, useState} from 'react';
import ShortUniqueId from 'short-unique-id';
import {useDebouncedCallback} from 'use-debounce';
import {IKitInternalOption, IKitOption, IKitSelect} from './types';
import styles from './styles.module.scss';
import flatten from 'lodash/flatten';
import useIcons from './useIcons';
import {
    fixSelectRender,
    getDropdownRender,
    getLabelRender,
    getMaxTagRender,
    getOptionLabelRender,
    getOptionRender,
    getTagRender
} from './renders';

const _parseOptions = (optionList: IKitOption[], labelOnly?: IKitSelect['labelOnly']): IKitInternalOption[] => {
    return optionList.map(option => {
        const {className, disabled, value, options, label} = option;

        if (options) {
            return {
                label,
                options: _parseOptions(options, labelOnly)
            };
        }

        return {
            label: option?.label ?? '',
            labelToDisplay: getOptionLabelRender(option, labelOnly),
            className,
            disabled,
            value
        };
    });
};

const _getPlacementClasses = (appId: string, className: string | undefined, placement: IKitSelect['placement']) => {
    const isTop = placement && placement.indexOf('top') >= 0;

    return cn(appId, styles['kit-select'], className, {
        'ant-select-top': isTop,
        'ant-select-bottom': !isTop
    });
};

const _getPopupPlacementClasses = (
    appId: string,
    className: string | undefined,
    placement: IKitSelect['placement'],
    isFocus: boolean,
    status: IKitSelect['status']
) => {
    const isTop = placement && placement.indexOf('top') >= 0;

    return cn(appId, className, 'kit-select-dropdown-content', {
        'kit-select-dropdown-top': isTop,
        'kit-select-dropdown-bottom': !isTop,
        'kit-select-dropdown-focus': isFocus,
        'kit-select-dropdown-error': status === 'error',
        'kit-select-dropdown-warning': status === 'warning'
    });
};

const uid = new ShortUniqueId({length: 10, dictionary: 'alpha'});

export const KitSelect = forwardRef<RefSelectProps, IKitSelect>(
    (
        {
            id,
            options,
            defaultValue,
            disabled,
            status,
            mode,
            label,
            helper,
            placement,
            open,
            onChange,
            onClick,
            onClear,
            onBlur,
            onFocus,
            wrapperClassName,
            className,
            popupClassName,
            labelOnly = false,
            oneLineTags = false,
            allowClear,
            loading,
            required,
            infoIcon,
            actions,
            onInfoClick,
            dropdownRender,
            ...props
        },
        ref?: Ref<RefSelectProps> | undefined
    ) => {
        const {appId} = useKitTheme();
        const [isOpen, setIsOpen] = useState(false);
        const [isFocus, setIsFocus] = useState(false);
        const [selectedOption, setSelectedOption] = useState<IKitInternalOption | IKitInternalOption[]>();
        const internalKitSelectRef = useRef(id ?? uid.rnd());

        const {clearIcon, suffixIcon, selectedItemIcon} = useIcons({
            allowClear,
            loading
        });

        const _handleDocumentScroll = useDebouncedCallback(() => {
            fixSelectRender(internalKitSelectRef.current);
        }, 15);

        useEffect(() => {
            if (isOpen) {
                requestAnimationFrame(() => {
                    fixSelectRender(internalKitSelectRef.current);
                });

                document.addEventListener('scroll', _handleDocumentScroll);
            }

            return () => {
                document.removeEventListener('scroll', _handleDocumentScroll);
            };
        }, [_handleDocumentScroll, isOpen]);

        const internalOptions = useMemo(
            (): IKitInternalOption[] => (options ? _parseOptions(options, labelOnly) : []),
            [options, labelOnly]
        );

        const flattenInternalOptions = useMemo(
            (): IKitInternalOption[] =>
                flatten<IKitInternalOption>(internalOptions.map(option => option.options ?? option)),
            [internalOptions]
        );

        if (defaultValue && selectedOption === undefined) {
            let selectedOption: IKitInternalOption | IKitInternalOption[] | undefined;

            if (Array.isArray(defaultValue)) {
                selectedOption = internalOptions.filter(option => {
                    return defaultValue.includes(option.value);
                });
            } else {
                selectedOption = internalOptions.filter(option => option.value === defaultValue)[0];
            }

            setSelectedOption(selectedOption);
        }

        const _handleOnClick = (event: MouseEvent<HTMLDivElement>) => {
            (ref as RefObject<RefSelectProps>)?.current?.focus();

            if ((!mode && isOpen) || (mode && isOpen && (event.target as HTMLElement).closest('.ant-select'))) {
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

        const _handleOnChange = (value: IKitSelect['value'], option: IKitInternalOption | IKitInternalOption[]) => {
            setSelectedOption(option);
            onChange && onChange(value, option);
        };

        return (
            <KitInputWrapper
                label={label}
                actions={actions}
                helper={helper}
                disabled={disabled}
                status={status}
                className={wrapperClassName}
                required={required}
                infoIcon={infoIcon}
                onInfoClick={onInfoClick}
            >
                <AntdSelect
                    {...props}
                    id={internalKitSelectRef.current}
                    className={_getPlacementClasses(appId, className, placement)}
                    popupClassName={_getPopupPlacementClasses(appId, popupClassName, placement, isFocus, status)}
                    options={internalOptions}
                    placement={placement}
                    disabled={disabled}
                    status={status}
                    menuItemSelectedIcon={selectedItemIcon}
                    mode={mode}
                    loading={loading}
                    suffixIcon={suffixIcon}
                    allowClear={clearIcon ? {clearIcon} : false}
                    optionRender={option => getOptionRender(option, flattenInternalOptions)}
                    dropdownRender={menu => getDropdownRender(menu, dropdownRender)}
                    labelRender={props => getLabelRender(props, selectedOption)}
                    tagRender={
                        mode !== undefined ? props => getTagRender(props, disabled, status, selectedOption) : undefined
                    }
                    maxTagCount={oneLineTags ? 'responsive' : undefined}
                    maxTagPlaceholder={
                        oneLineTags ? omittedValues => getMaxTagRender(omittedValues, disabled, status) : undefined
                    }
                    ref={ref}
                    open={open !== undefined ? open : isOpen}
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                    defaultValue={defaultValue}
                    onChange={_handleOnChange}
                    onClick={_handleOnClick}
                    onClear={_handleOnClear}
                    onBlur={_handleOnBlur}
                    onFocus={_handleFocus}
                />
            </KitInputWrapper>
        );
    }
);

KitSelect.displayName = 'KitSelect';
