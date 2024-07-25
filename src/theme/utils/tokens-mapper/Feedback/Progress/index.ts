import {kitProgressCssTokens} from '@theme/aristid/components/Feedback/Progress';
import {typographyCssTokens} from '@theme/aristid/general/typography';
import {utilitiesCssTokens} from '@theme/aristid/general/utilities';

export const progressKitTokenToAntdToken = {
    colorBgContainer: `var(${kitProgressCssTokens.colors.background}, var(${utilitiesCssTokens.neutral.neutralLight}))`,
    colorInfo: `var(${kitProgressCssTokens.colors.progress.info}, var(${utilitiesCssTokens.main.mainColor}))`,
    colorSuccess: `var(${kitProgressCssTokens.colors.progress.success}, var(${utilitiesCssTokens.success.successColor}))`,
    colorError: `var(${kitProgressCssTokens.colors.progress.error}, var(${utilitiesCssTokens.error.errorColor}))`,
    fontFamily: `var(${kitProgressCssTokens.typography.fontFamily}, var(${typographyCssTokens.fontFamily}))`
};
