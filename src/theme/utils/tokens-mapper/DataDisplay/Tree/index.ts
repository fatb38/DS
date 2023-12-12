import {kitTreeCssTokens} from '@theme/aristid/components/DataDisplay/Tree';
import {kitColorsPaletteCssTokens} from '@theme/aristid/general/colors';
import {typographyCssTokens} from '@theme/aristid/general/typography';
import {IKitTreeTheme} from '@theme/types/components/DataDisplay/Tree';

export const treeKitTokenToAntdToken = (kitTreeTheme: IKitTreeTheme) => ({
    fontFamily: `var(${kitTreeCssTokens.typography.fontFamily}, var(${typographyCssTokens.fontFamily}))`,
    fontSize: kitTreeTheme.typography.fontSize,
    fontSizeIcon: kitTreeTheme.icon.fontSize,
    controlItemBgHover: `var(${kitTreeCssTokens.colors.background.hover}, var(${kitColorsPaletteCssTokens.primary.primary100}))`
});
