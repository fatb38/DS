import {KitRateTheme} from './components/DataEntry/Rate';
import {KitTooltipTheme} from './components/DateDisplay/Tooltip';
import {KitBorder} from './general/border';
import {KitColorsPalette} from './general/colors';
import {KitTypography} from './general/typography';

type DeepPartial<T> = T extends object
    ? {
          [P in keyof T]?: DeepPartial<T[P]>;
      }
    : T;

export interface KitThemeGeneral {
    colors: KitColorsPalette;
    border: KitBorder;
    typography: KitTypography;
}

export interface KitTheme {
    general: KitThemeGeneral;
    components: {
        Rate: KitRateTheme;
        Tooltip: KitTooltipTheme;
    };
}

export interface KitCustomTheme extends DeepPartial<KitTheme> {}

// This function can set an optional attribute to be required
type SetRequired<T, K extends keyof T> = T & {[P in K]-?: T[P]};

// This type can be used to map our custom token to antd design token
export type AntdThemeConfigWithRequiredComponents = SetRequired<ThemeConfig, 'components'>;
