import {IKitSliderTheme} from '@theme/types/components/DataEntry/Slider';

export const mapSliderKitTokenToAntdToken = (kitSliderTheme: IKitSliderTheme) => {
    return {
        railBg: kitSliderTheme.rail.colors.background.default,
        railHoverBg: kitSliderTheme.rail.colors.background.hover,
        railSize: kitSliderTheme.rail.size,
        handleColor: kitSliderTheme.handle.colors.border.default,
        handleSize: kitSliderTheme.handle.size,
        handleSizeHover: kitSliderTheme.handle.size,
        handleLineWidth: kitSliderTheme.handle.border,
        handleLineWidthHover: kitSliderTheme.handle.border,
        trackBg: kitSliderTheme.track.colors.background.default,
        trackHoverBg: kitSliderTheme.track.colors.background.hover,
        dotActiveBorderColor: kitSliderTheme.dot.colors.border.active,
        dotSize: kitSliderTheme.dot.size,
        dotBorderColor: kitSliderTheme.dot.colors.border.default
    };
};
