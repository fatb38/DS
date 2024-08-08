import {kitPaginationCssTokens} from '@theme/aristid/components/Navigation/Pagination';
import {typographyCssTokens} from '@theme/aristid/general/typography';
import {KitAristidThemeGeneral} from '@theme/aristid/general';
import {utilitiesCssTokens} from '@theme/aristid/general/utilities';

export const paginationKitTokenToAntdToken = {
    fontSize: 14,
    fontFamily: `var(${kitPaginationCssTokens.typography.fontFamily}, var(${typographyCssTokens.fontFamily}))`,
    colorBgContainer: `var(${kitPaginationCssTokens.colors.background.container.default}, var(${utilitiesCssTokens.light}))`,
    colorBgContainerDisabled: `var(${kitPaginationCssTokens.colors.background.container.disabled}, var(${utilitiesCssTokens.neutral.light}))`,
    fontSizeSM: KitAristidThemeGeneral.typography.fontSize5,
    fontWeightStrong: KitAristidThemeGeneral.typography.mediumfontWeight as number,
    controlHeight: 32,
    controlHeightSM: 24,
    colorPrimary: `var(${utilitiesCssTokens.main.default})`,
    colorPrimaryBorder: `var(${utilitiesCssTokens.main.default})`,
    colorPrimaryHover: `var(${utilitiesCssTokens.main.default})`,
    colorBgTextActive: `var(${utilitiesCssTokens.border})`,
    colorTextDisabled: `var(${utilitiesCssTokens.border})`
};
