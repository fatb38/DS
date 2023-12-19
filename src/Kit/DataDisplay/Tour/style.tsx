import {createGlobalStyle} from 'styled-components';
import {kitColorsPaletteCssTokens} from '@theme/aristid/general/colors';
import {kitButtonCssTokens} from '@theme/aristid/components/General/Button';
import {borderCssTokens} from '@theme/aristid/general/border';
import {typographyCssTokens} from '@theme/aristid/general/typography';

export const TourStyle = createGlobalStyle`
    .ant-tour-primary {
        .ant-tour-arrow::after, .ant-tour-arrow::before {
            background-color: var(${kitColorsPaletteCssTokens.primary.primary400});
        }
        .ant-tour-content .ant-tour-inner {
            background-color: var(${kitColorsPaletteCssTokens.primary.primary400});
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
                border-radius: calc(var(${kitButtonCssTokens.border.radius}, var(${borderCssTokens.radius.pills})) * 1px);

                &.ant-btn-primary {
                    color: var(${kitButtonCssTokens.primary.colors.typography.default}, var(${kitColorsPaletteCssTokens.neutral.typography.white}));
                    background-color: var(${kitButtonCssTokens.primary.colors.background.default}, var(${kitColorsPaletteCssTokens.primary.primary400}));
                    font-weight: var(${kitButtonCssTokens.primary.typography.fontWeight}, var(${typographyCssTokens.regularFontWeight}));

                    &:hover {
                        color: var(${kitButtonCssTokens.primary.colors.typography.hover}, var(${kitColorsPaletteCssTokens.neutral.typography.white}));
                        background-color: var(${kitButtonCssTokens.primary.colors.background.hover}, var(${kitColorsPaletteCssTokens.primary.primary500}));
                        border-color: var(${kitButtonCssTokens.primary.colors.border.hover}, var(${kitColorsPaletteCssTokens.primary.primary500}));
                        border-style: solid;
                    }

                    &:focus {
                        color: var(${kitButtonCssTokens.primary.colors.typography.focus}, var(${kitColorsPaletteCssTokens.neutral.typography.white}));
                        background-color: var(${kitButtonCssTokens.primary.colors.background.focus}, var(${kitColorsPaletteCssTokens.primary.primary400}));
                        border-color: var(${kitButtonCssTokens.primary.colors.border.focus}, var(${kitColorsPaletteCssTokens.primary.primary400}));
                        border-style: dashed;
                    }

                    &:active {
                        color: var(${kitButtonCssTokens.primary.colors.typography.active}, var(${kitColorsPaletteCssTokens.neutral.typography.white}));
                        background-color: var(${kitButtonCssTokens.primary.colors.background.active}, var(${kitColorsPaletteCssTokens.primary.primary600}));
                        border-color: var(${kitButtonCssTokens.primary.colors.border.active}, var(${kitColorsPaletteCssTokens.primary.primary600}));
                        border-style: solid;
                    }
                }

                &.ant-btn-default {
                    color: var(${kitButtonCssTokens.default.colors.typography.default}, var(${kitColorsPaletteCssTokens.primary.primary400}));
                    background-color: var(${kitButtonCssTokens.default.colors.background.default}, var(${kitColorsPaletteCssTokens.neutral.white}));;
                    font-weight: calc(var(${kitButtonCssTokens.default.typography.fontWeight}, var(${typographyCssTokens.regularFontWeight})) * 1px);
                    &:hover {
                        color: var(${kitButtonCssTokens.default.colors.typography.hover}, var(${kitColorsPaletteCssTokens.primary.primary400}));
                        background-color: var(${kitButtonCssTokens.default.colors.background.hover}, var(${kitColorsPaletteCssTokens.neutral.white}));
                        border-color: var(${kitButtonCssTokens.default.colors.border.hover}, var(${kitColorsPaletteCssTokens.primary.primary400}));;
                        border-style: solid;
                    }
                    &:focus {
                        color: var(${kitButtonCssTokens.default.colors.typography.focus}, var(${kitColorsPaletteCssTokens.primary.primary400}));
                        background-color: var(${kitButtonCssTokens.default.colors.background.focus}, var(${kitColorsPaletteCssTokens.neutral.white}));
                        border-color: var(${kitButtonCssTokens.default.colors.border.focus}, var(${kitColorsPaletteCssTokens.primary.primary400}));;
                        border-style: dashed;
                    }
                    &:active {
                        color: var(${kitButtonCssTokens.default.colors.typography.active}, var(${kitColorsPaletteCssTokens.primary.primary400}));
                        background-color: var(${kitButtonCssTokens.default.colors.background.active}, var(${kitColorsPaletteCssTokens.primary.primary100}));
                        border-color: var(${kitButtonCssTokens.default.colors.border.active}, var(${kitColorsPaletteCssTokens.primary.primary400}));
                        border-style: solid;
                    }
                }
            }
        }

}
`;
