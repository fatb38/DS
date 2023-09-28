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
        }
    }
};

export default theme;
