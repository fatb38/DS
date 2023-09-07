import {KitAristidThemeGeneral} from '@theme/aristid/general';
import {AntdThemeConfigWithRequiredComponents} from '@theme/types';
import {KitSliderStyled, KitSliderThemeAntd} from '@theme/types/components/DataEntry/Slider';

const {colors} = KitAristidThemeGeneral;

const kitSliderThemeAntd: KitSliderThemeAntd = {
    rail: {
        colors: {
            background: {
                default: colors.secondary.mediumGrey.mediumGrey200,
                hover: colors.secondary.mediumGrey.mediumGrey200
            }
        },
        size: 4
    },
    handle: {
        colors: {
            default: colors.primary.blue400
        },
        size: 14,
        border: 2
    },
    track: {
        colors: {
            background: {
                default: colors.primary.blue400,
                hover: colors.primary.blue400
            }
        }
    },
    dot: {
        colors: {
            border: {
                default: colors.secondary.mediumGrey.mediumGrey200,
                active: colors.primary.blue400
            }
        },
        size: 8
    }
};

export const kitSliderStyled: KitSliderStyled = {
    handle: {
        colors: {
            background: {
                hover: colors.primary.blue100,
                focus: colors.primary.blue400
            },
            border: {
                default: colors.primary.blue400,
                disabled: colors.secondary.mediumGrey.mediumGrey200
            }
        }
    },
    dot: {
        colors: {
            border: {
                default: colors.secondary.mediumGrey.mediumGrey200
            }
        }
    }
};

const formatKitTokenForAntdDesignTolen = (
    kitSliderThemeAntd: KitSliderThemeAntd
): AntdThemeConfigWithRequiredComponents['Slider'] => {
    return {
        railBg: kitSliderThemeAntd.rail.colors.background.default,
        railHoverBg: kitSliderThemeAntd.rail.colors.background.hover,
        railSize: kitSliderThemeAntd.rail.size,
        handleColor: kitSliderThemeAntd.handle.colors.default,
        handleSize: kitSliderThemeAntd.handle.size,
        handleSizeHover: kitSliderThemeAntd.handle.size,
        handleLineWidth: kitSliderThemeAntd.handle.border,
        handleLineWidthHover: kitSliderThemeAntd.handle.border,
        trackBg: kitSliderThemeAntd.track.colors.background.default,
        trackHoverBg: kitSliderThemeAntd.track.colors.background.hover,
        dotActiveBorderColor: kitSliderThemeAntd.dot.colors.border.active,
        dotSize: kitSliderThemeAntd.dot.size,
        dotBorderColor: kitSliderThemeAntd.dot.colors.border.default
    };
};

export const KitSliderTheme = {
    ...kitSliderStyled,
    ...formatKitTokenForAntdDesignTolen(kitSliderThemeAntd)
};
