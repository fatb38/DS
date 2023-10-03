import {IKitThemeGeneral} from '@theme/types';
import {IKitUploadTheme} from '@theme/types/components/DataEntry/Upload';

const getKitDraggerTokens = (generalTokens: IKitThemeGeneral): IKitUploadTheme['Dragger'] => {
    const {colors, typography} = generalTokens;

    return {
        colors: {
            background: {
                default: colors.secondary.mediumGrey.mediumGrey100
            },
            border: {
                default: colors.neutral.gray.gray400,
                hover: colors.primary.primary400
            },
            dragIcon: {
                default: colors.primary.primary400
            },
            typography: {
                text: colors.neutral.typography.black,
                hint: colors.neutral.gray.gray400,
                item: colors.primary.primary400
            }
        },
        typography: {
            fontSize: typography.fontSize4,
            fontWeight: typography.regularFontWeight,
            lineHeight: typography.lineHeight4
        }
    };
};

export const getKitUploadTokens = (generalTokens: IKitThemeGeneral): IKitUploadTheme => {
    const {colors} = generalTokens;

    return {
        colors: {
            card: {
                border: {
                    default: colors.primary.primary400
                },
                background: {
                    default: colors.secondary.mediumGrey.mediumGrey100
                }
            },
            list: {
                preview: {
                    hover: 'rgba(6, 32, 100, 0.5)'
                },
                border: {
                    default: colors.neutral.gray.gray400,
                    uploading: colors.primary.primary400,
                    error: colors.secondary.red.red400
                },
                typography: {
                    done: colors.primary.primary400,
                    error: colors.secondary.red.red400
                }
            }
        },
        Dragger: getKitDraggerTokens(generalTokens)
    };
};
