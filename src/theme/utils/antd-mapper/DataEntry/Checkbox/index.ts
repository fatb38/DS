import {IKitCheckboxTheme} from '@theme/types/components/DataEntry/Checkbox';

export const mapCheckboxKitTokenToAntdToken = (kitCheckboxTheme: IKitCheckboxTheme) => {
    const {colors, typography, border} = kitCheckboxTheme;

    return {
        fontFamily: typography.fontFamily,
        fontSize: typography.fontSize,
        fontSizeLG: typography.fontSize,
        lineHeight: typography.lineHeight,
        lineWidth: typography.lineWidth,
        borderRadiusSM: border.radius,
        colorBorder: colors.border.default,
        colorPrimary: colors.background.check,
        colorPrimaryHover: colors.background.hover
    };
};
