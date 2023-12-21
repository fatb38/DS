import {kitDatePickerCssTokens} from '@theme/aristid/components/DataEntry/DatePicker';
import {borderCssTokens} from '@theme/aristid/general/border';
import {kitColorsPaletteCssTokens} from '@theme/aristid/general/colors';
import {typographyCssTokens} from '@theme/aristid/general/typography';
import {createGlobalStyle} from 'styled-components';

export const DatePickerDropDownStyle = createGlobalStyle`
    .ant-picker-dropdown {
        border-radius: calc(var(${kitDatePickerCssTokens.border.radius}, var(${borderCssTokens.radius.s})) * 1px);
        font-size: calc(
            var(${kitDatePickerCssTokens.typography.fontSize}, var(${typographyCssTokens.fontSize5})) * 1px
        );
        ul.ant-picker-ranges {
            margin-block-start: 0px;
        }

        .ant-picker-now .ant-picker-now-btn {
            color: var(${kitDatePickerCssTokens.DropDown.colors.button.now.typography.default},var(${kitColorsPaletteCssTokens.primary.primary400}));

            &:hover {
                color: var(${kitDatePickerCssTokens.DropDown.colors.button.now.typography.hover},var(${kitColorsPaletteCssTokens.primary.primary500}));
            }
        }

        .ant-picker-ok button {
            border-radius: 20px;
            padding: 0px 8px;
            box-shadow: none;

            background-color: var(${kitDatePickerCssTokens.DropDown.colors.button.ok.background.default},var(${kitColorsPaletteCssTokens.primary.primary400}));
            border-color: var(${kitDatePickerCssTokens.DropDown.colors.button.ok.border.default},var(${kitColorsPaletteCssTokens.primary.primary400}));
            color: var(${kitDatePickerCssTokens.DropDown.colors.button.ok.typography.default},var(${kitColorsPaletteCssTokens.neutral.typography.white}));

            &:hover:not(.ant-btn-disabled) {
                background-color: var(${kitDatePickerCssTokens.DropDown.colors.button.ok.background.hover},var(${kitColorsPaletteCssTokens.primary.primary500}));
                border-color: var(${kitDatePickerCssTokens.DropDown.colors.button.ok.border.hover},var(${kitColorsPaletteCssTokens.primary.primary500}));
            }

            &:active:not(.ant-btn-disabled) {
                background-color: var(${kitDatePickerCssTokens.DropDown.colors.button.ok.background.active},var(${kitColorsPaletteCssTokens.primary.primary600}));
                border-color: var(${kitDatePickerCssTokens.DropDown.colors.button.ok.border.active},var(${kitColorsPaletteCssTokens.primary.primary600}));
            }

            &[disabled] {
                background-color: var(${kitDatePickerCssTokens.DropDown.colors.button.ok.background.disabled},var(${kitColorsPaletteCssTokens.primary.primary100}));
                border-color: var(${kitDatePickerCssTokens.DropDown.colors.button.ok.border.disabled},var(${kitColorsPaletteCssTokens.primary.primary100}));
                color: var(${kitDatePickerCssTokens.DropDown.colors.button.ok.typography.disabled},var(${kitColorsPaletteCssTokens.primary.primary200}));
            }
        }
    }
`;
