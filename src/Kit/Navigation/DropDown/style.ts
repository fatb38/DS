import { createGlobalStyle } from "styled-components";
import theme from "@kit/DataEntry/Select/theme";

export const DropDownStyle = createGlobalStyle`
    &.ant-dropdown .ant-dropdown-menu {
        background-color: ${theme.dropdownBgColor};
        overflow: visible;
        padding: 0;
        border-radius: 0;
        box-shadow: none;
        font-family: ${theme.fontFamily};
        font-weight: ${theme.fontWeight};
        color: ${theme.selectionColor};

        .ant-dropdown-menu-item, .ant-dropdown-menu-item-option, .ant-dropdown-menu-item-option-selected {
            background: transparent;
            border-radius: 0;
            border: none;
            min-height: ${theme.optionHeight}px;
            font-weight: ${theme.fontWeight};
            color: ${theme.selectionColor};

            &:hover {
                background: ${theme.selectedOptionBg};
                font-weight: ${theme.fontWeight};
                color: ${theme.selectionColor};
            }

            a {
                font-weight: ${theme.fontWeight} !important;
            }
        }
    }
    &.ant-dropdown-placement-top .ant-dropdown-menu
    &.ant-dropdown-placement-topLeft .ant-dropdown-menu,
    &.ant-dropdown-placement-topRight .ant-dropdown-menu {
        border-radius: ${theme.borderRadius} ${theme.borderRadius} 0 0 ;

        .ant-dropdown-menu-item:first-child {
            border-radius: ${theme.borderRadius} ${theme.borderRadius} 0 0 ;
        }
    }

    &.ant-dropdown-placement-bottom .ant-dropdown-menu,
    &.ant-dropdown-placement-bottomLeft .ant-dropdown-menu,
    &.ant-dropdown-placement-bottomRight .ant-dropdown-menu {
        border-radius: 0 0 ${theme.borderRadius} ${theme.borderRadius} ;

        .ant-dropdown-menu-item:last-child {
            border-radius: 0 0 ${theme.borderRadius} ${theme.borderRadius} ;
        }
    }
`;
