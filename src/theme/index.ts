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
    components: {}
};

export default theme;
