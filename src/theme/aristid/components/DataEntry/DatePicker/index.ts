import {KitAristidThemeGeneral} from '@theme/aristid/general';
import {AntdThemeConfigWithRequiredComponents} from '@theme/types';
import {KitDatePickerThemeAntd, KitDatePickerThemeStyled} from '@theme/types/components/DataEntry/DatePicker';

const {colors, typography, border} = KitAristidThemeGeneral;

const kitDatePickerThemeAntd: KitDatePickerThemeAntd = {
    colors: {
        background: {
            default: colors.neutral.typography.white,
            disabled: colors.secondary.mediumGrey.mediumGrey100
        },
        border: {
            default: colors.secondary.mediumGrey.mediumGrey200,
            hover: colors.primary.blue400,
            active: colors.primary.blue400
        },
        typography: {
            content: {
                default: colors.primary.blue300
            },
            placeholder: {
                default: colors.secondary.mediumGrey.mediumGrey500
            }
        },
        link: {
            default: colors.primary.blue400,
            hover: colors.primary.blue500
        },
        item: {
            hover: colors.secondary.mediumGrey.mediumGrey100,
            active: colors.primary.blue100
        }
    },
    typography: {
        fontFamily: typography.fontFamily,
        fontSize: typography.fontSize5
    },
    border: {
        radius: border.radius.s
    }
};

const kitDatePickerThemeStyled: KitDatePickerThemeStyled = {
    colors: {
        icon: {
            default: colors.secondary.mediumGrey.mediumGrey500,
            disabled: colors.secondary.mediumGrey.mediumGrey400,
            warning: colors.secondary.orange.orange400,
            error: colors.secondary.red.red400
        },
        clearIcon: {
            default: colors.secondary.mediumGrey.mediumGrey500,
            disabled: colors.secondary.mediumGrey.mediumGrey400,
            warning: colors.secondary.orange.orange500,
            error: colors.secondary.red.red400
        },
        background: {
            warning: colors.secondary.orange.orange100,
            error: colors.secondary.red.red100
        },
        border: {
            disabled: colors.secondary.mediumGrey.mediumGrey200,
            warning: colors.secondary.orange.orange400,
            error: colors.secondary.red.red400
        },
        typography: {
            content: {
                disabled: colors.secondary.mediumGrey.mediumGrey400,
                warning: colors.secondary.orange.orange400,
                error: colors.secondary.red.red400
            },
            placeholder: {
                disabled: colors.secondary.mediumGrey.mediumGrey400,
                warning: colors.secondary.orange.orange400,
                error: colors.secondary.red.red400
            }
        }
    },
    typography: {
        fontFamily: typography.fontFamily,
        fontWeight: {
            content: typography.mediumfontWeight,
            placeholder: typography.regularFontWeight
        }
    },
    RangePicker: {
        colors: {
            separator: {
                default: colors.secondary.mediumGrey.mediumGrey500,
                disabled: colors.secondary.mediumGrey.mediumGrey400,
                warning: colors.secondary.orange.orange300,
                error: colors.secondary.red.red300
            },
            icon: {
                default: colors.secondary.mediumGrey.mediumGrey500,
                disabled: colors.secondary.mediumGrey.mediumGrey400,
                warning: colors.secondary.orange.orange400,
                error: colors.secondary.red.red400
            },
            clearIcon: {
                default: colors.secondary.mediumGrey.mediumGrey500,
                disabled: colors.secondary.mediumGrey.mediumGrey400,
                warning: colors.secondary.orange.orange500,
                error: colors.secondary.red.red400
            },
            background: {
                warning: colors.secondary.orange.orange100,
                error: colors.secondary.red.red100
            },
            border: {
                disabled: colors.secondary.mediumGrey.mediumGrey200,
                warning: colors.secondary.orange.orange400,
                error: colors.secondary.red.red400
            },
            typography: {
                content: {
                    disabled: colors.secondary.mediumGrey.mediumGrey400,
                    warning: colors.secondary.orange.orange400,
                    error: colors.secondary.red.red400
                },
                placeholder: {
                    disabled: colors.secondary.mediumGrey.mediumGrey400,
                    warning: colors.secondary.orange.orange400,
                    error: colors.secondary.red.red400
                }
            }
        },
        typography: {
            fontFamily: typography.fontFamily,
            fontWeight: {
                content: typography.mediumfontWeight,
                placeholder: typography.regularFontWeight
            }
        }
    },
    DropDown: {
        colors: {
            button: {
                now: {
                    typography: {
                        default: colors.primary.blue400,
                        hover: colors.primary.blue500
                    }
                },
                ok: {
                    typography: {
                        default: colors.neutral.typography.white,
                        disabled: colors.primary.blue200
                    },
                    background: {
                        default: colors.primary.blue400,
                        hover: colors.primary.blue500,
                        active: colors.primary.blue600,
                        disabled: colors.primary.blue100
                    },
                    border: {
                        default: colors.primary.blue400,
                        hover: colors.primary.blue500,
                        active: colors.primary.blue600,
                        disabled: colors.primary.blue100
                    }
                }
            }
        }
    }
};

const formatKitTokenForAntdDesignTolen = (
    kitDatePickerThemeAntd: KitDatePickerThemeAntd
): AntdThemeConfigWithRequiredComponents['DatePicker'] => {
    const {colors, typography, border} = kitDatePickerThemeAntd;

    return {
        colorBgContainer: colors.background.default,
        colorBgContainerDisabled: colors.background.disabled,
        colorBorder: colors.border.default,
        colorPrimary: colors.border.active,
        colorPrimaryHover: colors.border.hover,
        colorLink: colors.link.default,
        colorLinkHover: colors.link.hover,
        controlItemBgHover: colors.item.hover,
        controlItemBgActive: colors.item.active,
        colorTextPlaceholder: colors.typography.placeholder.default,
        colorText: colors.typography.content.default,
        borderRadius: border.radius,
        borderRadiusSM: KitAristidThemeGeneral.border.radius.xxs,
        fontFamily: typography.fontFamily,
        fontSize: typography.fontSize
    };
};

export const KitDatePickerTheme = {
    ...formatKitTokenForAntdDesignTolen(kitDatePickerThemeAntd),
    ...kitDatePickerThemeStyled
};
