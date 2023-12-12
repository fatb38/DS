import {kitTagCssTokens} from '@theme/aristid/components/DataDisplay/Tag';
import {kitColorsPaletteCssTokens} from '@theme/aristid/general/colors';
import {IKitTagTheme} from '@theme/types/components/DataDisplay/Tag';

export const tagKitTokenToAntdToken = (kitTagTheme: IKitTagTheme) => ({
    defaultBg: `var(${kitTagCssTokens.colors.default.background.default}, var(${kitColorsPaletteCssTokens.primary.primary100}))`,
    defaultColor: `var(${kitTagCssTokens.colors.default.typography.default}, var(${kitColorsPaletteCssTokens.neutral.typography.black}))`,
    borderRadiusSM: kitTagTheme.border.radius
});
