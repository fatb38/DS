import {IKitProgressTheme} from '@theme/types/components/Feedback/Progress';

export const mapProgressKitTokenToAntdToken = (kitProgressTheme: IKitProgressTheme) => {
    const {colors, typography} = kitProgressTheme;

    return {
        colorBgContainer: colors.background,
        colorInfo: colors.progress.info,
        colorSuccess: colors.progress.success,
        colorError: colors.progress.error,
        fontFamily: typography.fontFamily,
        fontSize: typography.fontSize
    };
};
