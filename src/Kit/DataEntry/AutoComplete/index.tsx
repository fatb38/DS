import React, {FunctionComponent} from 'react';
import {AutoComplete as AntdAutoComplete} from 'antd';
import {SearchOutlined} from '@ant-design/icons';
import {KitInput} from '@kit/DataEntry/';
import type {IKitAutoComplete} from './types';
import KitInputWrapper from '../Input/InputWrapper';
import styled from 'styled-components';

export const StyledKitAutoComplete = styled(AntdAutoComplete)`
    &.ant-select-auto-complete.ant-select-open {
        .ant-input-affix-wrapper {
            border-bottom-left-radius: 0px;
            border-bottom-right-radius: 0px;
        }
    }
`;

export const KitAutoComplete: FunctionComponent<IKitAutoComplete> = ({
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
            <StyledKitAutoComplete
                {...props}
                disabled={disabled}
                popupClassName={`ant-select-dropdown kit-select-dropdown-bottom ${popupClassName || ''}`}
            >
                <KitInput
                    prefix={<SearchOutlined />}
                    allowClear={allowClear}
                    autoFocus={autoFocus}
                    defaultValue={defaultValue}
                    placeholder={placeholder}
                    status={status}
                    value={value}
                    onBlur={onBlur}
                />
            </StyledKitAutoComplete>
        </KitInputWrapper>
    );
};

KitAutoComplete.displayName = 'KitAutoComplete';
