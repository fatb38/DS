import {DeepPartial, IKitTheme, IKitThemeComponents, IKitThemeGeneral} from '@theme/types';
import {KitAristidThemeGeneral} from './general';
import {KitRateTheme} from './components/DataEntry/Rate';
import {KitTooltipTheme} from './components/DataDisplay/Tooltip';
import {KitTagTheme} from './components/DataEntry/Tag';
import {KitInputWrapperTheme, KitInputTheme} from './components/DataEntry/Input/';
import {KitAvatarGroupTheme, KitAvatarTheme} from './components/DataDisplay/Avatar';
import {KitBadgeTheme} from './components/DataDisplay/Badge';
import {KitItemCardTheme} from './components/DataDisplay/ItemCard';
import {getButtonTokens} from './components/General/Button';
import {KitSliderTheme} from './components/DataEntry/Slider';
import {KitCollapseTheme} from './components/DataDisplay/Collapse';
import {KitImageTheme} from './components/DataDisplay/Image';
import {KitItemListTheme} from './components/DataDisplay/ItemList';
import {getKitTabsTokens} from './components/DataDisplay/Tabs';
import {getKitTreeTokens} from './components/DataDisplay/Tree';
import {KitInputNumberTheme} from './components/DataEntry/InputNumber';
import {getKitSwitchTokens} from './components/DataEntry/Switch';
import {getKitSelectTokens} from './components/DataEntry/Select';
import {KitCardTheme} from './components/DataDisplay/Card';
import {getKitCheckboxTokens} from './components/DataEntry/Checkbox';
import {getKitDatePickerTokens} from './components/DataEntry/DatePicker';
import {getKitUploadTokens} from './components/DataEntry/Upload';
import {getKitRadioTokens} from './components/DataEntry/Radio';
import {getKitStepsTokens} from './components/Navigation/Steps';
import {getKitPaginationTokens} from './components/Navigation/Pagination';
import {getKitMenuTokens} from './components/Navigation/Menu';
import {getKitHeaderTokens} from './components/Navigation/Header';
import {getKitDropDownTokens} from './components/Navigation/DropDown';
import {getKitBreadcrumbTokens} from './components/Navigation/Breadcrumb';
import {getKitDividerTokens} from './components/Layout/Divider';
import {getKitAlertTokens} from './components/Feedback/Alert';
import {getKitModalTokens} from './components/Feedback/Modal';
import {getKitNotificationTokens} from './components/Feedback/Notification';
import {getKitProgressTokens} from './components/Feedback/Progress';
import {getKitSnackBarTokens} from './components/Feedback/SnackBar';
import {getKitIconTokens} from './components/General/Icon';
import {overrideGeneralTokens} from '@theme/utils/theme-builder';
import {getKitTypographyTokens} from './components/General/Typography';

const _getKitComponentsTokens = (generalTokens: IKitThemeGeneral): IKitThemeComponents => {
    return {
        Button: getButtonTokens(generalTokens),
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
        Tabs: getKitTabsTokens(generalTokens),
        Tree: getKitTreeTokens(generalTokens),
        Switch: getKitSwitchTokens(generalTokens),
        Select: getKitSelectTokens(generalTokens),
        Checkbox: getKitCheckboxTokens(generalTokens),
        DatePicker: getKitDatePickerTokens(generalTokens),
        Upload: getKitUploadTokens(generalTokens),
        Radio: getKitRadioTokens(generalTokens),
        Steps: getKitStepsTokens(generalTokens),
        Pagination: getKitPaginationTokens(generalTokens),
        Menu: getKitMenuTokens(generalTokens),
        Header: getKitHeaderTokens(generalTokens),
        DropDown: getKitDropDownTokens(generalTokens),
        Breadcrumb: getKitBreadcrumbTokens(generalTokens),
        Alert: getKitAlertTokens(generalTokens),
        Modal: getKitModalTokens(generalTokens),
        Notification: getKitNotificationTokens(generalTokens),
        Progress: getKitProgressTokens(generalTokens),
        SnackBar: getKitSnackBarTokens(generalTokens),
        Divider: getKitDividerTokens(generalTokens),
        Icon: getKitIconTokens(generalTokens),
        Typography: getKitTypographyTokens(generalTokens)
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
