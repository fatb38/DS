import React, {Ref, forwardRef} from 'react';
import {AutoComplete as AntdAutoComplete, RefSelectProps} from 'antd';
import {KitInput} from '@kit/DataEntry/';
import type {IKitAutoComplete} from './types';
import KitInputWrapper from '../Input/InputWrapper';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';

export const StyledKitAutoComplete = styled(AntdAutoComplete)`
    &.ant-select-auto-complete.ant-select-open {
        .ant-input-affix-wrapper {
            border-bottom-left-radius: 0px;
            border-bottom-right-radius: 0px;
        }
    }
`;

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
            onChange,
            popupClassName,
            ...props
        },
        ref?: Ref<RefSelectProps> | undefined
    ) => {
        return (
            <KitInputWrapper label={label} helper={helper} disabled={disabled} status={status}>
                <StyledKitAutoComplete
                    {...props}
                    disabled={disabled}
                    ref={ref}
                    popupClassName={`ant-select-dropdown kit-select-dropdown-bottom ${popupClassName || ''}`}
                >
                    <KitInput
                        prefix={<FontAwesomeIcon icon={faMagnifyingGlass} />}
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
    }
);

KitAutoComplete.displayName = 'KitAutoComplete';
