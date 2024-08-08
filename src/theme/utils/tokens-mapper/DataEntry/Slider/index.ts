import {kitSliderCssTokens} from '@theme/aristid/components/DataEntry/Slider';
import {utilitiesCssTokens} from '@theme/aristid/general/utilities';

export const sliderKitTokenToAntdToken = {
    railBg: `var(${kitSliderCssTokens.rail.colors.background.default}, var(${utilitiesCssTokens.neutral.medium}))`,
    railHoverBg: `var(${kitSliderCssTokens.rail.colors.background.hover}, var(${utilitiesCssTokens.neutral.medium}))`,
    handleSize: 14,
    handleSizeHover: 14,
    trackBg: `var(${kitSliderCssTokens.track.colors.background.default}, var(${utilitiesCssTokens.main.default}))`,
    trackHoverBg: `var(${kitSliderCssTokens.track.colors.background.hover}, var(${utilitiesCssTokens.main.default}))`,
    dotActiveBorderColor: `var(${kitSliderCssTokens.dot.colors.border.active}, var(${utilitiesCssTokens.main.default}))`,
    dotBorderColor: `var(${kitSliderCssTokens.dot.colors.border.default}, var(${utilitiesCssTokens.neutral.medium}))`
};
