import {createGlobalStyle} from 'styled-components';
import {kitDropDownCssTokens} from '@theme/aristid/components/Navigation/DropDown';
import {typographyCssTokens} from '@theme/aristid/general/typography';
import {kitColorsPaletteCssTokens} from '@theme/aristid/general/colors';

export const DropDownStyle = createGlobalStyle`
    .ant-dropdown,
    .ant-dropdown-menu.ant-dropdown-menu-submenu {
        padding: 10px;
        border-radius: 7px;
        font-family: var(${kitDropDownCssTokens.typography.fontFamily}, var(${typographyCssTokens.fontFamily}));
        font-weight: var(${kitDropDownCssTokens.typography.fontWeight}, var(${typographyCssTokens.mediumfontWeight}));
        background-color: var(
            ${kitDropDownCssTokens.colors.background.default},
            var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey100})
        );
        color: var(
            ${kitDropDownCssTokens.colors.typography.default},
            var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey500})
        );
        box-shadow: 0px 3px 14px 0px rgba(0, 0, 0, 0.30);

        .ant-dropdown-arrow {
            &::before, &::after {
                background-color: var(
                    ${kitDropDownCssTokens.subMenu.expIcon.colors.background.default},
                    var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey100})
                );
                box-shadow: 2px 1px 5px rgba(0, 0, 0, 0.15);
            }
        }

        .ant-dropdown-menu {
            overflow: visible;
            padding: 0px;
            background-color: var(
                ${kitDropDownCssTokens.menu.colors.background.default},
                var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey100})
            );
            box-shadow: none;

            .ant-dropdown-menu-item-group:first-of-type .ant-dropdown-menu-item-group-title {
                padding-top: 0px;
            }

            .ant-dropdown-menu-item-group-title {
                padding: 8px 0;
                color: var(
                    ${kitDropDownCssTokens.menuItemGroup.title.colors.typography.default},
                    var(${kitColorsPaletteCssTokens.neutral.typography.black})
                );
                font-size: calc(
                    var(
                        ${kitDropDownCssTokens.menuItemGroup.title.typography.fontSize},
                        var(${typographyCssTokens.fontSize7})
                    ) * 1px
                );
                font-weight: var(
                    ${kitDropDownCssTokens.menuItemGroup.title.typography.fontWeight},
                    var(${typographyCssTokens.boldFontWeight})
                );
            }

            .ant-dropdown-menu-item-group-list {
                margin: 0 0 0 5px;
            }

            .ant-dropdown-menu-item,
            .ant-dropdown-menu-submenu {
                border-radius: 7px;
                border: none;
                min-height: 32px;
                font-weight: var(
                    ${kitDropDownCssTokens.menuItem.typography.fontWeight},
                    var(${typographyCssTokens.mediumfontWeight})
                );
                color: var(
                    ${kitDropDownCssTokens.menuItem.colors.typography.default},
                    var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey500})
                );
                padding: 0;

                &:not(:last-child) {
                    margin-bottom: 5px;
                }

                &.ant-dropdown-menu-item-active {
                    background-color: var(
                        ${kitDropDownCssTokens.menuItem.colors.background.active},
                        var(${kitColorsPaletteCssTokens.primary.primary100})
                    );
                    color: var(
                        ${kitDropDownCssTokens.menuItem.colors.typography.active},
                        var(${kitColorsPaletteCssTokens.primary.primary400})
                    );
                }

                &.ant-dropdown-menu-item-selected {
                    background-color: var(
                        ${kitDropDownCssTokens.menuItem.colors.background.selected},
                        var(${kitColorsPaletteCssTokens.primary.primary100})
                    );
                }

                &.ant-dropdown-menu-item-disabled {
                    background-color: var(
                        ${kitDropDownCssTokens.menuItem.colors.background.disabled},
                        var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey100})
                    );
                    color: var(
                        ${kitDropDownCssTokens.menuItem.colors.typography.disabled},
                        var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey400})
                    );
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
                    font-weight: var(
                        ${kitDropDownCssTokens.subMenu.title.typography.fontWeight},
                        var(${typographyCssTokens.mediumfontWeight})
                    );
                    color: var(
                        ${kitDropDownCssTokens.subMenu.title.colors.typography.default},
                        var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey500})
                    );
                    width: 100%;

                    .ant-dropdown-menu-title-content {
                        padding-right: 8px;
                    }

                    .ant-dropdown-menu-submenu-expand-icon {
                        position: initial;
                        float: right;

                        svg {
                            color: var(
                                ${kitDropDownCssTokens.subMenu.expIcon.colors.typography.default},
                                var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey500})
                            );
                        }
                    }
                }

                &.ant-dropdown-menu-submenu-active {
                    background-color: var(
                        ${kitDropDownCssTokens.subMenu.colors.background.active},
                        var(${kitColorsPaletteCssTokens.primary.primary100})
                    );
                    color: var(
                        ${kitDropDownCssTokens.subMenu.colors.typography.active},
                        var(${kitColorsPaletteCssTokens.primary.primary400})
                    );

                    .ant-dropdown-menu-submenu-title {
                        color: var(
                            ${kitDropDownCssTokens.subMenu.title.colors.typography.active},
                            var(${kitColorsPaletteCssTokens.primary.primary400})
                        );
                    }

                    .ant-dropdown-menu-submenu-expand-icon svg {
                        color: var(
                            ${kitDropDownCssTokens.subMenu.expIcon.colors.typography.active},
                            var(${kitColorsPaletteCssTokens.primary.primary400})
                        );
                    }
                }

                &.ant-dropdown-menu-submenu-disabled {
                    .ant-dropdown-menu-submenu-title {
                        background-color: var(
                            ${kitDropDownCssTokens.subMenu.title.colors.background.disabled},
                            var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey100})
                        );
                        color: var(
                            ${kitDropDownCssTokens.subMenu.title.colors.typography.disabled},
                            var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey400})
                        );
                        cursor: not-allowed;

                        .ant-dropdown-menu-submenu-expand-icon svg {
                            background-color: var(
                                ${kitDropDownCssTokens.subMenu.expIcon.colors.background.disabled},
                                var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey100})
                            );
                            color: var(
                                ${kitDropDownCssTokens.subMenu.expIcon.colors.typography.disabled},
                                var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey400})
                            );
                        }
                    }
                }
            }

            .ant-dropdown-menu-item-divider {
                background-color: var(
                    ${kitDropDownCssTokens.menuItem.divider.colors.background.default},
                    var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey200})
                );
            }

            a {
                transition: all 0s;
            }
        }

        &.ant-dropdown .ant-dropdown-menu {
            max-height: 256px;
            overflow: auto;
        }
    }
`;
