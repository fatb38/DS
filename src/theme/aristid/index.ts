import {DeepPartial, IKitCustomTheme, IKitTheme, IKitThemeComponents, IKitThemeGeneral} from '@theme/types';
import {KitAristidThemeGeneral} from './general';
import {getKitRateTokens} from './components/DataEntry/Rate';
import {KitTooltipTheme} from './components/DataDisplay/Tooltip';
import {KitTagTheme} from './components/DataEntry/Tag';
import {KitInputWrapperTheme, KitInputTheme} from './components/DataEntry/Input/';
import {KitAvatarGroupTheme, KitAvatarTheme} from './components/DataDisplay/Avatar';
import {KitBadgeTheme} from './components/DataDisplay/Badge';
import {KitItemCardTheme} from './components/DataDisplay/ItemCard';
import {getKitButtonTokens} from './components/General/Button';
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
import {KitStepsTheme} from './components/Navigation/Steps';
import {KitPaginationTheme} from './components/Navigation/Pagination';
import {KitMenuTheme} from './components/Navigation/Menu';
import {KitHeaderTheme} from './components/Navigation/Header';
import {KitDropDownTheme} from './components/Navigation/DropDown';
import {KitBreadcrumbTheme} from './components/Navigation/Breadcrumb';
import {KitDividerTheme} from './components/Layout/Divider';
import {KitAlertTheme} from './components/Feedback/Alert';
import {KitModalTheme} from './components/Feedback/Modal';
import {KitNotificationTheme} from './components/Feedback/Notification';
import {KitProgressTheme} from './components/Feedback/Progress';
import {KitSnackBarTheme} from './components/Feedback/SnackBar';
import {KitIconTheme} from './components/General/Icon';
import {KitTypographyTheme} from './components/General/Typography';
import {overrideGeneralTokens} from '@theme/utils/theme-builder';

const _getKitComponentsTokens = (generalTokens: IKitThemeGeneral): IKitThemeComponents => {
    return {
        Button: getKitButtonTokens(generalTokens),
        Rate: getKitRateTokens(generalTokens),
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
        Tree: KitTreeTheme, /////////////
        Switch: KitSwitchTheme,
        Select: KitSelectTheme,
        Checkbox: KitCheckboxTheme, //////////
        DatePicker: KitDatePickerTheme,
        Upload: KitUploadTheme,
        Radio: KitRadioTheme,
        Steps: KitStepsTheme,
        Pagination: KitPaginationTheme,
        Menu: KitMenuTheme,
        Header: KitHeaderTheme,
        DropDown: KitDropDownTheme,
        Breadcrumb: KitBreadcrumbTheme,
        Alert: KitAlertTheme,
        Modal: KitModalTheme,
        Notification: KitNotificationTheme,
        Progress: KitProgressTheme,
        SnackBar: KitSnackBarTheme,
        Divider: KitDividerTheme,
        Icon: KitIconTheme,
        Typography: KitTypographyTheme
    };
};

export const getKitAristidTheme = (customTokens?: DeepPartial<IKitThemeGeneral>): IKitTheme => {
    const generalTokens = overrideGeneralTokens({...KitAristidThemeGeneral}, customTokens);
    const components = _getKitComponentsTokens(generalTokens);

    return {
        general: generalTokens,
        components
    };
};
