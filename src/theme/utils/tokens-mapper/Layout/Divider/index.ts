import {kitDividerCssTokens} from '@theme/aristid/components/Layout/Divider';
import {typographyCssTokens} from '@theme/aristid/general/typography';
import {utilitiesCssTokens} from '@theme/aristid/general/utilities';

export const dividerKitTokenToAntdToken = {
    colorText: `var(${kitDividerCssTokens.colors.typography.default}, var(${utilitiesCssTokens.text.textPrimary}))`,
    colorTextHeading: `var(${kitDividerCssTokens.colors.typography.default}, var(${utilitiesCssTokens.text.textPrimary}))`,
    fontFamily: `var(${kitDividerCssTokens.typography.fontFamily}, var(${typographyCssTokens.fontFamily}))`
};
