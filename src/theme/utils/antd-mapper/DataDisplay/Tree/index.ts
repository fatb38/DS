import {IKitTreeTheme} from '@theme/types/components/DataDisplay/Tree';

export const mapTreeKitTokenToAntdToken = (kitTreeTheme: IKitTreeTheme) => {
    const {colors, typography, icon} = kitTreeTheme;

    return {
        fontFamily: typography.fontFamily,
        fontSize: typography.fontSize,
        fontSizeIcon: icon.fontSize,
        controlItemBgHover: colors.background.hover
    };
};
