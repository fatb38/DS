import {createGlobalStyle} from 'styled-components';
import theme from '@theme/index';

export const DropDownStyle = createGlobalStyle`
    .ant-dropdown,
    .ant-dropdown-menu.ant-dropdown-menu-submenu {
        padding: 10px;
        border-radius: 7px;
        font-family: ${theme.typography.fontFamily};
        font-weight: ${theme.typography.mediumfontWeight};
        background-color: ${theme.color.secondary.mediumGrey.mediumGrey100};
        color: ${theme.color.secondary.mediumGrey.mediumGrey500};
        box-shadow: 0px 3px 14px 0px rgba(0, 0, 0, 0.30);

        .ant-dropdown-arrow {
            &::before, &::after {
                background-color: ${theme.color.secondary.mediumGrey.mediumGrey100};
                box-shadow: 2px 1px 5px rgba(0, 0, 0, 0.15);
            }
        }

        .ant-dropdown-menu {
            overflow: visible;
            padding: 0px;
            background-color: ${theme.color.secondary.mediumGrey.mediumGrey100};
            box-shadow: none;

            .ant-dropdown-menu-item-group:first-of-type .ant-dropdown-menu-item-group-title {
                padding-top: 0px;
            }

            .ant-dropdown-menu-item-group-title {
                padding: 8px 0;
                color: ${theme.color.neutral.typography.black};
                font-size: ${theme.typography.fontSize7}px;
                font-weight: ${theme.typography.boldFontWeight};
            }

            .ant-dropdown-menu-item-group-list {
                margin: 0 0 0 5px;
            }

            .ant-dropdown-menu-item,
            .ant-dropdown-menu-submenu {
                border-radius: 7px;
                border: none;
                min-height: 32px;
                font-weight: ${theme.typography.mediumfontWeight};
                color: ${theme.color.secondary.mediumGrey.mediumGrey500};
                padding: 0 10px;

                &:not(:last-child) {
                    margin-bottom: 5px;
                }

                &.ant-dropdown-menu-item-active {
                    background-color: ${theme.color.primary.blue100};
                    color: ${theme.color.primary.blue400};
                }

                &.ant-dropdown-menu-item-selected {
                    background-color: ${theme.color.primary.blue100};
                }

                &.ant-dropdown-menu-item-disabled {
                    background-color: ${theme.color.secondary.mediumGrey.mediumGrey100};
                    color: ${theme.color.secondary.mediumGrey.mediumGrey400};
                    cursor: not-allowed;
                }
            }

            .ant-dropdown-menu-submenu {
                display: flex;
                align-items: center;

                .ant-dropdown-menu-submenu-title {
                    background-color: initial;
                    padding: 0;
                    font-weight: ${theme.typography.mediumfontWeight};
                    color: ${theme.color.secondary.mediumGrey.mediumGrey500};
                    width: 100%;

                    .ant-dropdown-menu-title-content {
                        padding-right: 8px;
                    }

                    .ant-dropdown-menu-submenu-expand-icon {
                        position: initial;
                        float: right;

                        .anticon {
                            color: ${theme.color.secondary.mediumGrey.mediumGrey500};
                        }
                    }
                }

                &.ant-dropdown-menu-submenu-active {
                    background-color: ${theme.color.primary.blue100};
                    color: ${theme.color.primary.blue400};

                    .ant-dropdown-menu-submenu-title,
                    .ant-dropdown-menu-submenu-expand-icon .anticon {
                        color: ${theme.color.primary.blue400};
                    }
                }

                &.ant-dropdown-menu-submenu-disabled {
                    .ant-dropdown-menu-submenu-title {
                        background-color: ${theme.color.secondary.mediumGrey.mediumGrey100};
                        color: ${theme.color.secondary.mediumGrey.mediumGrey400};
                        cursor: not-allowed;

                        .ant-dropdown-menu-submenu-expand-icon .anticon {
                            background-color: ${theme.color.secondary.mediumGrey.mediumGrey100};
                            color: ${theme.color.secondary.mediumGrey.mediumGrey400};
                        }
                    }
                }
            }

            .ant-dropdown-menu-item-divider {
                background-color: ${theme.color.secondary.mediumGrey.mediumGrey200};
            }

            a {
                transition: all 0s;
            }
        }
    }
`;
