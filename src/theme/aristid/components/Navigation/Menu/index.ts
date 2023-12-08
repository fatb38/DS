import {IKitThemeGeneral} from '@theme/types';
import {IKitMenuCssTokens, IKitMenuTheme} from '@theme/types/components/Navigation/Menu';
import {generateCssTokens} from '@theme/utils/css-tokens-generator';

export const getKitMenuTokens = (generalTokens: IKitThemeGeneral): IKitMenuTheme => {
    const {colors} = generalTokens;

    return {
        colors: {
            background: {
                default: colors.neutral.white
            }
        },
        itemMenu: {
            colors: {
                background: {
                    default: colors.neutral.white,
                    active: colors.primary.primary100,
                    hover: colors.primary.primary100,
                    danger: colors.secondary.red.red100
                },
                border: {
                    active: colors.primary.primary400
                },
                value: {
                    default: colors.secondary.mediumGrey.mediumGrey300
                },
                rafter: {
                    default: colors.secondary.mediumGrey.mediumGrey300,
                    hover: colors.primary.primary400
                },
                title: {
                    default: colors.primary.primary400,
                    danger: colors.secondary.red.red400
                },
                icon: {
                    default: colors.secondary.mediumGrey.mediumGrey300,
                    danger: colors.secondary.red.red400
                }
            }
        }
    };
};

export const kitMenuCssTokens = generateCssTokens<IKitMenuCssTokens>('--components-Menu', {
    colors: {
        background: {
            default: ''
        }
    },
    itemMenu: {
        colors: {
            background: {
                default: '',
                active: '',
                hover: '',
                danger: ''
            },
            border: {
                active: ''
            },
            value: {
                default: ''
            },
            rafter: {
                default: '',
                hover: ''
            },
            title: {
                default: '',
                danger: ''
            },
            icon: {
                default: '',
                danger: ''
            }
        }
    }
});
