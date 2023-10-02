import {IKitBadgeTheme} from '@theme/types/components/DataDisplay/Badge';

export const mapBadgeKitTokenToAntdToken = (kitBadgeTheme: IKitBadgeTheme) => {
    const {colors, typography} = kitBadgeTheme;

    return {
        fontFamily: typography.fontFamily,
        colorError: colors.background.error,
        colorSuccess: colors.background.success,
        colorPrimary: colors.background.primary,
        colorWarning: colors.background.warning
    };
};
