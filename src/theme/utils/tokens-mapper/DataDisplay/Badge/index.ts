import {kitBadgeCssTokens} from '@theme/aristid/components/DataDisplay/Badge';
import {typographyCssTokens} from '@theme/aristid/general/typography';
import {utilitiesCssTokens} from '@theme/aristid/general/utilities';

export const badgeKitTokenToAntdToken = {
    fontFamily: `var(${kitBadgeCssTokens.typography.fontFamily}, var(${typographyCssTokens.fontFamily}))`,
    colorError: `var(${kitBadgeCssTokens.colors.background.error}, var(${utilitiesCssTokens.error.default}))`,
    colorSuccess: `var(${kitBadgeCssTokens.colors.background.success}, var(${utilitiesCssTokens.success.default}))`,
    colorPrimary: `var(${kitBadgeCssTokens.colors.background.primary}, var(${utilitiesCssTokens.main.default}))`,
    colorWarning: `var(${kitBadgeCssTokens.colors.background.warning}, var(${utilitiesCssTokens.warning.default}))`,
    colorTextPlaceholder: `var(${utilitiesCssTokens.disabled})`
};
