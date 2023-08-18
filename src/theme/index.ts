import { ThemeConfig } from 'antd';
import { KitColorsPalette, colorsPalette } from './colors';
import { Typography, KitTypography, typographyHeaders, KitTypograhyHeaders } from './typography';

interface KitThemeConfig extends ThemeConfig {
    color: KitColorsPalette;
    typography: KitTypography;
    headersTypography: KitTypograhyHeaders
}

const theme: KitThemeConfig = {
    token: {
        fontFamily: Typography.fontFamily
        // colorPrimary: "#0F4FFA",
        // colorPrimaryHover: "#0B37AF",
        // colorPrimaryActive: "#062064",
        // colorBgBase: "#ffffff",
        // colorBorderSecondary: "#e2edff",
        // colorBgContainerDisabled: "#E7EDFF",
        // colorTextDisabled: "#9eb9fd",
        // colorBorder: "#E7EDFF",
    },
    color: colorsPalette,
    typography: Typography,
    headersTypography: typographyHeaders,
    components: {
        Button: {
            borderRadius: 20,
            fontFamily: Typography.fontFamily,
            fontSize: Typography.fontSize5,
            fontSizeLG: Typography.fontSize5,
            lineHeight: Typography.lineHeight5
        },
        Checkbox: {
            fontFamily: Typography.fontFamily,
            fontSize: Typography.fontSize5,
            fontSizeLG: Typography.fontSize5,
            lineHeight: Typography.lineHeight5,
            colorBorder: colorsPalette.neutral.typography.black60,
            borderRadiusSM: 4,
            lineWidth: 1, // border-width
            controlInteractiveSize: 16,
            colorPrimary: colorsPalette.primary.blue400,
            colorPrimaryHover: colorsPalette.primary.blue500
        },
        Radio: {
            fontFamily: Typography.fontFamily,
            fontSize: Typography.fontSize5,
            lineHeight: Typography.lineHeight5,
            fontSizeLG: typographyHeaders.fontSize4,
            dotSize: 12,
            dotColorDisabled: colorsPalette.primary.blue200
        },
        Switch: {
            fontSize: 20,
            fontSizeIcon: 12,
            lineHeight: 1,
            colorPrimary: colorsPalette.primary.blue400,
            colorTextQuaternary: colorsPalette.neutral.background,
            colorWhite: colorsPalette.neutral.typography.white
        },
        Divider: {
            colorText: colorsPalette.neutral.typography.black,
            colorTextHeading: colorsPalette.neutral.typography.black,
            fontFamily: Typography.fontFamily,
            fontSize: Typography.fontSize6,
            fontSizeLG: Typography.fontSize6,
            lineHeight: Typography.lineHeight6,
            colorSplit: colorsPalette.neutral.typography.black60
        },
        Input: {
            colorBgContainer: colorsPalette.neutral.typography.white,
            colorBgContainerDisabled: colorsPalette.secondary.mediumGrey.mediumGrey100,
            colorBorder: colorsPalette.secondary.mediumGrey.mediumGrey200,
            colorPrimaryHover: colorsPalette.primary.blue400,
            colorTextPlaceholder: colorsPalette.secondary.mediumGrey.mediumGrey500,
            colorText: colorsPalette.primary.blue300,
            borderRadius: 7,
            fontFamily: Typography.fontFamily,
            fontSize: Typography.fontSize5
        },
        InputNumber: {
            colorBgContainer: colorsPalette.neutral.typography.white,
            colorBgContainerDisabled: colorsPalette.secondary.mediumGrey.mediumGrey100,
            colorBorder: colorsPalette.secondary.mediumGrey.mediumGrey200,
            colorPrimary: colorsPalette.primary.blue400,
            colorPrimaryHover: colorsPalette.primary.blue400,
            colorTextPlaceholder: colorsPalette.secondary.mediumGrey.mediumGrey500,
            colorText: colorsPalette.primary.blue300,
            borderRadius: 7,
            fontFamily: Typography.fontFamily,
            fontSize: Typography.fontSize5
        },
        Select: {
            borderRadius: 7,
            controlHeight: 40,
            colorBgContainer: colorsPalette.secondary.mediumGrey.mediumGrey100,
            colorPrimaryHover: colorsPalette.secondary.mediumGrey.mediumGrey100,
            colorTextPlaceholder: '#010819',
            fontFamily: Typography.fontFamily,
            fontSize: Typography.fontSize6,
            colorBgElevated: colorsPalette.secondary.mediumGrey.mediumGrey100,
            controlItemBgHover: colorsPalette.primary.blue100,
            colorBorder: colorsPalette.secondary.mediumGrey.mediumGrey100
        },
        Tooltip: {
            colorBgSpotlight: colorsPalette.primary.blue600,
            colorTextLightSolid: colorsPalette.neutral.typography.white,
            fontSize: Typography.fontSize7,
            fontFamily: Typography.fontFamily,
            borderRadius: 7,
            controlHeight: 15
        },
        Steps: {
            colorPrimary: colorsPalette.primary.blue400,
            colorError: colorsPalette.secondary.red.red400,
            fontFamily: Typography.fontFamily,
            fontSizeLG: Typography.fontSize5,
            fontSize: Typography.fontSize6,
            colorText: colorsPalette.neutral.typography.black,
            colorTextDescription: colorsPalette.neutral.typography.black60,
            colorSplit: colorsPalette.neutral.background,
            marginSM: 8
        },
        Alert: {
            colorSuccessBg: colorsPalette.secondary.green.green100,
            colorSuccessBorder: colorsPalette.secondary.green.green300,
            colorInfoBg: colorsPalette.secondary.blue.blue100,
            colorInfoBorder: colorsPalette.secondary.blue.blue300,
            colorWarningBg: colorsPalette.secondary.yellow.yellow100,
            colorWarningBorder: colorsPalette.secondary.yellow.yellow300,
            colorErrorBg: colorsPalette.secondary.red.red100,
            colorErrorBorder: colorsPalette.secondary.red.red400,
            colorText: colorsPalette.neutral.typography.black,
            fontFamily: Typography.fontFamily
        },
        Tag: {
            defaultBg: colorsPalette.primary.blue100,
            borderRadiusSM: 7,
            defaultColor: colorsPalette.neutral.typography.black
        },
        Breadcrumb: {
            fontFamily: Typography.fontFamily,
            fontSize: Typography.fontSize5,
            fontSizeIcon: Typography.fontSize5,
            itemColor: colorsPalette.neutral.gray.gray500,
            separatorColor: colorsPalette.neutral.gray.gray500,
            linkColor: colorsPalette.neutral.gray.gray500,
            linkHoverColor: colorsPalette.neutral.typography.black,
            lastItemColor: colorsPalette.primary.blue400,
            colorBgTextHover: 'transparent'
        },
        Badge: {
            fontFamily: Typography.fontFamily,
            colorError: colorsPalette.secondary.red.red400,
            colorSuccess: colorsPalette.secondary.green.green400,
            colorPrimary: colorsPalette.primary.blue400,
            colorWarning: colorsPalette.secondary.yellow.yellow400
        },
        Progress: {
            colorBgContainer: colorsPalette.neutral.background,
            colorError: colorsPalette.secondary.red.red400,
            colorInfo: colorsPalette.primary.blue400,
            colorSuccess: colorsPalette.secondary.green.green400,
            fontFamily: Typography.fontFamily,
            fontSize: Typography.fontSize7
        },
        Collapse: {
            colorFillAlter: colorsPalette.neutral.background,
            colorBorder: colorsPalette.secondary.mediumGrey.mediumGrey300,
            borderRadius: 8
        },
        Rate: {
            starColor: colorsPalette.secondary.yellow.yellow300
        },
        Tree: {
            fontFamily: Typography.fontFamily,
            fontSize: Typography.fontSize5,
            fontSizeIcon: Typography.fontSize5,
            controlItemBgHover: colorsPalette.primary.blue100
        },
        Pagination: {
            fontFamily: Typography.fontFamily,
            fontSize: Typography.fontSize5,
            fontSizeSM: Typography.fontSize5,
            fontWeightStrong: Typography.mediumfontWeight as number,
            colorBgContainer: colorsPalette.neutral.typography.white,
            colorBgContainerDisabled: colorsPalette.neutral.background,
            colorBgTextActive: colorsPalette.neutral.typography.black60,
            colorTextDisabled: colorsPalette.neutral.typography.black60,
            colorPrimary: colorsPalette.primary.blue400,
            colorPrimaryBorder: colorsPalette.primary.blue400,
            colorPrimaryHover: colorsPalette.primary.blue400,
            controlHeight: 32,
            controlHeightSM: 24
        },
        DatePicker: {
            colorBgContainer: colorsPalette.neutral.typography.white,
            colorBgContainerDisabled: colorsPalette.secondary.mediumGrey.mediumGrey100,
            colorBorder: colorsPalette.secondary.mediumGrey.mediumGrey200,
            colorPrimary: colorsPalette.primary.blue400,
            colorPrimaryHover: colorsPalette.primary.blue400,
            colorLink: colorsPalette.primary.blue400,
            colorLinkHover: colorsPalette.primary.blue500,
            controlItemBgHover: colorsPalette.secondary.mediumGrey.mediumGrey100,
            controlItemBgActive: colorsPalette.primary.blue100,
            colorTextPlaceholder: colorsPalette.secondary.mediumGrey.mediumGrey500,
            colorText: colorsPalette.primary.blue300,
            borderRadius: 7,
            borderRadiusSM: 2,
            fontFamily: Typography.fontFamily,
            fontSize: Typography.fontSize5
        },
        Tabs: {
            fontFamily: Typography.fontFamily,
            cardBg: colorsPalette.neutral.gray.gray100,
            cardPadding: "8px 16px",
            cardPaddingLG: "9px 16px",
            cardPaddingSM: "7px 16px",
            inkBarColor: colorsPalette.primary.blue400,
            itemActiveColor: colorsPalette.primary.blue600,
            itemHoverColor: colorsPalette.primary.blue400,
            itemSelectedColor: colorsPalette.primary.blue400,
            titleFontSize: Typography.fontSize5,
            titleFontSizeLG: Typography.fontSize5,
            titleFontSizeSM: Typography.fontSize5,
            borderRadius: 2,
            colorBorderSecondary: colorsPalette.neutral.gray.gray300,
            colorTextDisabled: colorsPalette.neutral.gray.gray300
        }
    }
};

export default theme;
