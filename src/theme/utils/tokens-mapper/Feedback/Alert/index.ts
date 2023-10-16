import {IKitAlertTheme} from '@theme/types/components/Feedback/Alert';

export const mapAlertKitTokenToAntdToken = (kitAlertTheme: IKitAlertTheme) => {
    const {colors, typography} = kitAlertTheme;

    return {
        colorSuccessBg: colors.background.success,
        colorSuccessBorder: colors.border.success,
        colorInfoBg: colors.background.info,
        colorInfoBorder: colors.border.info,
        colorWarningBg: colors.background.warning,
        colorWarningBorder: colors.border.warning,
        colorErrorBg: colors.background.error,
        colorErrorBorder: colors.border.error,
        colorText: colors.typography.default,
        fontFamily: typography.fontFamily
    };
};
