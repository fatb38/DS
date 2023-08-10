import {createGlobalStyle} from 'styled-components';
import {theme} from '../../..';

export const DatePickerDropDownStyle = createGlobalStyle`
    .ant-picker-dropdown {
        ul.ant-picker-ranges {
            margin-block-start: 0px;
        }

        .ant-picker-now .ant-picker-now-btn {
            color: ${theme.color.primary.blue400};

            &:hover {
                color: ${theme.color.primary.blue500};
            }
        }

        .ant-picker-ok button {
            border-radius: 20px;
            padding: 0px 8px;
            box-shadow: none;

            background-color: ${theme.color.primary.blue400};
            border-color: ${theme.color.primary.blue400};
            color: ${theme.color.neutral.typography.white};

            &:hover:not(.ant-btn-disabled) {
                background-color: ${theme.color.primary.blue500};
                border-color: ${theme.color.primary.blue500};
            }

            &:active:not(.ant-btn-disabled) {
                background-color: ${theme.color.primary.blue600};
                border-color: ${theme.color.primary.blue600};
            }

            &[disabled] {
                background-color: ${theme.color.primary.blue100};
                border-color: ${theme.color.primary.blue100};
                color: ${theme.color.primary.blue200};
            }
        }
    }
`;
