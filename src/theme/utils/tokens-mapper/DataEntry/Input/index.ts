import {IKitInputTheme} from '@theme/types/components/DataEntry/Input';

export const mapInputKitTokenToAntdToken = (kitInputTheme: IKitInputTheme) => {
    const {colors, border, typography} = kitInputTheme;

    return {
        colorBgContainer: colors.background.default,
        colorBgContainerDisabled: colors.background.disabled,
        colorBorder: colors.border.default,
        colorPrimaryHover: colors.border.hover,
        colorTextPlaceholder: colors.typography.placeholder.default,
        colorText: colors.typography.content.default,
        borderRadius: border.radius,
        fontFamily: typography.fontFamily,
        fontSize: typography.fontSize
    };
};
