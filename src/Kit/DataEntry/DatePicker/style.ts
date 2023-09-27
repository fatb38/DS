import {createGlobalStyle} from 'styled-components';
import {KitDatePickerTheme} from '@theme/types/components/DataEntry/DatePicker';

export const DatePickerDropDownStyle = createGlobalStyle<{
    $theme: KitDatePickerTheme['DropDown'];
}>`
    .ant-picker-dropdown {
        ul.ant-picker-ranges {
            margin-block-start: 0px;
        }

        .ant-picker-now .ant-picker-now-btn {
            color: ${({$theme}) => $theme.colors.button.now.typography.default};

            &:hover {
                color: ${({$theme}) => $theme.colors.button.now.typography.hover};
            }
        }

        .ant-picker-ok button {
            border-radius: 20px;
            padding: 0px 8px;
            box-shadow: none;

            background-color: ${({$theme}) => $theme.colors.button.ok.background.default};
            border-color: ${({$theme}) => $theme.colors.button.ok.border.default};
            color: ${({$theme}) => $theme.colors.button.ok.typography.default};

            &:hover:not(.ant-btn-disabled) {
                background-color: ${({$theme}) => $theme.colors.button.ok.background.hover};
                border-color: ${({$theme}) => $theme.colors.button.ok.border.hover};
            }

            &:active:not(.ant-btn-disabled) {
                background-color: ${({$theme}) => $theme.colors.button.ok.background.active};
                border-color: ${({$theme}) => $theme.colors.button.ok.border.active};
            }

            &[disabled] {
                background-color: ${({$theme}) => $theme.colors.button.ok.background.disabled};
                border-color: ${({$theme}) => $theme.colors.button.ok.border.disabled};
                color: ${({$theme}) => $theme.colors.button.ok.typography.disabled};
            }
        }
    }
`;
