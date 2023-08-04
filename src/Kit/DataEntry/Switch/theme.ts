import theme from "@theme/index";
import { KitSwitchTheme } from "./types";

const primaryTheme: KitSwitchTheme = {
    fontWeight: {
        default: theme.typography.mediumfontWeight,
        checked: theme.typography.boldFontWeight,
    },
    borderWidth: "1px",
    width: 32,
    height: 20,
    iconFontSize: 12,
    pinHeight: 16,
    handle: {
        borderWidth: "1.3px",
        borderColor: {
            default: {
                off: theme.color.neutral.typography.black60,
                on: theme.color.primary.blue400,
            },
            disabled: {
                off: theme.color.primary.blue200,
                on: theme.color.primary.blue200,
            },
            focus: {
                off: theme.color.primary.blue200,
                on: theme.color.primary.blue200,
            },
        },
        backgroundColor: {
            default: theme.color.neutral.typography.white,
            disabled: theme.color.primary.blue100,
        },
    },
    backgroundColor: {
        default: {
            on: theme.color.primary.blue400,
            off: theme.color.neutral.background,
        },
        disabled: {
            on: theme.color.primary.blue100,
            off: theme.color.primary.blue100,
        },
        focus: {
            on: "",
            off: "",
        },
    },
};

export default primaryTheme;
