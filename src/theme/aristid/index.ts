import {DeepPartial, IKitTheme, IKitThemeComponents, IKitThemeGeneral} from '@theme/types';
import {KitAristidThemeGeneral} from './general';
import {getKitRateTokens} from './components/DataEntry/Rate';
import {getKitTooltipTokens} from './components/DataDisplay/Tooltip';
import {getKitTagTokens} from './components/DataEntry/Tag';
import {getKitInputTokens, getKitInputWrapperTokens} from './components/DataEntry/Input/';
import {getKitAvatarGroupTokens, getKitAvatarTokens} from './components/DataDisplay/Avatar';
import {getKitBadgeTokens} from './components/DataDisplay/Badge';
import {getKitItemCardTokens} from './components/DataDisplay/ItemCard';
import {getKitButtonTokens} from './components/General/Button';
import {getKitSliderTokens} from './components/DataEntry/Slider';
import {getKitCollapseTokens} from './components/DataDisplay/Collapse';
import {getKitImageTokens} from './components/DataDisplay/Image';
import {getKitItemListTokens} from './components/DataDisplay/ItemList';
import {KitTabsTheme} from './components/DataDisplay/Tabs';
import {KitTreeTheme} from './components/DataDisplay/Tree';
import {getKitInputNumberTokens} from './components/DataEntry/InputNumber';
import {KitSwitchTheme} from './components/DataEntry/Switch';
import {KitSelectTheme} from './components/DataEntry/Select';
import {getKitCardTokens} from './components/DataDisplay/Card';
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
        Tooltip: getKitTooltipTokens(generalTokens),
        Tag: getKitTagTokens(generalTokens),
        Card: getKitCardTokens(generalTokens),
        InputWrapper: getKitInputWrapperTokens(generalTokens),
        Input: getKitInputTokens(generalTokens),
        InputNumber: getKitInputNumberTokens(generalTokens),
        Slider: getKitSliderTokens(generalTokens),
        Avatar: getKitAvatarTokens(generalTokens),
        AvatarGroup: getKitAvatarGroupTokens(generalTokens),
        Badge: getKitBadgeTokens(generalTokens),
        ItemCard: getKitItemCardTokens(generalTokens),
        Collapse: getKitCollapseTokens(generalTokens),
        Image: getKitImageTokens(generalTokens),
        ItemList: getKitItemListTokens(generalTokens),
        Tabs: KitTabsTheme,
        Tree: KitTreeTheme,
        Switch: KitSwitchTheme,
        Select: KitSelectTheme,
        Checkbox: KitCheckboxTheme,
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
