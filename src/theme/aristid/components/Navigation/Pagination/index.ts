import {IKitThemeGeneral} from '@theme/types';
import {IKitPaginationTheme} from '@theme/types/components/Navigation/Pagination';

export const getKitPaginationTokens = (generalTokens: IKitThemeGeneral): IKitPaginationTheme => {
    const {colors, typography} = generalTokens;

    return {
        colors: {
            background: {
                container: {
                    default: colors.neutral.typography.white,
                    disabled: colors.neutral.background
                }
            }
        },
        typography: {
            fontFamily: typography.fontFamily,
            fontSize: typography.fontSize5
        },
        pagination: {
            colors: {
                background: {
                    default: 'transparent',
                    hover: colors.neutral.typography.white
                },
                typography: {
                    disabledActive: colors.neutral.typography.white
                }
            },
            border: {
                default: colors.neutral.typography.black60,
                hover: colors.primary.blue400
            }
        },
        prevNext: {
            colors: {
                background: {
                    default: 'transparent'
                },
                border: {
                    default: 'transparent',
                    hover: colors.primary.blue400
                },
                typography: {
                    hover: colors.primary.blue400
                }
            },
            typography: {
                fontSize: typography.fontSize5
            }
        },
        selector: {
            colors: {
                background: {
                    default: colors.neutral.typography.white
                },
                border: {
                    default: colors.neutral.typography.black60
                }
            }
        },
        quickJumper: {
            colors: {
                border: {
                    default: colors.neutral.typography.black60
                }
            }
        }
    };
};
