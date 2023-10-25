import {createGlobalStyle} from 'styled-components';
import {IDropDownStyle} from './types';

export const DropDownStyle = createGlobalStyle<IDropDownStyle>`
    .ant-dropdown,
    .ant-dropdown-menu.ant-dropdown-menu-submenu {
        padding: 10px;
        border-radius: 7px;
        font-family: ${({$theme}) => $theme.typography.fontFamily};
        font-weight: ${({$theme}) => $theme.typography.fontWeight};
        background-color: ${({$theme}) => $theme.colors.background.default};
        color: ${({$theme}) => $theme.colors.typography.default};
        box-shadow: 0px 3px 14px 0px rgba(0, 0, 0, 0.30);

        .ant-dropdown-arrow {
            &::before, &::after {
                background-color: ${({$theme}) => $theme.subMenu.expIcon.colors.background.default};
                box-shadow: 2px 1px 5px rgba(0, 0, 0, 0.15);
            }
        }

        .ant-dropdown-menu {
            overflow: visible;
            padding: 0px;
            background-color: ${({$theme}) => $theme.menu.colors.background.default};
            box-shadow: none;

            .ant-dropdown-menu-item-group:first-of-type .ant-dropdown-menu-item-group-title {
                padding-top: 0px;
            }

            .ant-dropdown-menu-item-group-title {
                padding: 8px 0;
                color: ${({$theme}) => $theme.menuItemGroup.title.colors.typography.default};
                font-size: ${({$theme}) => $theme.menuItemGroup.title.typography.fontSize}px;
                font-weight: ${({$theme}) => $theme.menuItemGroup.title.typography.fontWeight};
            }

            .ant-dropdown-menu-item-group-list {
                margin: 0 0 0 5px;
            }

            .ant-dropdown-menu-item,
            .ant-dropdown-menu-submenu {
                border-radius: 7px;
                border: none;
                min-height: 32px;
                font-weight: ${({$theme}) => $theme.menuItem.typography.fontWeight};
                color: ${({$theme}) => $theme.menuItem.colors.typography.default};
                padding: 0;

                &:not(:last-child) {
                    margin-bottom: 5px;
                }

                &.ant-dropdown-menu-item-active {
                    background-color: ${({$theme}) => $theme.menuItem.colors.background.active};
                    color: ${({$theme}) => $theme.menuItem.colors.typography.active};
                }

                &.ant-dropdown-menu-item-selected {
                    background-color: ${({$theme}) => $theme.menuItem.colors.background.selected};
                }

                &.ant-dropdown-menu-item-disabled {
                    background-color: ${({$theme}) => $theme.menuItem.colors.background.disabled};
                    color: ${({$theme}) => $theme.menuItem.colors.typography.disabled};
                    cursor: not-allowed;
                }
            }

            .ant-dropdown-menu-item > .ant-dropdown-menu-title-content {
                padding: 0 10px;
            }

            .ant-dropdown-menu-submenu {
                display: flex;
                align-items: center;

                .ant-dropdown-menu-submenu-title {
                    background-color: initial;
                    padding: 0 10px;
                    font-weight: ${({$theme}) => $theme.subMenu.title.typography.fontWeight};
                    color: ${({$theme}) => $theme.subMenu.title.colors.typography.default};
                    width: 100%;

                    .ant-dropdown-menu-title-content {
                        padding-right: 8px;
                    }

                    .ant-dropdown-menu-submenu-expand-icon {
                        position: initial;
                        float: right;

                        .anticon {
                            color: ${({$theme}) => $theme.subMenu.expIcon.colors.typography.default};
                        }
                    }
                }

                &.ant-dropdown-menu-submenu-active {
                    background-color: ${({$theme}) => $theme.subMenu.colors.background.active};
                    color: ${({$theme}) => $theme.subMenu.colors.typography.active};

                    .ant-dropdown-menu-submenu-title {
                        color: ${({$theme}) => $theme.subMenu.title.colors.typography.active};
                    }

                    .ant-dropdown-menu-submenu-expand-icon .anticon {
                        color: ${({$theme}) => $theme.subMenu.expIcon.colors.typography.active};
                    }
                }

                &.ant-dropdown-menu-submenu-disabled {
                    .ant-dropdown-menu-submenu-title {
                        background-color: ${({$theme}) => $theme.subMenu.title.colors.background.disabled};
                        color: ${({$theme}) => $theme.subMenu.title.colors.typography.disabled};
                        cursor: not-allowed;

                        .ant-dropdown-menu-submenu-expand-icon .anticon {
                            background-color: ${({$theme}) => $theme.subMenu.expIcon.colors.background.disabled};
                            color: ${({$theme}) => $theme.subMenu.expIcon.colors.typography.disabled};
                        }
                    }
                }
            }

            .ant-dropdown-menu-item-divider {
                background-color: ${({$theme}) => $theme.menuItem.divider.colors.background.default};
            }

            a {
                transition: all 0s;
            }
        }
    }
`;
