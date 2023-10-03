import {KitAristidThemeGeneral} from '@theme/aristid/general';
import {IKitThemeGeneral} from '@theme/types';
import {IKitIconTheme} from '@theme/types/components/General/Icon';

export const getKitIconTokens = (generalTokens: IKitThemeGeneral): IKitIconTheme => {
    const {colors, border} = generalTokens;

    return {
        colors: {
            icon: {
                default: colors.neutral.typography.black,
                on: colors.primary.blue400
            },
            background: {
                default: 'transparent',
                on: colors.primary.blue100
            }
        },
        border: {
            radius: {
                default: border.radius.square,
                on: border.radius.s
            }
        }
    };
};
