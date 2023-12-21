import {kitPaginationCssTokens} from '@theme/aristid/components/Navigation/Pagination';
import {kitColorsPaletteCssTokens} from '@theme/aristid/general/colors';
import {typographyCssTokens} from '@theme/aristid/general/typography';
import {KitAristidThemeGeneral} from '@theme/aristid/general';

export const paginationKitTokenToAntdToken = {
    fontSize: 14,
    fontFamily: `var(${kitPaginationCssTokens.typography.fontFamily}, var(${typographyCssTokens.fontFamily}))`,
    colorBgContainer: `var(${kitPaginationCssTokens.colors.background.container.default}, var(${kitColorsPaletteCssTokens.neutral.white}))`,
    colorBgContainerDisabled: `var(${kitPaginationCssTokens.colors.background.container.disabled}, var(${kitColorsPaletteCssTokens.neutral.background}))`,
    fontSizeSM: KitAristidThemeGeneral.typography.fontSize5,
    fontWeightStrong: KitAristidThemeGeneral.typography.mediumfontWeight as number,
    controlHeight: 32,
    controlHeightSM: 24,
    colorPrimary: `var(${kitColorsPaletteCssTokens.primary.primary400})`,
    colorPrimaryBorder: `var(${kitColorsPaletteCssTokens.primary.primary400})`,
    colorPrimaryHover: `var(${kitColorsPaletteCssTokens.primary.primary400})`,
    colorBgTextActive: `var(${kitColorsPaletteCssTokens.neutral.black60})`,
    colorTextDisabled: `var(${kitColorsPaletteCssTokens.neutral.black60})`
};
