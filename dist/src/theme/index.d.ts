import { ThemeConfig } from 'antd';
import { KitColorsPalette } from './colors';
import { KitTypography } from './typography';
interface KitThemeConfig extends ThemeConfig {
    color: KitColorsPalette;
    typography: KitTypography;
}
declare const theme: KitThemeConfig;
export default theme;
