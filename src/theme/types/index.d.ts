import {IKitBorder} from './general/border';
import {IKitColorsPalette} from './general/colors';
import {IKitSpacing} from './general/spacing';
import {IKitTypography} from './general/typography';
import {IKitButtonTheme} from './components/General/Button';
import {IKitRateTheme} from './components/DataEntry/Rate';
import {IKitTagTheme} from './components/DataDisplay/Tag';
import {IKitInputWrapperTheme} from './components/DataEntry/InputWrapper';
import {IKitInputTheme} from './components/DataEntry/Input';
import {IKitSliderTheme} from './components/DataEntry/Slider';
import {IKitTooltipTheme} from './components/DataDisplay/Tooltip';
import {IKitAvatarGroupTheme, IKitAvatarTheme} from './components/DataDisplay/Avatar';
import {IKitBadgeTheme} from './components/DataDisplay/Badge';
import {IKitCollapseTheme} from './components/DataDisplay/Collapse';
import {IKitImageTheme} from './components/DataDisplay/Image';
import {IKitItemListTheme} from './components/DataDisplay/ItemList';
import {IKitTabsTheme} from './components/DataDisplay/Tabs';
import {IKitTreeTheme} from './components/DataDisplay/Tree';
import {IKitInputNumberTheme} from './components/DataEntry/InputNumber';
import {IKitSwitchTheme} from './components/DataEntry/Switch';
import {IKitSelectTheme} from './components/DataEntry/Select';
import {IKitCheckboxTheme} from './components/DataEntry/Checkbox';
import {IKitDatePickerTheme} from './components/DataEntry/DatePicker';
import {IKitUploadTheme} from './components/DataEntry/Upload';
import {IKitRadioTheme} from './components/DataEntry/Radio';
import {IKitStepsTheme} from './components/Navigation/Steps';
import {IKitPaginationTheme} from './components/Navigation/Pagination';
import {IKitMenuTheme} from './components/Navigation/Menu';
import {IKitHeaderTheme} from './components/Navigation/Header';
import {IKitDropDownTheme} from './components/Navigation/DropDown';
import {IKitBreadcrumbTheme} from './components/Navigation/Breadcrumb';
import {IKitDividerTheme} from './components/Layout/Divider';
import {IKitAlertTheme} from './components/Feedback/Alert';
import {IKitModalTheme} from './components/Feedback/Modal';
import {IKitNotificationTheme} from './components/Feedback/Notification';
import {IKitProgressTheme} from './components/Feedback/Progress';
import {IKitSnackBarTheme} from './components/Feedback/SnackBar';
import {IKitIconTheme} from './components/General/Icon';
import {IKitTypographyTheme} from './components/General/Typography';
import {IKitColorPickerTheme} from './components/DataEntry/ColorPicker';
import {ThemeConfig} from 'antd';
import {IKitSideMenuTheme} from './components/Navigation/SideMenu';
import {IKitUtilities} from './utilities';
import {IKitLoaderTheme} from './components/Feedback/Loader';

export type DeepPartial<T> = T extends object
    ? {
          [P in keyof T]?: DeepPartial<T[P]>;
      }
    : T;

export interface IKitThemeGeneral {
    colors: IKitColorsPalette;
    border: IKitBorder;
    spacing: IKitSpacing;
    typography: IKitTypography;
    utilities: IKitUtilities;
}

export interface IKitThemeComponents {
    Button: IKitButtonTheme;
    Rate: IKitRateTheme;
    Tooltip: IKitTooltipTheme;
    Tag: IKitTagTheme;
    InputWrapper: IKitInputWrapperTheme;
    Input: IKitInputTheme;
    InputNumber: IKitInputNumberTheme;
    Avatar: IKitAvatarTheme;
    AvatarGroup: IKitAvatarGroupTheme;
    Badge: IKitBadgeTheme;
    Slider: IKitSliderTheme;
    Collapse: IKitCollapseTheme;
    Image: IKitImageTheme;
    ItemList: IKitItemListTheme;
    Tabs: IKitTabsTheme;
    Tree: IKitTreeTheme;
    Switch: IKitSwitchTheme;
    Select: IKitSelectTheme;
    Checkbox: IKitCheckboxTheme;
    DatePicker: IKitDatePickerTheme;
    Upload: IKitUploadTheme;
    Radio: IKitRadioTheme;
    Alert: IKitAlertTheme;
    Modal: IKitModalTheme;
    Notification: IKitNotificationTheme;
    Progress: IKitProgressTheme;
    SnackBar: IKitSnackBarTheme;
    Divider: IKitDividerTheme;
    Steps: IKitStepsTheme;
    Pagination: IKitPaginationTheme;
    Menu: IKitMenuTheme;
    Header: IKitHeaderTheme;
    DropDown: IKitDropDownTheme;
    Breadcrumb: IKitBreadcrumbTheme;
    Icon: IKitIconTheme;
    Typography: IKitTypographyTheme;
    ColorPicker: IKitColorPickerTheme;
    SideMenu: IKitSideMenuTheme;
    Loader: IKitLoaderTheme;
}

export interface IKitTheme {
    general: IKitThemeGeneral;
    components: IKitThemeComponents;
}

export interface IKitCustomTheme extends DeepPartial<IKitTheme> {}

// This function can set an optional attribute to be required
type SetRequired<T, K extends keyof T> = T & {[P in K]-?: T[P]};

// This type can be used to map our custom token to antd design token
export type AntdThemeConfigWithRequiredComponents = SetRequired<ThemeConfig, 'components'>;
