import {createGlobalStyle} from 'styled-components';
import theme from '@theme/index';

export const DropDownStyle = createGlobalStyle`
    &.ant-dropdown .ant-dropdown-menu {
        background-color: ${theme.color.secondary.mediumGrey.mediumGrey100};
        overflow: visible;
        padding: 0;
        border-radius: 0;
        box-shadow: none;
        font-family: ${theme.typography.fontFamily};
        font-weight: ${theme.typography.mediumfontWeight};
        color: ${theme.color.neutral.typography.black};

        .ant-dropdown-menu-item, .ant-dropdown-menu-item-option, .ant-dropdown-menu-item-option-selected {
            background: transparent;
            border-radius: 0;
            border: none;
            min-height: 32px;
            font-weight: ${theme.typography.mediumfontWeight};
            color: ${theme.color.neutral.typography.black};

            &:hover {
                background: ${theme.color.primary.blue100};
                font-weight: ${theme.typography.mediumfontWeight};
                color: ${theme.color.neutral.typography.black};
            }

            a {
                font-weight: ${theme.typography.mediumfontWeight} !important;
            }
        }
    }
    &.ant-dropdown-placement-top .ant-dropdown-menu
    &.ant-dropdown-placement-topLeft .ant-dropdown-menu,
    &.ant-dropdown-placement-topRight .ant-dropdown-menu {
        border-radius: 7px 7px 0 0 ;

        .ant-dropdown-menu-item:first-child {
            border-radius: 7px 7px 0 0 ;
        }
    }

    &.ant-dropdown-placement-bottom .ant-dropdown-menu,
    &.ant-dropdown-placement-bottomLeft .ant-dropdown-menu,
    &.ant-dropdown-placement-bottomRight .ant-dropdown-menu {
        border-radius: 0 0 7px 7px ;

        .ant-dropdown-menu-item:last-child {
            border-radius: 0 0 7px 7px ;
        }
    }
`;
