import React, {Ref, forwardRef} from 'react';
import {AutoComplete as AntdAutoComplete, RefSelectProps} from 'antd';
import {KitInput} from '@kit/DataEntry/Input';
import {KitInputWrapper} from '@kit/DataEntry/InputWrapper';
import type {IKitAutoComplete} from './types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import {valueType} from 'antd/lib/statistic/utils';
import cn from 'classnames';

import styles from './styles.module.scss';

const _getPopupPlacementClasses = (className: string | undefined, isFocus: boolean) => {
    return cn(className, 'ant-select-dropdown', 'kit-select-dropdown-bottom', {
        'kit-select-dropdown-focus': isFocus
    });
};

export const KitAutoComplete = forwardRef<RefSelectProps, IKitAutoComplete>(
    (
        {
            allowClear,
            label,
            helper,
            autoFocus,
            defaultValue,
            disabled,
            placeholder,
            status,
            value,
            onBlur,
            popupClassName,
            wrapperClassName,
            ...props
        },
        ref?: Ref<RefSelectProps> | undefined
    ) => {
        return (
            <KitInputWrapper
                label={label}
                helper={helper}
                disabled={disabled}
                status={status}
                className={wrapperClassName}
            >
                <AntdAutoComplete
                    {...props}
                    disabled={disabled}
                    ref={ref}
                    className={styles['kit-autocomplete']}
                    popupClassName={_getPopupPlacementClasses(popupClassName, true)}
                >
                    <KitInput
                        prefix={<FontAwesomeIcon icon={faMagnifyingGlass} />}
                        allowClear={allowClear}
                        autoFocus={autoFocus}
                        defaultValue={defaultValue as string | number | readonly string[] | undefined}
                        placeholder={placeholder}
                        status={status}
                        value={value as valueType}
                        onBlur={onBlur}
                    />
                </AntdAutoComplete>
            </KitInputWrapper>
        );
    }
);

KitAutoComplete.displayName = 'KitAutoComplete';
