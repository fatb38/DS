import {IKitTagTheme} from '@theme/types/components/DataEntry/Tag';

export const mapTagKitTokenToAntdToken = (kitTagTheme: IKitTagTheme) => {
    const {colors, border} = kitTagTheme;

    return {
        defaultBg: colors.default.background.default,
        defaultColor: colors.default.typography.default,
        borderRadiusSM: border.radius
    };
};
