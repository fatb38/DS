import {colorsPalette} from '@theme/aristid/general/colors';
import {KitRateThemeAntdProps, KitRateThemeStyledProps} from '@theme/types/components/Rate';

const KitRateThemeAntd: KitRateThemeAntdProps = {
    starColor: colorsPalette.secondary.yellow.yellow300
};

const KitRateThemeStyled: KitRateThemeStyledProps = {
    starColorPalette: {
        red: colorsPalette.secondary.red.red300,
        green: colorsPalette.secondary.green.green300,
        blue: colorsPalette.secondary.blue.blue300
    },
    startDefaultColor: colorsPalette.secondary.mediumGrey.mediumGrey100,
    startDisabledColor: colorsPalette.secondary.mediumGrey.mediumGrey100
};

export const KitRateTheme = {
    ...KitRateThemeAntd,
    ...KitRateThemeStyled
};
