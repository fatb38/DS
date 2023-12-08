import {kitPaginationCssTokens} from '@theme/aristid/components/Navigation/Pagination';
import {kitColorsPaletteCssTokens} from '@theme/aristid/general/colors';
import {typographyCssTokens} from '@theme/aristid/general/typography';

export const mapPaginationKitTokenToAntdToken = () => {
    return {
        fontFamily: `var(${kitPaginationCssTokens.typography.fontFamily}, var(${typographyCssTokens.fontFamily}))`,
        fontSize:
            `calc(var(${kitPaginationCssTokens.typography.fontSize}, var(${typographyCssTokens.fontSize5})) * 1px)` as unknown as number,
        colorBgContainer: `var(${kitPaginationCssTokens.colors.background.container.default}, var(${kitColorsPaletteCssTokens.neutral.white}))`,
        colorBgContainerDisabled: `var(${kitPaginationCssTokens.colors.background.container.disabled}, var(${kitColorsPaletteCssTokens.neutral.background}))`,
        fontSizeSM: `calc(var(${typographyCssTokens.fontSize5}) * 1px)` as unknown as number,
        fontWeightStrong: `calc(var(${typographyCssTokens.mediumfontWeight}) * 1px)` as unknown as number,
        controlHeight: 32,
        controlHeightSM: 24,
        colorPrimary: `var(${kitColorsPaletteCssTokens.primary.primary400})`,
        colorPrimaryBorder: `var(${kitColorsPaletteCssTokens.primary.primary400})`,
        colorPrimaryHover: `var(${kitColorsPaletteCssTokens.primary.primary400})`,
        colorBgTextActive: `var(${kitColorsPaletteCssTokens.neutral.black60})`,
        colorTextDisabled: `var(${kitColorsPaletteCssTokens.neutral.black60})`
    };
};
