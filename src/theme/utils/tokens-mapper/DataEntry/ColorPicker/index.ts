import {IKitColorPickerTheme} from '@theme/types/components/DataEntry/ColorPicker';

export const mapColorPickerKitTokenToAntdToken = (kitColorPickerThemeAntd: IKitColorPickerTheme) => {
    const {colors, typography, border} = kitColorPickerThemeAntd;

    return {
        colorBgContainer: colors.background.default,
        colorBgContainerDisabled: colors.background.disabled,
        colorBorder: colors.border.default,
        colorPrimary: colors.border.hover,
        colorPrimaryHover: colors.border.hover,
        colorText: colors.typography.default,
        borderRadius: border.radius,
        fontFamily: typography.fontFamily,
        fontSize: typography.fontSize
    };
};
