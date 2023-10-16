import {IKitSelectTheme} from '@theme/types/components/DataEntry/Select';

export const mapSelectKitTokenToAntdToken = (kitSelectTheme: IKitSelectTheme) => {
    const {colors, border, height, typography} = kitSelectTheme;

    return {
        borderRadius: border.radius,
        controlHeight: height,
        colorBgContainer: colors.background.default,
        fontFamily: typography.fontFamily,
        fontSize: typography.fontSize
    };
};
