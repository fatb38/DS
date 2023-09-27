import {ThemeConfig} from 'antd';
import {KitColorsPalette, colorsPalette} from './colors';
import {Typography, KitTypography, typographyHeaders, KitTypograhyHeaders} from './typography';

interface KitThemeConfig extends ThemeConfig {
    color: KitColorsPalette;
    typography: KitTypography;
    headersTypography: KitTypograhyHeaders;
}

const theme: KitThemeConfig = {
    token: {
        fontFamily: Typography.fontFamily
    },
    color: colorsPalette,
    typography: Typography,
    headersTypography: typographyHeaders,
    components: {
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
        Divider: {
            colorText: colorsPalette.neutral.typography.black,
            colorTextHeading: colorsPalette.neutral.typography.black,
            fontFamily: Typography.fontFamily,
            fontSize: Typography.fontSize6,
            fontSizeLG: Typography.fontSize6,
            lineHeight: Typography.lineHeight6,
            colorSplit: colorsPalette.neutral.typography.black60
        },
        Dropdown: {
            borderRadius: 7,
            fontFamily: Typography.fontFamily,
            fontSize: Typography.fontSize6
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
        Progress: {
            colorBgContainer: colorsPalette.neutral.background,
            colorError: colorsPalette.secondary.red.red400,
            colorInfo: colorsPalette.primary.blue400,
            colorSuccess: colorsPalette.secondary.green.green400,
            fontFamily: Typography.fontFamily,
            fontSize: Typography.fontSize7
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
        }
    }
};

export default theme;
