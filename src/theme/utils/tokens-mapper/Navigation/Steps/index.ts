import {kitStepsCssTokens} from '@theme/aristid/components/Navigation/Steps';
import {kitColorsPaletteCssTokens} from '@theme/aristid/general/colors';
import {typographyCssTokens} from '@theme/aristid/general/typography';
import {IKitStepsTheme} from '@theme/types/components/Navigation/Steps';
import {KitAristidThemeGeneral} from '@theme/aristid/general';
export const stepsKitTokenToAntdToken = (kitStepsTheme: IKitStepsTheme) => ({
    fontSize: kitStepsTheme.typography.fontSize,
    fontFamily: `var(${kitStepsCssTokens.typography.fontfamily}, var(${typographyCssTokens.fontFamily}))`,
    colorTextDescription: `var(${kitStepsCssTokens.colors.typography.description.default}, var(${kitColorsPaletteCssTokens.neutral.typography.black60}))`,
    colorText: `var(${kitStepsCssTokens.colors.typography.text.default}, var(${kitColorsPaletteCssTokens.neutral.typography.black}))`,
    colorSplit: `var(${kitStepsCssTokens.colors.split.default}, var(${kitColorsPaletteCssTokens.neutral.background}))`,
    colorPrimary: `var(${kitColorsPaletteCssTokens.primary.primary400})`,
    colorError: `var(${kitColorsPaletteCssTokens.secondary.red.red400})`,
    fontSizeLG: KitAristidThemeGeneral.typography.fontSize5,
    marginSM: KitAristidThemeGeneral.spacing.xs
});
