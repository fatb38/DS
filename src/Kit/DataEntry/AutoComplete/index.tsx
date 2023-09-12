import React from 'react';
import {AutoComplete as AntdAutoComplete} from 'antd';
import {SearchOutlined} from '@ant-design/icons';
import {KitInput} from '@kit/DataEntry/';
import type {KitAutoCompleteProps} from './types';
import KitInputWrapper from '../Input/InputWrapper';

export const KitAutoComplete: React.FunctionComponent<KitAutoCompleteProps> = ({
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
    onChange,
    popupClassName,
    ...props
}) => {
    return (
        <KitInputWrapper label={label} helper={helper} disabled={disabled} status={status}>
            <AntdAutoComplete
                {...props}
                disabled={disabled}
                popupClassName={`ant-select-dropdown kit-select-dropdown-bottom ${popupClassName || ''}`}
            >
                <KitInput
                    prefix={<SearchOutlined />}
                    allowClear={allowClear}
                    autoFocus={autoFocus}
                    defaultValue={defaultValue}
                    placeholder={placeholder as string}
                    status={status}
                    value={value}
                    onBlur={onBlur}
                />
            </AntdAutoComplete>
        </KitInputWrapper>
    );
};

KitAutoComplete.displayName = 'KitAutoComplete';
