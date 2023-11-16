import {createGlobalStyle} from 'styled-components';
import {IStyledAntdTour} from './types';

export const TourStyle = createGlobalStyle<IStyledAntdTour>`
    .ant-tour-primary {
        .ant-tour-arrow::after, .ant-tour-arrow::before {
            background-color: ${({$generalTheme}) => $generalTheme.colors.primary.primary400};
        }
        .ant-tour-content .ant-tour-inner {
            background-color: ${({$generalTheme}) => $generalTheme.colors.primary.primary400};
        }
    }

    .ant-tour .ant-tour-content .ant-tour-inner {
        .ant-tour-footer {
            align-items: center;

            .ant-tour-buttons .ant-btn{

                height: 40px;
                min-width: 40px;
                box-shadow: none;
                padding: 6.6px 15px;
                border-radius: ${({$buttonTheme}) => $buttonTheme.border.radius}px;

                &.ant-btn-primary {
                    color: ${({$buttonTheme}) => $buttonTheme.primary.colors.typography.default};
                    background-color: ${({$buttonTheme}) => $buttonTheme.primary.colors.background.default};
                    font-weight: ${({$buttonTheme}) => $buttonTheme.primary.typography.fontWeight};

                    &:hover {
                        color: ${({$buttonTheme}) => $buttonTheme.primary.colors.typography.hover};
                        background-color: ${({$buttonTheme}) => $buttonTheme.primary.colors.background.hover};
                        border-color: ${({$buttonTheme}) => $buttonTheme.primary.colors.border.hover};
                        border-style: solid;
                    }

                    &:focus {
                        color: ${({$buttonTheme}) => $buttonTheme.primary.colors.typography.focus};
                        background-color: ${({$buttonTheme}) => $buttonTheme.primary.colors.background.focus};
                        border-color: ${({$buttonTheme}) => $buttonTheme.primary.colors.border.focus};
                        border-style: dashed;
                    }

                    &:active {
                        color: ${({$buttonTheme}) => $buttonTheme.primary.colors.typography.active};
                        background-color: ${({$buttonTheme}) => $buttonTheme.primary.colors.background.active};
                        border-color: ${({$buttonTheme}) => $buttonTheme.primary.colors.border.active};
                        border-style: solid;
                    }
                }

                &.ant-btn-default {
                    color: ${({$buttonTheme}) => $buttonTheme.default.colors.typography.default};
                    background-color: ${({$buttonTheme}) => $buttonTheme.default.colors.background.default};
                    font-weight: ${({$buttonTheme}) => $buttonTheme.default.typography.fontWeight};
                    &:hover {
                        color: ${({$buttonTheme}) => $buttonTheme.default.colors.typography.hover};
                        background-color: ${({$buttonTheme}) => $buttonTheme.default.colors.background.hover};
                        border-color: ${({$buttonTheme}) => $buttonTheme.default.colors.border.hover};
                        border-style: solid;
                    }
                    &:focus {
                        color: ${({$buttonTheme}) => $buttonTheme.default.colors.typography.focus};
                        background-color: ${({$buttonTheme}) => $buttonTheme.default.colors.background.focus};
                        border-color: ${({$buttonTheme}) => $buttonTheme.default.colors.border.focus};
                        border-style: dashed;
                    }
                    &:active {
                        color: ${({$buttonTheme}) => $buttonTheme.default.colors.typography.active};
                        background-color: ${({$buttonTheme}) => $buttonTheme.default.colors.background.active};
                        border-color: ${({$buttonTheme}) => $buttonTheme.default.colors.border.active};
                        border-style: solid;
                    }
                }
            }
        }
    }
`;
