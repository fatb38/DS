import {IKitThemeGeneral} from '@theme/types';
import {IKitIconCssTokens, IKitIconTheme} from '@theme/types/components/General/Icon';
import {generateCssTokens} from '@theme/utils/css-tokens-generator';

export const getKitIconTokens = (generalTokens: IKitThemeGeneral): IKitIconTheme => {
    const {colors, border} = generalTokens;

    return {
        colors: {
            icon: {
                default: colors.neutral.typography.black,
                on: colors.primary.primary400
            },
            background: {
                default: 'transparent',
                on: colors.primary.primary100
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

export const kitIconCssTokens = generateCssTokens<IKitIconCssTokens>('--components-Typography', {
    colors: {
        icon: {
            default: '',
            on: ''
        },
        background: {
            default: '',
            on: ''
        }
    },
    border: {
        radius: {
            default: '',
            on: ''
        }
    }
});
