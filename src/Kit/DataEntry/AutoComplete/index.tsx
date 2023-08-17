import React from 'react';
import styled from 'styled-components';
import {AutoComplete} from 'antd';
import {SearchOutlined} from '@ant-design/icons';
import {KitInput} from '@kit/DataEntry/';
import type {KitAutoCompleteProps} from './types';

const StyledAutoComplete = styled(AutoComplete)<KitAutoCompleteProps>``;

export const KitAutoComplete = React.forwardRef<any, KitAutoCompleteProps>(
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
            onChange,
            popupClassName,
            ...props
        },
        ref
    ) => {
        return (
            <StyledAutoComplete
                {...props}
                ref={ref}
                disabled={disabled}
                popupClassName={`ant-select-dropdown kit-select-dropdown-bottom ${popupClassName || ''}`}
            >
                <KitInput
                    prefix={<SearchOutlined />}
                    label={label}
                    helper={helper}
                    allowClear={allowClear}
                    autoFocus={autoFocus}
                    defaultValue={defaultValue}
                    placeholder={placeholder as string}
                    status={status}
                    value={value}
                    onBlur={onBlur}
                />
            </StyledAutoComplete>
        );
    }
);

KitAutoComplete.displayName = 'KitAutoComplete';
