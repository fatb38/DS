import {kitStepsCssTokens} from '@theme/aristid/components/Navigation/Steps';
import {typographyCssTokens} from '@theme/aristid/general/typography';
import {KitAristidThemeGeneral} from '@theme/aristid/general';
import {utilitiesCssTokens} from '@theme/aristid/general/utilities';

export const stepsKitTokenToAntdToken = {
    fontSize:
        `calc(var(${kitStepsCssTokens.typography.fontSize}, var(${typographyCssTokens.fontSize7})) * 1px)` as unknown as number,
    fontFamily: `var(${kitStepsCssTokens.typography.fontfamily}, var(${typographyCssTokens.fontFamily}))`,
    colorTextDescription: `var(${kitStepsCssTokens.colors.typography.description.default}, var(${utilitiesCssTokens.text.primary}))`,
    colorText: `var(${kitStepsCssTokens.colors.typography.text.default}, var(${utilitiesCssTokens.text.primary}))`,
    colorSplit: `var(${kitStepsCssTokens.colors.split.default}, var(${utilitiesCssTokens.neutral.medium}))`,
    colorPrimary: `var(${utilitiesCssTokens.main.default})`,
    colorError: `var(${utilitiesCssTokens.error.default})`,
    fontSizeLG: KitAristidThemeGeneral.typography.fontSize5,
    marginSM: KitAristidThemeGeneral.spacing.xs
};
