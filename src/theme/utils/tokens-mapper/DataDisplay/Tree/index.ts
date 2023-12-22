import {kitTreeCssTokens} from '@theme/aristid/components/DataDisplay/Tree';
import {kitColorsPaletteCssTokens} from '@theme/aristid/general/colors';
import {typographyCssTokens} from '@theme/aristid/general/typography';

export const treeKitTokenToAntdToken = {
    fontFamily: `var(${kitTreeCssTokens.typography.fontFamily}, var(${typographyCssTokens.fontFamily}))`,
    fontSize:
        `calc(var(${kitTreeCssTokens.typography.fontSize}, var(${typographyCssTokens.fontSize5})) * 1px)` as unknown as number,
    fontSizeIcon:
        `calc(var(${kitTreeCssTokens.icon.fontSize}, var(${typographyCssTokens.fontSize5})) * 1px)` as unknown as number,
    controlItemBgHover: `var(${kitTreeCssTokens.colors.background.hover}, var(${kitColorsPaletteCssTokens.primary.primary100}))`
};
