import {IKitThemeGeneral} from '@theme/types';
import {IKitCardCssTokens, IKitCardTheme} from '@theme/types/components/DataDisplay/Card';
import {generateCssTokens} from '@theme/utils/css-tokens-generator.ts';

export const getKitCardTokens = (generalTokens: IKitThemeGeneral): IKitCardTheme => {
    const {colors, typography} = generalTokens;

    return {
        colors: {
            background: {
                default: 'none',
                disabled: colors.secondary.mediumGrey.mediumGrey100
            },
            typography: {
                headerTitle: {
                    default: colors.primary.primary400,
                    disabled: colors.secondary.mediumGrey.mediumGrey400
                },
                contentTitle: {
                    default: colors.primary.primary400,
                    disabled: colors.secondary.mediumGrey.mediumGrey400
                },
                description: {
                    default: colors.neutral.typography.black,
                    disabled: colors.secondary.mediumGrey.mediumGrey300
                },
                extra: {
                    default: colors.primary.primary400,
                    hover: colors.primary.primary300,
                    disabled: colors.secondary.mediumGrey.mediumGrey400
                }
            },
            border: {
                default: colors.secondary.mediumGrey.mediumGrey200,
                focus: colors.primary.primary400,
                hover: colors.primary.primary400,
                disabled: colors.secondary.mediumGrey.mediumGrey200
            },
            separator: {
                default: colors.secondary.mediumGrey.mediumGrey200
            },
            actions: {
                default: colors.secondary.mediumGrey.mediumGrey500,
                disabled: colors.secondary.mediumGrey.mediumGrey300,
                hover: colors.primary.primary400
            },
            shadow: {
                default: colors.neutral.typography.black,
                disabled: colors.primary.primary400,
                hover: colors.primary.primary400,
                focus: colors.primary.primary400
            }
        },
        typography: {
            fontFamily: typography.fontFamily,
            headerTitle: {
                fontSize: typography.fontSize3,
                fontWeight: typography.boldFontWeight
            },
            contentTitle: {
                fontSize: typography.fontSize2,
                fontWeight: typography.boldFontWeight
            },
            desciption: {
                fontSize: typography.fontSize5,
                fontWeight: typography.regularFontWeight
            },
            linkIcon: {
                fontSize: typography.fontSize3
            }
        }
    };
};


export const kitCardCssTokens = generateCssTokens<IKitCardCssTokens>(
  '--components-Card',
  {
    colors: {
        actions: {default: '', disabled: '', hover: ''},
        background: {default: '', disabled: ''},
        border: {default: '', disabled: '', focus: '', hover: ''},
        separator: {default: ''},
        shadow: {default: '', disabled: '', focus: '', hover: ''},
        typography: {
            contentTitle: {default: '', disabled: ''},
            description: {default: '', disabled: ''},
            extra: {default: '', disabled: '', hover: ''},
            headerTitle: {default: '', disabled: ''}
        }
    },
    typography: {
        contentTitle: {fontSize: '', fontWeight: ''},
        description: {fontSize: '', fontWeight: ''},
        fontFamily: '',
        headerTitle: {fontSize: '', fontWeight: ''},
        linkIcon: {fontSize: ''}
    }
});
