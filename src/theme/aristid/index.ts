import {KitThemeProps} from '@theme/types';
import {KitRateTheme} from './components/Rate';
import {colorsPalette} from './general/colors';

export const KitDefaultTheme: KitThemeProps = {
    general: {
        colors: colorsPalette
    },
    components: {
        Rate: KitRateTheme
    }
};
