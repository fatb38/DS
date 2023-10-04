import React, {FunctionComponent} from 'react';
import styled from 'styled-components';
import {Dropdown as AntdDropdown} from 'antd';
import {IKitDropdown} from './types';

const StyledDropDown = styled(AntdDropdown)``;

export const KitDropDown: FunctionComponent<IKitDropdown> = props => {
    return <StyledDropDown {...props} />;
};

KitDropDown.displayName = 'KitDropDown';
