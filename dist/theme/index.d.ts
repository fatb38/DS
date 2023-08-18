import { ThemeConfig } from 'antd';
import { KitColorsPalette } from './colors';
import { KitTypography, KitTypograhyHeaders } from './typography';
interface KitThemeConfig extends ThemeConfig {
    color: KitColorsPalette;
    typography: KitTypography;
    headersTypography: KitTypograhyHeaders;
}
declare const theme: KitThemeConfig;
export default theme;
