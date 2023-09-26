import {KitTheme} from '@theme/types';
import {KitAristidThemeGeneral} from './general';
import {KitRateTheme} from './components/DataEntry/Rate';
import {KitTooltipTheme} from './components/DataDisplay/Tooltip';
import {KitTagTheme} from './components/DataEntry/Tag';
import {KitInputWrapperTheme} from './components/DataEntry/Input/InputWrapper';
import {KitInputTheme} from './components/DataEntry/Input/Input';
import {KitAvatarGroupTheme, KitAvatarTheme} from './components/DataDisplay/Avatar';
import {KitBadgeTheme} from './components/DataDisplay/Badge';
import {KitItemCardTheme} from './components/DataDisplay/ItemCard';
import {KitButtonTheme} from './components/General/Button';
import {KitSliderTheme} from './components/DataEntry/Slider';
import {KitCollapseTheme} from './components/DataDisplay/Collapse';
import {KitImageTheme} from './components/DataDisplay/Image';
import {KitItemListTheme} from './components/DataDisplay/ItemList';
import {KitTabsTheme} from './components/DataDisplay/Tabs';
import {KitTreeTheme} from './components/DataDisplay/Tree';
import {KitCardTheme} from './components/DataDisplay/Card';

export const KitAristidTheme: KitTheme = {
    general: KitAristidThemeGeneral,
    components: {
        Button: KitButtonTheme,
        Rate: KitRateTheme,
        Tooltip: KitTooltipTheme,
        Tag: KitTagTheme,
        Card: KitCardTheme,
        InputWrapper: KitInputWrapperTheme,
        Input: KitInputTheme,
        Slider: KitSliderTheme,
        Avatar: KitAvatarTheme,
        AvatarGroup: KitAvatarGroupTheme,
        Badge: KitBadgeTheme,
        ItemCard: KitItemCardTheme,
        Collapse: KitCollapseTheme,
        Image: KitImageTheme,
        ItemList: KitItemListTheme,
        Tabs: KitTabsTheme,
        Tree: KitTreeTheme
    }
};
