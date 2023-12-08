import {kitStepsCssTokens} from '@theme/aristid/components/Navigation/Steps';
import {kitColorsPaletteCssTokens} from '@theme/aristid/general/colors';
import {typographyCssTokens} from '@theme/aristid/general/typography';
import {spacingCssTokens} from '@theme/aristid/general/spacing';
export const mapStepsKitTokenToAntdToken = () => {
    return {
        fontSize:
            `calc(var(${kitStepsCssTokens.typography.fontSize}, var(${typographyCssTokens.fontSize6})) * 1px)` as unknown as number,
        fontFamily: `var(${kitStepsCssTokens.typography.fontfamily}, var(${typographyCssTokens.fontFamily}))`,
        colorTextDescription: `var(${kitStepsCssTokens.colors.typography.description.default}, var(${kitColorsPaletteCssTokens.neutral.typography.black60}))`,
        colorText: `var(${kitStepsCssTokens.colors.typography.text.default}, var(${kitColorsPaletteCssTokens.neutral.typography.black}))`,
        colorSplit: `var(${kitStepsCssTokens.colors.split.default}, var(${kitColorsPaletteCssTokens.neutral.background}))`,
        colorPrimary: `var(${kitColorsPaletteCssTokens.primary.primary400})`,
        colorError: `var(${kitColorsPaletteCssTokens.secondary.red.red400})`,
        fontSizeLG: `calc(var(${typographyCssTokens.fontSize5}) * 1px)` as unknown as number,
        marginSM: `calc(var(${spacingCssTokens.xs}) * 1px)` as unknown as number
    };
};
