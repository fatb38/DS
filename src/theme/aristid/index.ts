import {KitTheme} from '@theme/types';
import {KitAristidThemeGeneral} from './general';
import {KitRateTheme} from './components/DataEntry/Rate';
import {KitTooltipTheme} from './components/DataDisplay/Tooltip';
import {KitTagTheme} from './components/DataEntry/Tag';
import {KitInputWrapperTheme} from './components/DataEntry/Input/InputWrapper';
import {KitInputTheme} from './components/DataEntry/Input/Input';
import {KitAvatarGroupTheme, KitAvatarTheme} from './components/DataDisplay/Avatar';
import {KitBadgeTheme} from './components/DataDisplay/Badge';
import {KitCardTheme} from './components/DataDisplay/Card';
import {KitButtonTheme} from './components/General/Button';
import {KitSliderTheme} from './components/DataEntry/Slider';

export const KitAristidTheme: KitTheme = {
    general: KitAristidThemeGeneral,
    components: {
        Button: KitButtonTheme,
        Rate: KitRateTheme,
        Tooltip: KitTooltipTheme,
        Tag: KitTagTheme,
        InputWrapper: KitInputWrapperTheme,
        Input: KitInputTheme,
        Slider: KitSliderTheme,
        Avatar: KitAvatarTheme,
        AvatarGroup: KitAvatarGroupTheme,
        Badge: KitBadgeTheme,
        Card: KitCardTheme
    }
};
