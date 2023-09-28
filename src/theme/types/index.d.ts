import {KitBorder} from './general/border';
import {KitColorsPalette} from './general/colors';
import {KitSpacing} from './general/spacing';
import {KitTypography} from './general/typography';
import {KitButtonTheme} from './components/General/Button';
import {KitRateTheme} from './components/DataEntry/Rate';
import {KitTagTheme} from './components/DataEntry/Tag';
import {KitInputWrapperTheme} from './components/DataEntry/Input';
import {KitInputTheme} from './components/DataEntry/Input';
import {KitSliderTheme} from './components/DataEntry/Slider';
import {KitTooltipTheme} from './components/DataDisplay/Tooltip';
import {KitAvatarGroupTheme, KitAvatarTheme} from './components/DataDisplay/Avatar';
import {KitBadgeTheme} from './components/DataDisplay/Badge';
import {KitItemCardTheme} from './components/DataDisplay/ItemCard';
import {KitCollapseTheme} from './components/DataDisplay/Collapse';
import {KitImageTheme} from './components/DataDisplay/Image';
import {KitItemListTheme} from './components/DataDisplay/ItemList';
import {KitTabsTheme} from './components/DataDisplay/Tabs';
import {KitTreeTheme} from './components/DataDisplay/Tree';
import {KitInputNumberTheme} from './components/DataEntry/InputNumber';
import {KitSwitchTheme} from './components/DataEntry/Switch';
import {KitSelectTheme} from './components/DataEntry/Select';
import {IKitCardTheme} from './components/DataDisplay/Card';
import {KitCheckboxTheme} from './components/DataEntry/Checkbox';
import {KitDatePickerTheme} from './components/DataEntry/DatePicker';
import {KitUploadTheme} from './components/DataEntry/Upload';
import {KitRadioTheme} from './components/DataEntry/Radio';
import {KitStepsTheme} from './components/Navigation/Steps';
import {KitPaginationTheme} from './components/Navigation/Pagination';
import {KitMenuTheme} from './components/Navigation/Menu';

type DeepPartial<T> = T extends object
    ? {
          [P in keyof T]?: DeepPartial<T[P]>;
      }
    : T;

export interface KitThemeGeneral {
    colors: KitColorsPalette;
    border: KitBorder;
    spacing: KitSpacing;
    typography: KitTypography;
}

export interface KitTheme {
    general: KitThemeGeneral;
    components: {
        Button: KitButtonTheme;
        Card: IKitCardTheme;
        Rate: KitRateTheme;
        Tooltip: KitTooltipTheme;
        Tag: KitTagTheme;
        InputWrapper: KitInputWrapperTheme;
        Input: KitInputTheme;
        InputNumber: KitInputNumberTheme;
        Avatar: KitAvatarTheme;
        AvatarGroup: KitAvatarGroupTheme;
        Badge: KitBadgeTheme;
        ItemCard: KitItemCardTheme;
        Slider: KitSliderTheme;
        Collapse: KitCollapseTheme;
        Image: KitImageTheme;
        ItemList: KitItemListTheme;
        Tabs: KitTabsTheme;
        Tree: KitTreeTheme;
        Switch: KitSwitchTheme;
        Select: KitSelectTheme;
        Checkbox: KitCheckboxTheme;
        DatePicker: KitDatePickerTheme;
        Upload: KitUploadTheme;
        Radio: KitRadioTheme;
        Steps: KitStepsTheme;
        Pagination: KitPaginationTheme;
        Menu: KitMenuTheme;
    };
}

export interface KitCustomTheme extends DeepPartial<KitTheme> {}

// This function can set an optional attribute to be required
type SetRequired<T, K extends keyof T> = T & {[P in K]-?: T[P]};

// This type can be used to map our custom token to antd design token
export type AntdThemeConfigWithRequiredComponents = SetRequired<ThemeConfig, 'components'>;
