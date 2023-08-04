import theme from "@theme/index";
import { typographyHeaders } from "@theme/typography";
import { modalThemeProps } from "./types";

export const modalTheme: modalThemeProps = {
    backgroundColor: theme.color.neutral.typography.white,
    fontFamily: theme.typography.fontFamily,
    fontSize: {
        title: typographyHeaders.fontSize4,
        content: theme.typography.fontSize5,
    },
    fontWeight: {
        title: theme.typography.boldFontWeight,
        content: theme.typography.regularFontWeight,
    },
    itemsVerticalSpacing: 24,
    textVerticalSpacing: 8,
    icon: {
        successColor: theme.color.secondary.green.green400,
        successBgColor: theme.color.secondary.green.green100,
        errorColor: theme.color.secondary.red.red400,
        errorBgColor: theme.color.secondary.red.red100,
        warngingColor: theme.color.secondary.orange.orange500,
        warngingBgColor: theme.color.secondary.orange.orange100,
    },
    borderRadius: 7,
    imageBorderColor: theme.color.neutral.typography.black60,
    overlayColor: "rgba(0,0,0,.45)",
    boxShadow:
        "0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 9px 28px 8px rgba(0, 0, 0, 0.05)",
};
