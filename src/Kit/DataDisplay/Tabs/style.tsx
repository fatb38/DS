import {createGlobalStyle} from 'styled-components';
import {IStyledKitTabsDropDown} from './types';

export const TabsDropDownStyle = createGlobalStyle<IStyledKitTabsDropDown>`
    .ant-tabs-dropdown,
    .ant-tabs-dropdown-menu.ant-tabs-dropdown-menu-submenu {
        padding: 10px;
        border-radius: 7px;
        font-family: ${({$theme}) => $theme.typography.fontFamily};
        font-weight: ${({$theme}) => $theme.typography.fontWeight};
        background-color: ${({$theme}) => $theme.colors.background.default};
        color: ${({$theme}) => $theme.colors.typography.default};
        box-shadow: 0px 3px 14px 0px rgba(0, 0, 0, 0.30);

        .ant-tabs-dropdown-menu {
            padding: 0px;
            background-color: ${({$theme}) => $theme.menu.colors.background.default};
            box-shadow: none;

            .ant-tabs-dropdown-menu-item,
            .ant-tabs-dropdown-menu-submenu {
                border-radius: 7px;
                border: none;
                min-height: 32px;
                font-weight: ${({$theme}) => $theme.menuItem.typography.fontWeight};
                color: ${({$theme}) => $theme.menuItem.colors.typography.default};
                padding: 0 10px;

                &:not(:last-child) {
                    margin-bottom: 5px;
                }

                &.ant-tabs-dropdown-menu-item-active {
                    background-color: ${({$theme}) => $theme.menuItem.colors.background.active};
                    color: ${({$theme}) => $theme.menuItem.colors.typography.active};
                }

                &.ant-tabs-dropdown-menu-item-selected {
                    background-color: ${({$theme}) => $theme.menuItem.colors.background.selected};
                }

                &.ant-tabs-dropdown-menu-item-disabled {
                    background-color: ${({$theme}) => $theme.menuItem.colors.background.disabled};
                    color: ${({$theme}) => $theme.menuItem.colors.typography.disabled};
                    cursor: not-allowed;
                }
            }
        }
    }
`;
