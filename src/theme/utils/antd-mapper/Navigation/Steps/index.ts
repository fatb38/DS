import {KitAristidThemeGeneral} from '@theme/aristid/general';
import {IKitStepsTheme} from '@theme/types/components/Navigation/Steps';

export const mapStepsKitTokenToAntdToken = (kitStepsTheme: IKitStepsTheme) => {
    const {colors, typography} = kitStepsTheme;

    return {
        fontSize: typography.fontSize,
        fontFamily: typography.fontfamily,
        colorTextDescription: colors.typography.description.default,
        colorText: colors.typography.text.default,
        colorSplit: colors.split.default,
        colorPrimary: KitAristidThemeGeneral.colors.primary.primary400,
        colorError: KitAristidThemeGeneral.colors.secondary.red.red400,
        fontSizeLG: KitAristidThemeGeneral.typography.fontSize5,
        marginSM: KitAristidThemeGeneral.spacing.xs
    };
};
