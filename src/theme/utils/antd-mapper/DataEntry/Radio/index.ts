import {KitAristidThemeGeneral} from '@theme/aristid/general';
import {IKitRadioTheme} from '@theme/types/components/DataEntry/Radio';

export const mapRadioKitTokenToAntdToken = (kitRadioTheme: IKitRadioTheme) => {
    const {typography} = kitRadioTheme;

    return {
        fontFamily: typography.fontFamily,
        fontSize: typography.fontSize,
        lineHeight: typography.lineHeight,
        fontSizeLG: KitAristidThemeGeneral.typography.fontSize4
    };
};
