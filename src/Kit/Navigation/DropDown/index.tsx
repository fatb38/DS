import React from 'react';
import styled from 'styled-components';
import {Dropdown as AntdDropdown} from 'antd';
import {KitDropdownProps} from './types';

const StyledDropDown = styled(AntdDropdown)``;

export const KitDropDown: React.FunctionComponent<KitDropdownProps> = props => {
    return <StyledDropDown {...props} />;
};

KitDropDown.displayName = 'KitDropDown';
