import {IKitButtonTheme} from '@theme/types/components/General/Button';

export const mapButtonKitTokenToAntdToken = (kitButtonTheme: IKitButtonTheme) => {
    const {typography, border} = kitButtonTheme;

    return {
        fontFamily: typography.fontFamily,
        fontSize: typography.fontSize,
        fontSizeLG: typography.fontSize,
        lineHeight: typography.lineHeight,
        borderRadius: border.radius
    };
};
