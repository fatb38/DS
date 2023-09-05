import {KitTheme} from '@theme/types';
import {KitAristidThemeGeneral} from './general';
import {KitRateTheme} from './components/DataEntry/Rate';
import {KitTooltipTheme} from './components/DataDisplay/Tooltip';
import {KitTagTheme} from './components/DataEntry/Tag';

export const KitAristidTheme: KitTheme = {
    general: KitAristidThemeGeneral,
    components: {
        Rate: KitRateTheme,
        Tooltip: KitTooltipTheme,
        Tag: KitTagTheme
    }
};
