import theme from "@theme/index";
import { typographyHeaders } from "@theme/typography";

export interface KitButtonTheme {
    font: {
        weight: string | number;
        bigIconSize: number;
    };
    color: {
        default: string;
        hover: string;
        active: string;
        focus: string;
        disabled: string;
        danger: {
            default: string;
            disabled: string;
        };
        iconCheck?: string;
    };
    compactBorderRadius: number;
    backgroundColor: {
        default: string;
        hover: string;
        active: string;
        focus: string;
        disabled: string;
        danger: {
            default: string;
            hover: string;
            active: string;
            focus: string;
            disabled: string;
        };
    };
    borderColor: {
        default: string;
        hover: string;
        active: string;
        focus: string;
        disabled: string;
        danger: {
            default: string;
            hover: string;
            active: string;
            focus: string;
            disabled: string;
        };
    };
}

export const primaryTheme: KitButtonTheme = {
    font: {
        weight: theme.typography.regularFontWeight,
        bigIconSize: typographyHeaders.fontSize2,
    },
    compactBorderRadius: 7,
    color: {
        default: theme.color.neutral.typography.white,
        hover: theme.color.neutral.typography.white,
        active: theme.color.neutral.typography.white,
        focus: theme.color.neutral.typography.white,
        disabled: theme.color.primary.blue200,
        danger: {
            default: theme.color.neutral.typography.white,
            disabled: theme.color.neutral.typography.white,
        },
    },
    backgroundColor: {
        default: theme.color.primary.blue400,
        hover: theme.color.primary.blue500,
        active: theme.color.primary.blue600,
        focus: theme.color.primary.blue400,
        disabled: theme.color.primary.blue100,
        danger: {
            default: theme.color.secondary.red.red400,
            hover: theme.color.secondary.red.red500,
            active: theme.color.secondary.red.red600,
            focus: theme.color.secondary.red.red400,
            disabled: theme.color.secondary.red.red200,
        },
    },
    borderColor: {
        default: theme.color.primary.blue400,
        hover: theme.color.primary.blue500,
        active: theme.color.primary.blue600,
        focus: theme.color.primary.blue400,
        disabled: theme.color.primary.blue100,
        danger: {
            default: theme.color.secondary.red.red400,
            hover: theme.color.secondary.red.red500,
            active: theme.color.secondary.red.red600,
            focus: theme.color.secondary.red.red400,
            disabled: theme.color.secondary.red.red200,
        },
    },
};

export const defaultTheme: KitButtonTheme = {
    font: {
        weight: theme.typography.regularFontWeight,
        bigIconSize: typographyHeaders.fontSize2,
    },
    compactBorderRadius: 7,
    color: {
        default: theme.color.primary.blue400,
        hover: theme.color.primary.blue400,
        active: theme.color.primary.blue400,
        focus: theme.color.primary.blue400,
        disabled: theme.color.primary.blue200,
        danger: {
            default: theme.color.secondary.red.red400,
            disabled: theme.color.secondary.red.red200,
        },
    },
    backgroundColor: {
        default: theme.color.neutral.typography.white,
        hover: theme.color.neutral.typography.white,
        active: theme.color.primary.blue100,
        focus: theme.color.neutral.typography.white,
        disabled: theme.color.neutral.typography.white,
        danger: {
            default: theme.color.neutral.typography.white,
            hover: theme.color.neutral.typography.white,
            active: theme.color.secondary.red.red100,
            focus: theme.color.neutral.typography.white,
            disabled: theme.color.neutral.typography.white,
        },
    },
    borderColor: {
        default: theme.color.primary.blue100,
        hover: theme.color.primary.blue400,
        active: theme.color.primary.blue400,
        focus: theme.color.primary.blue400,
        disabled: theme.color.primary.blue100,
        danger: {
            default: theme.color.secondary.red.red100,
            hover: theme.color.secondary.red.red400,
            active: theme.color.secondary.red.red400,
            focus: theme.color.secondary.red.red400,
            disabled: theme.color.secondary.red.red100,
        },
    },
};

export const linkTheme: KitButtonTheme = {
    font: {
        weight: theme.typography.regularFontWeight,
        bigIconSize: typographyHeaders.fontSize2,
    },
    compactBorderRadius: 7,
    color: {
        default: theme.color.primary.blue400,
        hover: theme.color.primary.blue400,
        active: theme.color.primary.blue400,
        focus: theme.color.primary.blue400,
        disabled: theme.color.primary.blue200,
        danger: {
            default: theme.color.secondary.red.red400,
            disabled: theme.color.secondary.red.red200,
        },
    },
    backgroundColor: {
        default: theme.color.neutral.typography.white,
        hover: theme.color.neutral.typography.white,
        active: theme.color.neutral.typography.white,
        focus: theme.color.neutral.typography.white,
        disabled: theme.color.neutral.typography.white,
        danger: {
            default: theme.color.neutral.typography.white,
            hover: theme.color.neutral.typography.white,
            active: theme.color.neutral.typography.white,
            focus: theme.color.neutral.typography.white,
            disabled: theme.color.neutral.typography.white,
        },
    },
    borderColor: {
        default: theme.color.primary.blue400,
        hover: theme.color.primary.blue400,
        active: theme.color.primary.blue400,
        focus: theme.color.primary.blue400,
        disabled: theme.color.primary.blue100,
        danger: {
            default: theme.color.secondary.red.red400,
            hover: theme.color.secondary.red.red400,
            active: theme.color.secondary.red.red400,
            focus: theme.color.secondary.red.red400,
            disabled: theme.color.secondary.red.red100,
        },
    },
};

export const segmentedTheme: KitButtonTheme = {
    font: {
        weight: theme.typography.regularFontWeight,
        bigIconSize: typographyHeaders.fontSize3,
    },
    compactBorderRadius: 10,
    color: {
        default: theme.color.primary.blue500,
        hover: theme.color.primary.blue500,
        active: theme.color.primary.blue500,
        focus: theme.color.primary.blue500,
        disabled: theme.color.primary.blue200,
        danger: {
            default: theme.color.secondary.red.red500,
            disabled: theme.color.secondary.red.red200,
        },
        iconCheck: theme.color.primary.blue400,
    },
    backgroundColor: {
        default: theme.color.neutral.typography.white,
        hover: theme.color.neutral.typography.white,
        active: theme.color.primary.blue100,
        focus: theme.color.neutral.typography.white,
        disabled: theme.color.primary.blue100,
        danger: {
            default: theme.color.neutral.typography.white,
            hover: theme.color.neutral.typography.white,
            active: theme.color.secondary.red.red100,
            focus: theme.color.neutral.typography.white,
            disabled: theme.color.secondary.red.red100,
        },
    },
    borderColor: {
        default: theme.color.primary.blue100,
        hover: theme.color.primary.blue400,
        active: theme.color.primary.blue400,
        focus: theme.color.primary.blue400,
        disabled: theme.color.primary.blue100,
        danger: {
            default: theme.color.secondary.red.red100,
            hover: theme.color.secondary.red.red400,
            active: theme.color.secondary.red.red400,
            focus: theme.color.secondary.red.red400,
            disabled: theme.color.secondary.red.red100,
        },
    },
};

export const segmentedGreenTheme: KitButtonTheme = {
    font: {
        weight: theme.typography.regularFontWeight,
        bigIconSize: typographyHeaders.fontSize3,
    },
    compactBorderRadius: 10,
    color: {
        default: theme.color.secondary.green.green400,
        hover: theme.color.secondary.green.green400,
        active: theme.color.secondary.green.green400,
        focus: theme.color.secondary.green.green400,
        disabled: theme.color.secondary.green.green200,
        danger: {
            default: theme.color.secondary.red.red500,
            disabled: theme.color.secondary.red.red200,
        },
        iconCheck: theme.color.secondary.green.green400,
    },
    backgroundColor: {
        default: theme.color.secondary.green.green100,
        hover: theme.color.secondary.green.green100,
        active: theme.color.secondary.green.green100,
        focus: theme.color.secondary.green.green100,
        disabled: theme.color.secondary.green.green100,
        danger: {
            default: theme.color.neutral.typography.white,
            hover: theme.color.neutral.typography.white,
            active: theme.color.secondary.red.red100,
            focus: theme.color.neutral.typography.white,
            disabled: theme.color.secondary.red.red100,
        },
    },
    borderColor: {
        default: theme.color.secondary.green.green100,
        hover: theme.color.secondary.green.green400,
        active: theme.color.secondary.green.green400,
        focus: theme.color.secondary.green.green400,
        disabled: theme.color.secondary.green.green100,
        danger: {
            default: theme.color.secondary.red.red100,
            hover: theme.color.secondary.red.red400,
            active: theme.color.secondary.red.red400,
            focus: theme.color.secondary.red.red400,
            disabled: theme.color.secondary.red.red100,
        },
    },
};

export const segmentedGrayTheme: KitButtonTheme = {
    font: {
        weight: theme.typography.regularFontWeight,
        bigIconSize: typographyHeaders.fontSize3,
    },
    compactBorderRadius: 7,
    color: {
        default: theme.color.secondary.mediumGrey.mediumGrey500,
        hover: theme.color.primary.blue400,
        active: theme.color.primary.blue400,
        focus: theme.color.primary.blue400,
        disabled: theme.color.secondary.mediumGrey.mediumGrey300,
        danger: {
            default: theme.color.secondary.red.red500,
            disabled: theme.color.secondary.red.red200,
        },
        iconCheck: theme.color.primary.blue400,
    },
    backgroundColor: {
        default: theme.color.secondary.mediumGrey.mediumGrey100,
        hover: theme.color.secondary.mediumGrey.mediumGrey100,
        active: theme.color.primary.blue100,
        focus: theme.color.primary.blue100,
        disabled: theme.color.secondary.mediumGrey.mediumGrey100,
        danger: {
            default: theme.color.neutral.typography.white,
            hover: theme.color.neutral.typography.white,
            active: theme.color.secondary.red.red100,
            focus: theme.color.neutral.typography.white,
            disabled: theme.color.secondary.red.red100,
        },
    },
    borderColor: {
        default: theme.color.neutral.gray.gray100,
        hover: theme.color.primary.blue400,
        active: theme.color.primary.blue100,
        focus: theme.color.primary.blue400,
        disabled: theme.color.neutral.gray.gray100,
        danger: {
            default: theme.color.secondary.red.red100,
            hover: theme.color.secondary.red.red400,
            active: theme.color.secondary.red.red400,
            focus: theme.color.secondary.red.red400,
            disabled: theme.color.secondary.red.red100,
        },
    },
};
