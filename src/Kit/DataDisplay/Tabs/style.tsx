import {createGlobalStyle} from 'styled-components';
import {kitTabsCssTokens} from '@theme/aristid/components/DataDisplay/Tabs';
import {typographyCssTokens} from '@theme/aristid/general/typography';
import {kitColorsPaletteCssTokens} from '@theme/aristid/general/colors';

export const TabsDropDownStyle = createGlobalStyle`
    .ant-tabs-dropdown,
    .ant-tabs-dropdown-menu.ant-tabs-dropdown-menu-submenu {
        padding: 10px;
        border-radius: 7px;
        font-family: var(${kitTabsCssTokens.DropDown.typography.fontFamily},var(${typographyCssTokens.fontFamily}));
        font-weight: var(${kitTabsCssTokens.DropDown.typography.fontWeight},var(${typographyCssTokens.mediumfontWeight}));
        background-color: var(${kitTabsCssTokens.DropDown.colors.background.default},var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey100}));
        color: var(${kitTabsCssTokens.DropDown.colors.typography.default},var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey500}));
        box-shadow: 0px 3px 14px 0px rgba(0, 0, 0, 0.30);

        .ant-tabs-dropdown-menu {
            padding: 0px;
            background-color: var(${kitTabsCssTokens.DropDown.menu.colors.background.default},var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey100}));
            box-shadow: none;

            .ant-tabs-dropdown-menu-item,
            .ant-tabs-dropdown-menu-submenu {
                border-radius: 7px;
                border: none;
                min-height: 32px;
                font-weight: var(${kitTabsCssTokens.DropDown.menuItem.typography.fontWeight},var(${typographyCssTokens.mediumfontWeight}));
                color: var(${kitTabsCssTokens.DropDown.menuItem.colors.typography.default},var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey500}));
                padding: 0 10px;

                &:not(:last-child) {
                    margin-bottom: 5px;
                }

                &.ant-tabs-dropdown-menu-item-active {
                    background-color: var(${kitTabsCssTokens.DropDown.menuItem.colors.background.active},var(${kitColorsPaletteCssTokens.primary.primary100}));
                    color: var(${kitTabsCssTokens.DropDown.menuItem.colors.typography.active},var(${kitColorsPaletteCssTokens.primary.primary400}));
                }

                &.ant-tabs-dropdown-menu-item-selected {
                    background-color: var(${kitTabsCssTokens.DropDown.menuItem.colors.background.selected},var(${kitColorsPaletteCssTokens.primary.primary100}));
                }

                &.ant-tabs-dropdown-menu-item-disabled {
                    background-color: var(${kitTabsCssTokens.DropDown.menuItem.colors.background.disabled},var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey100}));
                    color: var(${kitTabsCssTokens.DropDown.menuItem.colors.typography.disabled},var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey400}));
                    cursor: not-allowed;
                }
            }
        }
    }
`;
