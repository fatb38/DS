import {KitRateThemeProps} from './components/Rate';
import {KitColorsPalette} from './general/colors';

type DeepPartial<T> = T extends object
    ? {
          [P in keyof T]?: DeepPartial<T[P]>;
      }
    : T;

export interface KitThemeProps {
    general: {
        colors: KitColorsPalette;
    };
    components: {
        Rate: KitRateThemeProps;
    };
}

export interface KitCustomThemeProps extends DeepPartial<KitThemeProps> {}
