import {createGlobalStyle} from 'styled-components';
import {kitTypographyCssTokens} from '@theme/aristid/components/General/Typography';
import {typographyCssTokens} from '@theme/aristid/general/typography';
import {kitColorsPaletteCssTokens} from '@theme/aristid/general/colors';
export const TypographyStyle = createGlobalStyle`
    .ant-typography {
        font-family: 'Inter';
        line-height: var(${kitTypographyCssTokens.typography.lineHeight}, var(${typographyCssTokens.lineHeight1}));
        font-weight: var(${kitTypographyCssTokens.typography.fontWeight}, var(${typographyCssTokens.defaultFontWeight}));
        color: var(
            ${kitTypographyCssTokens.colors.typography.default},
            var(${kitColorsPaletteCssTokens.neutral.typography.black})
        );

        &.ant-typography-disabled {
            color: var(
                ${kitTypographyCssTokens.colors.typography.disabled},
                var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey400})
            );
        }
    }

    a.ant-typography {
        color: var(${kitTypographyCssTokens.Link.colors.typography.default}, var(${kitColorsPaletteCssTokens.primary.primary400}));
        &:hover {
            color: var(${kitTypographyCssTokens.Link.colors.typography.hover}, var(${kitColorsPaletteCssTokens.primary.primary300}));
        }
    }

    h1.ant-typography {
        font-family: 'Inter';
        font-weight: var(${kitTypographyCssTokens.typography.fontWeight}, var(${typographyCssTokens.defaultFontWeight}));
        color: var(
            ${kitTypographyCssTokens.colors.typography.default},
            var(${kitColorsPaletteCssTokens.neutral.typography.black})
        );
        font-size: calc(var(${kitTypographyCssTokens.Title.level1.typography.fontSize}, var(${typographyCssTokens.fontSize1})) * 1px);
        line-height: var(${kitTypographyCssTokens.Title.level1.typography.lineHeight}, var(${typographyCssTokens.lineHeight1}));
    }

    h2.ant-typography {
        font-family: 'Inter';
        font-weight: var(${kitTypographyCssTokens.typography.fontWeight}, var(${typographyCssTokens.defaultFontWeight}));
        color: var(
            ${kitTypographyCssTokens.colors.typography.default},
            var(${kitColorsPaletteCssTokens.neutral.typography.black})
        );
        font-size: calc(var(${kitTypographyCssTokens.Title.level2.typography.fontSize}, var(${typographyCssTokens.fontSize2})) * 1px);
        line-height: var(${kitTypographyCssTokens.Title.level2.typography.lineHeight}, var(${typographyCssTokens.lineHeight2}));
    }

    h3.ant-typography {
        font-family: 'Inter';
        font-weight: var(${kitTypographyCssTokens.typography.fontWeight}, var(${typographyCssTokens.defaultFontWeight}));
        color: var(
            ${kitTypographyCssTokens.colors.typography.default},
            var(${kitColorsPaletteCssTokens.neutral.typography.black})
        );
        font-size: calc(var(${kitTypographyCssTokens.Title.level3.typography.fontSize}, var(${typographyCssTokens.fontSize3})) * 1px);
        line-height: var(${kitTypographyCssTokens.Title.level3.typography.lineHeight}, var(${typographyCssTokens.lineHeight3}));
    }

    h4.ant-typography {
        font-family: 'Inter';
        font-weight: var(${kitTypographyCssTokens.typography.fontWeight}, var(${typographyCssTokens.defaultFontWeight}));
        color: var(
            ${kitTypographyCssTokens.colors.typography.default},
            var(${kitColorsPaletteCssTokens.neutral.typography.black})
        );
        font-size: calc(var(${kitTypographyCssTokens.Title.level4.typography.fontSize}, var(${typographyCssTokens.fontSize4})) * 1px);
        line-height: var(${kitTypographyCssTokens.Title.level4.typography.lineHeight}, var(${typographyCssTokens.lineHeight4}));
    }

`;
