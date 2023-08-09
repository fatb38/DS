import React from 'react';
import styled from 'styled-components';
import { AutoComplete } from "antd";
import { SearchOutlined } from '@ant-design/icons';
import { KitInput } from '../Input';
import type { KitAutoCompleteProps } from './types';

const StyledAutoComplete = styled(AutoComplete)<KitAutoCompleteProps>``;

export const KitAutoComplete = React.forwardRef<any, KitAutoCompleteProps>((props, ref) => {
    const {
        allowClear,
        autoFocus,
        defaultValue,
        disabled,
        placeholder,
        status,
        value,
        onBlur,
        onChange,
        popupClassName,
        ...rest
    } = props;
    return <StyledAutoComplete {...rest} ref={ref} popupClassName={`ant-select-dropdown kit-select-dropdown-bottom ${popupClassName || ''}`} >
        <KitInput
            prefix={<SearchOutlined/>}
            allowClear={allowClear as boolean}
            autoFocus={autoFocus}
            defaultValue={defaultValue}
            disabled={disabled}
            placeholder={placeholder as string}
            status={status}
            value={value}
            onBlur={onBlur}/>
    </StyledAutoComplete>;
});

KitAutoComplete.displayName = 'KitAutoComplete';