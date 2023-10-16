import {IKitDividerTheme} from '@theme/types/components/Layout/Divider';

export const mapDividerKitTokenToAntdToken = (kitDividerTheme: IKitDividerTheme) => {
    const {colors, typography} = kitDividerTheme;

    return {
        colorText: colors.typography.default,
        colorTextHeading: colors.typography.default,
        fontFamily: typography.fontFamily,
        fontSize: typography.fontSize,
        fontSizeLG: typography.fontSize,
        lineHeight: typography.lineHeight,
        colorSplit: colors.split.default
    };
};
