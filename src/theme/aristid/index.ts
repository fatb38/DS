import {KitTheme} from '@theme/types';
import {KitAristidThemeGeneral} from './general';
import {KitRateTheme} from './components/DataEntry/Rate';
import {KitTooltipTheme} from './components/DataDisplay/Tooltip';
import {KitTagTheme} from './components/DataEntry/Tag';
import {KitInputWrapperTheme} from './components/DataEntry/Input/InputWrapper';
import {KitInputTheme} from './components/DataEntry/Input/Input';
import {KitAvatarGroupTheme, KitAvatarTheme} from './components/DataDisplay/Avatar';

export const KitAristidTheme: KitTheme = {
    general: KitAristidThemeGeneral,
    components: {
        Rate: KitRateTheme,
        Tooltip: KitTooltipTheme,
        Tag: KitTagTheme,
        InputWrapper: KitInputWrapperTheme,
        Input: KitInputTheme,
        Avatar: KitAvatarTheme,
        AvatarGroup: KitAvatarGroupTheme
    }
};
