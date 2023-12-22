import {kitProgressCssTokens} from '@theme/aristid/components/Feedback/Progress';
import {kitColorsPaletteCssTokens} from '@theme/aristid/general/colors';
import {typographyCssTokens} from '@theme/aristid/general/typography';

export const progressKitTokenToAntdToken = {
    colorBgContainer: `var(${kitProgressCssTokens.colors.background}, var(${kitColorsPaletteCssTokens.neutral.background}))`,
    colorInfo: `var(${kitProgressCssTokens.colors.progress.info}, var(${kitColorsPaletteCssTokens.primary.primary400}))`,
    colorSuccess: `var(${kitProgressCssTokens.colors.progress.success}, var(${kitColorsPaletteCssTokens.secondary.green.green400}))`,
    colorError: `var(${kitProgressCssTokens.colors.progress.error}, var(${kitColorsPaletteCssTokens.secondary.red.red400}))`,
    fontFamily: `var(${kitProgressCssTokens.typography.fontFamily}, var(${typographyCssTokens.fontFamily}))`
};
