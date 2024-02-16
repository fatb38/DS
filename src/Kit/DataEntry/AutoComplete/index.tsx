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
        const popupClx = cn('ant-select-dropdown', 'kit-select-dropdown-bottom', popupClassName);

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
                    popupClassName={popupClx}
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
