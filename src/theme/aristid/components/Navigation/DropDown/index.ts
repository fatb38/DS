import {KitAristidThemeGeneral} from '@theme/aristid/general';
import {IKitDropDownTheme} from '@theme/types/components/Navigation/DropDown';

const {colors, typography} = KitAristidThemeGeneral;

export const KitDropDownTheme: IKitDropDownTheme = {
    colors: {
        background: {
            default: colors.secondary.mediumGrey.mediumGrey100
        },
        typography: {
            default: colors.secondary.mediumGrey.mediumGrey500
        }
    },
    typography: {
        fontFamily: typography.fontFamily,
        fontWeight: typography.mediumfontWeight
    },
    menu: {
        colors: {
            background: {
                default: colors.secondary.mediumGrey.mediumGrey100
            }
        }
    },
    menuItem: {
        colors: {
            background: {
                active: colors.primary.blue100,
                selected: colors.primary.blue100,
                disabled: colors.secondary.mediumGrey.mediumGrey100
            },
            typography: {
                default: colors.secondary.mediumGrey.mediumGrey500,
                active: colors.primary.blue400,
                disabled: colors.secondary.mediumGrey.mediumGrey400
            }
        },
        typography: {
            fontWeight: typography.mediumfontWeight
        },
        divider: {
            colors: {
                background: {
                    default: colors.secondary.mediumGrey.mediumGrey200
                }
            }
        }
    },
    menuItemGroup: {
        title: {
            colors: {
                typography: {
                    default: colors.neutral.typography.black
                }
            },
            typography: {
                fontSize: typography.fontSize7,
                fontWeight: typography.boldFontWeight
            }
        }
    },
    subMenu: {
        colors: {
            background: {
                active: colors.primary.blue100
            },
            typography: {
                active: colors.primary.blue400
            }
        },
        title: {
            colors: {
                background: {
                    disabled: colors.secondary.mediumGrey.mediumGrey100
                },
                typography: {
                    default: colors.secondary.mediumGrey.mediumGrey500,
                    active: colors.primary.blue400,
                    disabled: colors.secondary.mediumGrey.mediumGrey400
                }
            },
            typography: {
                fontWeight: typography.mediumfontWeight
            }
        },
        expIcon: {
            colors: {
                background: {
                    default: colors.secondary.mediumGrey.mediumGrey100,
                    disabled: colors.secondary.mediumGrey.mediumGrey100
                },
                typography: {
                    default: colors.secondary.mediumGrey.mediumGrey500,
                    active: colors.primary.blue400,
                    disabled: colors.secondary.mediumGrey.mediumGrey400
                }
            }
        }
    }
};
