import {KitTheme} from '@theme/types';
import {KitAristidThemeGeneral} from './general';
import {KitRateTheme} from './components/DataEntry/Rate';
import {KitTooltipTheme} from './components/DataDisplay/Tooltip';
import {KitTagTheme} from './components/DataEntry/Tag';
import {KitInputWrapperTheme} from './components/DataEntry/Input/InputWrapper';
import {KitInputTheme} from './components/DataEntry/Input/Input';
import {KitSliderTheme} from './components/DataEntry/Slider';

export const KitAristidTheme: KitTheme = {
    general: KitAristidThemeGeneral,
    components: {
        Rate: KitRateTheme,
        Tooltip: KitTooltipTheme,
        Tag: KitTagTheme,
        InputWrapper: KitInputWrapperTheme,
        Input: KitInputTheme,
        Slider: KitSliderTheme
    }
};
