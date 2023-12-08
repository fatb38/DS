import {IKitThemeGeneral} from '@theme/types';
import {
    IKitUploadCssTokens,
    IKitUploadDraggerCssTokens,
    IKitUploadTheme
} from '@theme/types/components/DataEntry/Upload';
import {generateCssTokens} from '@theme/utils/css-tokens-generator';

const getKitDraggerTokens = (generalTokens: IKitThemeGeneral): IKitUploadTheme['Dragger'] => {
    const {colors, typography} = generalTokens;

    return {
        colors: {
            background: {
                default: colors.secondary.mediumGrey.mediumGrey100
            },
            border: {
                default: colors.neutral.grey.grey400,
                hover: colors.primary.primary400
            },
            dragIcon: {
                default: colors.primary.primary400
            },
            typography: {
                text: colors.neutral.typography.black,
                hint: colors.neutral.grey.grey400,
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
                    default: colors.neutral.grey.grey400,
                    uploading: colors.primary.primary400,
                    error: colors.secondary.red.red400
                },
                typography: {
                    done: colors.primary.primary400,
                    error: colors.secondary.red.red400,
                    uploading: colors.primary.primary400
                }
            }
        },
        Dragger: getKitDraggerTokens(generalTokens)
    };
};

export const kitUploadDraggerCssTokens = generateCssTokens<IKitUploadDraggerCssTokens>('--components-Upload-Dragger', {
    colors: {
        background: {
            default: ''
        },
        border: {
            default: '',
            hover: ''
        },
        dragIcon: {
            default: ''
        },
        typography: {
            text: '',
            hint: '',
            item: ''
        }
    },
    typography: {
        fontSize: '',
        fontWeight: '',
        lineHeight: ''
    }
});

export const kitUploadCssTokens = generateCssTokens<IKitUploadCssTokens>('--components-Upload', {
    colors: {
        card: {
            border: {
                default: ''
            },
            background: {
                default: ''
            }
        },
        list: {
            preview: {
                hover: ''
            },
            border: {
                default: '',
                uploading: '',
                error: ''
            },
            typography: {
                done: '',
                error: '',
                uploading: ''
            }
        }
    }
});
