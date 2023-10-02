import {IKitCollapseTheme} from '@theme/types/components/DataDisplay/Collapse';

export const mapCollapseKitTokenToAntdToken = (kitCollapseTheme: IKitCollapseTheme) => {
    const {colors, border} = kitCollapseTheme;

    return {
        colorFillAlter: colors.background.default,
        colorBorder: colors.border.default,
        borderRadius: border.radius
    };
};
