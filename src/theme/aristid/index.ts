import {KitTheme} from '@theme/types';
import {KitAristidThemeGeneral} from './general';
import {KitRateTheme} from './components/DataEntry/Rate';
import {KitTooltipTheme} from './components/DataDisplay/Tooltip';
import {KitTagTheme} from './components/DataEntry/Tag';
import {KitInputWrapperTheme, KitInputTheme} from './components/DataEntry/Input/';
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
import {KitInputNumberTheme} from './components/DataEntry/InputNumber';
import {KitSwitchTheme} from './components/DataEntry/Switch';
import {KitSelectTheme} from './components/DataEntry/Select';
import {KitCardTheme} from './components/DataDisplay/Card';
import {KitCheckboxTheme} from './components/DataEntry/Checkbox';
import {KitDatePickerTheme} from './components/DataEntry/DatePicker';
import {KitUploadTheme} from './components/DataEntry/Upload';
import {KitRadioTheme} from './components/DataEntry/Radio';
import {KitAlertTheme} from './components/Feedback/Alert';
import {KitModalTheme} from './components/Feedback/Modal';
import {KitNotificationTheme} from './components/Feedback/Notification';

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
        InputNumber: KitInputNumberTheme,
        Slider: KitSliderTheme,
        Avatar: KitAvatarTheme,
        AvatarGroup: KitAvatarGroupTheme,
        Badge: KitBadgeTheme,
        ItemCard: KitItemCardTheme,
        Collapse: KitCollapseTheme,
        Image: KitImageTheme,
        ItemList: KitItemListTheme,
        Tabs: KitTabsTheme,
        Tree: KitTreeTheme,
        Switch: KitSwitchTheme,
        Select: KitSelectTheme,
        Checkbox: KitCheckboxTheme,
        DatePicker: KitDatePickerTheme,
        Upload: KitUploadTheme,
        Radio: KitRadioTheme,
        Alert: KitAlertTheme,
        Modal: KitModalTheme,
        Notification: KitNotificationTheme
    }
};
