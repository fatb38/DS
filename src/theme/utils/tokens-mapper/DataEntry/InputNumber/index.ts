import {IKitInputNumberTheme} from '@theme/types/components/DataEntry/InputNumber';

export const mapInputNumberKitTokenToAntdToken = (kitInputNumberThemeAntd: IKitInputNumberTheme) => {
    const {colors, typography, border} = kitInputNumberThemeAntd;

    return {
        colorBgContainer: colors.background.default,
        colorBgContainerDisabled: colors.background.disabled,
        colorBorder: colors.border.default,
        colorPrimary: colors.border.hover,
        colorPrimaryHover: colors.border.hover,
        colorTextPlaceholder: colors.typography.placeholder.default,
        colorText: colors.typography.content.default,
        borderRadius: border.radius,
        fontFamily: typography.fontFamily,
        fontSize: typography.fontSize
    };
};
