import theme from "@theme/index";
import { KitCheckboxTheme } from "./types";

const primaryTheme: KitCheckboxTheme = {
    fontWeight: {
        default: theme.typography.mediumfontWeight,
        checked: theme.typography.boldFontWeight,
    },
    borderWidth: "1px",
    color: {
        default: theme.color.neutral.typography.black,
        disabled: theme.color.primary.blue200,
        danger: {
            default: theme.color.neutral.typography.black,
            disabled: theme.color.secondary.red.red200,
        },
    },
    backgroundColor: {
        default: theme.color.primary.blue400,
        hover: theme.color.primary.blue500,
        active: theme.color.primary.blue600,
        focus: theme.color.primary.blue400,
        disabled: theme.color.primary.blue100,
        danger: {
            default: theme.color.secondary.red.red200,
            hover: theme.color.secondary.red.red500,
            active: theme.color.secondary.red.red600,
            focus: theme.color.secondary.red.red400,
            disabled: theme.color.secondary.red.red400,
        },
    },
    borderColor: {
        default: theme.color.primary.blue400,
        hover: theme.color.primary.blue500,
        active: theme.color.primary.blue600,
        focus: theme.color.primary.blue400,
        disabled: theme.color.primary.blue200,
        danger: {
            default: theme.color.secondary.red.red400,
            hover: theme.color.secondary.red.red500,
            active: theme.color.secondary.red.red600,
            focus: theme.color.secondary.red.red400,
            disabled: theme.color.secondary.red.red200,
        },
    },
};

export default primaryTheme;
