import {kitProgressCssTokens} from '@theme/aristid/components/Feedback/Progress';
import {typographyCssTokens} from '@theme/aristid/general/typography';
import {utilitiesCssTokens} from '@theme/aristid/general/utilities';

export const progressKitTokenToAntdToken = {
    colorBgContainer: `var(${kitProgressCssTokens.colors.background}, var(${utilitiesCssTokens.neutral.light}))`,
    colorInfo: `var(${kitProgressCssTokens.colors.progress.info}, var(${utilitiesCssTokens.main.default}))`,
    colorSuccess: `var(${kitProgressCssTokens.colors.progress.success}, var(${utilitiesCssTokens.success.default}))`,
    colorError: `var(${kitProgressCssTokens.colors.progress.error}, var(${utilitiesCssTokens.error.default}))`,
    fontFamily: `var(${kitProgressCssTokens.typography.fontFamily}, var(${typographyCssTokens.fontFamily}))`
};
