import {kitSliderCssTokens} from '@theme/aristid/components/DataEntry/Slider';
import {kitColorsPaletteCssTokens} from '@theme/aristid/general/colors';

export const sliderKitTokenToAntdToken = {
    railBg: `var(${kitSliderCssTokens.rail.colors.background.default}, var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey200}))`,
    railHoverBg: `var(${kitSliderCssTokens.rail.colors.background.hover}, var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey200}))`,
    handleSize: 14,
    handleSizeHover: 14,
    trackBg: `var(${kitSliderCssTokens.track.colors.background.default}, var(${kitColorsPaletteCssTokens.primary.primary400}))`,
    trackHoverBg: `var(${kitSliderCssTokens.track.colors.background.hover}, var(${kitColorsPaletteCssTokens.primary.primary400}))`,
    dotActiveBorderColor: `var(${kitSliderCssTokens.dot.colors.border.active}, var(${kitColorsPaletteCssTokens.primary.primary400}))`,
    dotBorderColor: `var(${kitSliderCssTokens.dot.colors.border.default}, var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey200}))`
};
