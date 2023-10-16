import {IKitTooltipTheme} from '@theme/types/components/DataDisplay/Tooltip';

export const mapTooltipKitTokenToAntdToken = (kitTooltipTheme: IKitTooltipTheme) => {
    const {colors, border, typography} = kitTooltipTheme;

    return {
        colorBgSpotlight: colors.background.default,
        colorTextLightSolid: colors.typography.default,
        borderRadius: border.radius,
        fontSize: typography.fontSize,
        fontFamily: typography.fontFamily
    };
};
