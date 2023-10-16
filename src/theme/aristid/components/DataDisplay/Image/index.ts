import {IKitThemeGeneral} from '@theme/types';
import {IKitImageTheme} from '@theme/types/components/DataDisplay/Image';

export const getKitImageTokens = (generalTokens: IKitThemeGeneral): IKitImageTheme => {
    const {colors, border} = generalTokens;

    return {
        colors: {
            border: {
                none: 'none',
                default: colors.neutral.black60
            }
        },
        border: {
            radius: {
                default: border.radius.square,
                rounded: border.radius.s
            }
        }
    };
};
