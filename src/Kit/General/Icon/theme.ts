import theme from "@theme/index";
import { KitIconTheme } from "./types";

export const iconTheme: KitIconTheme = {
    color: {
        on: theme.color.primary.blue400,
        default: theme.color.neutral.typography.black,
    },
    backgroundColor: {
        on: theme.color.primary.blue100,
        default: "transparent",
    },
    borderRadius: {
        default: 0,
        on: 7,
    },
    width: 32,
    padding: "8px",
};
