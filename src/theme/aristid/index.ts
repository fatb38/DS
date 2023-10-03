import {DeepPartial, IKitTheme, IKitThemeComponents, IKitThemeGeneral} from '@theme/types';
import {KitAristidThemeGeneral} from './general';
import {getKitRateTokens} from './components/DataEntry/Rate';
import {getKitTooltipTokens} from './components/DataDisplay/Tooltip';
import {getKitTagTokens} from './components/DataEntry/Tag';
import {getKitInputTokens, getKitInputWrapperTokens} from './components/DataEntry/Input/';
import {getKitAvatarGroupTokens, getKitAvatarTokens} from './components/DataDisplay/Avatar';
import {getKitBadgeTokens} from './components/DataDisplay/Badge';
import {getKitItemCardTokens} from './components/DataDisplay/ItemCard';
import {getButtonTokens} from './components/General/Button';
import {getKitSliderTokens} from './components/DataEntry/Slider';
import {getKitCollapseTokens} from './components/DataDisplay/Collapse';
import {getKitImageTokens} from './components/DataDisplay/Image';
import {getKitItemListTokens} from './components/DataDisplay/ItemList';
import {getKitInputNumberTokens} from './components/DataEntry/InputNumber';
import {getKitCardTokens} from './components/DataDisplay/Card';
import {getKitTabsTokens} from './components/DataDisplay/Tabs';
import {getKitTreeTokens} from './components/DataDisplay/Tree';
import {getKitSwitchTokens} from './components/DataEntry/Switch';
import {getKitSelectTokens} from './components/DataEntry/Select';
import {getKitCheckboxTokens} from './components/DataEntry/Checkbox';
import {getKitDatePickerTokens} from './components/DataEntry/DatePicker';
import {getKitRadioTokens} from './components/DataEntry/Radio';
import {getKitUploadTokens} from './components/DataEntry/Upload';
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
