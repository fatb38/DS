import {FocusEvent, Ref, forwardRef, useState} from 'react';
import {AutoComplete as AntdAutoComplete, RefSelectProps} from 'antd';
import {KitInput} from '@kit/DataEntry/Input';
import {KitInputWrapper} from '@kit/DataEntry/InputWrapper';
import type {IKitAutoComplete} from './types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import {valueType} from 'antd/es/statistic/utils';
import cn from 'classnames';

import styles from './styles.module.scss';

const _getPopupPlacementClasses = (
    className: string | undefined,
    isFocus: boolean,
    status: IKitAutoComplete['status']
) =>
    cn(className, 'ant-select-dropdown', 'kit-select-dropdown-bottom', {
        'kit-select-dropdown-focus': isFocus,
        'kit-select-dropdown-error': status === 'error',
        'kit-select-dropdown-warning': status === 'warning'
    });

export const KitAutoComplete = forwardRef<RefSelectProps, IKitAutoComplete>(
    (
        {
            allowClear,
            label,
            helper,
            htmlFor,
            autoFocus,
            defaultValue,
            disabled,
            placeholder,
            status,
            value,
            onFocus,
            onBlur,
            popupClassName,
            wrapperClassName,
            required,
            infoIcon,
            actions,
            onInfoClick,
            ...props
        },
        ref?: Ref<RefSelectProps> | undefined
    ) => {
        const [isFocus, setIsFocus] = useState(false);

        const _handleOnFocus = (e: FocusEvent<HTMLInputElement>) => {
            setIsFocus(true);

            if (onFocus) {
                onFocus(e);
            }
        };

        const _handleOnBlur = (e: FocusEvent<HTMLInputElement>) => {
            setIsFocus(false);

            if (onBlur) {
                onBlur(e);
            }
        };

        return (
            <KitInputWrapper
                label={label}
                helper={helper}
                htmlFor={htmlFor}
                disabled={disabled}
                status={status}
                className={wrapperClassName}
                required={required}
                infoIcon={infoIcon}
                actions={actions}
                onInfoClick={onInfoClick}
            >
                <AntdAutoComplete
                    {...props}
                    id={props.id ?? htmlFor}
                    disabled={disabled}
                    ref={ref}
                    className={styles['kit-autocomplete']}
                    popupClassName={_getPopupPlacementClasses(popupClassName, isFocus, status)}
                >
                    <KitInput
                        prefix={<FontAwesomeIcon icon={faMagnifyingGlass} />}
                        allowClear={allowClear}
                        autoFocus={autoFocus}
                        defaultValue={defaultValue as string | number | readonly string[] | undefined}
                        placeholder={placeholder}
                        status={status}
                        value={value as valueType}
                        onBlur={_handleOnBlur}
                        onFocus={_handleOnFocus}
                    />
                </AntdAutoComplete>
            </KitInputWrapper>
        );
    }
);

KitAutoComplete.displayName = 'KitAutoComplete';
