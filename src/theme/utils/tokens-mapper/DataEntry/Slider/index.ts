import {IKitSliderTheme} from '@theme/types/components/DataEntry/Slider';
import { kitSliderCssTokens } from "@theme/aristid/components/DataEntry/Slider";
import { kitColorsPaletteCssTokens } from "@theme/aristid/general/colors";

export const mapSliderKitTokenToAntdToken = (kitSliderTheme: IKitSliderTheme) => {
    return {
        railBg: `var(${kitSliderCssTokens.rail.colors.background.default}, var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey200}))`,
        railHoverBg: `var(${kitSliderCssTokens.rail.colors.background.hover}, var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey200}))`,
        handleSize: kitSliderTheme.handle.size,
        handleSizeHover: kitSliderTheme.handle.size,
        handleLineWidth: kitSliderTheme.handle.border,
        handleLineWidthHover: kitSliderTheme.handle.border,
        trackBg: `var(${kitSliderCssTokens.track.colors.background.default}, var(${kitColorsPaletteCssTokens.primary.primary400}))`,
        trackHoverBg: `var(${kitSliderCssTokens.track.colors.background.hover}, var(${kitColorsPaletteCssTokens.primary.primary400}))`,
        dotActiveBorderColor: `var(${kitSliderCssTokens.dot.colors.border.active}, var(${kitColorsPaletteCssTokens.primary.primary400}))`,
        dotSize: kitSliderTheme.dot.size,
        dotBorderColor: `var(${kitSliderCssTokens.dot.colors.border.default}, var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey200}))`
    };
};
