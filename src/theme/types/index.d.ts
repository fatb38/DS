import {KitBorder} from './general/border';
import {KitColorsPalette} from './general/colors';
import {KitSpacing} from './general/spacing';
import {KitTypography} from './general/typography';
import {KitButtonTheme} from './components/General/Button';
import {KitRateTheme} from './components/DataEntry/Rate';
import {KitTagTheme} from './components/DataEntry/Tag';
import {KitInputWrapperTheme} from './components/DataEntry/Input';
import {KitInputTheme} from './components/DataEntry/Input/Input';
import {KitSliderTheme} from './components/DataEntry/Slider';
import {KitTooltipTheme} from './components/DataDisplay/Tooltip';
import {KitAvatarGroupTheme, KitAvatarTheme} from './components/DataDisplay/Avatar';
import {KitBadgeTheme} from './components/DataDisplay/Badge';
import {KitCardTheme} from './components/DataDisplay/Card';
import {KitCollapseTheme} from './components/DataDisplay/Collapse';
import {KitImageTheme} from './components/DataDisplay/Image';
import {KitItemListTheme} from './components/DataDisplay/ItemList';
import {KitTabsTheme} from './components/DataDisplay/Tabs';
import {KitTreeTheme} from './components/DataDisplay/Tree';
import {KitInputNumberTheme} from './components/DataEntry/InputNumber';
import {KitSwitchTheme} from './components/DataEntry/Switch';

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
        Rate: KitRateTheme;
        Tooltip: KitTooltipTheme;
        Tag: KitTagTheme;
        InputWrapper: KitInputWrapperTheme;
        Input: KitInputTheme;
        InputNumber: KitInputNumberTheme;
        Avatar: KitAvatarTheme;
        AvatarGroup: KitAvatarGroupTheme;
        Badge: KitBadgeTheme;
        Card: KitCardTheme;
        Slider: KitSliderTheme;
        Collapse: KitCollapseTheme;
        Image: KitImageTheme;
        ItemList: KitItemListTheme;
        Tabs: KitTabsTheme;
        Tree: KitTreeTheme;
        Switch: KitSwitchTheme;
    };
}

export interface KitCustomTheme extends DeepPartial<KitTheme> {}

// This function can set an optional attribute to be required
type SetRequired<T, K extends keyof T> = T & {[P in K]-?: T[P]};

// This type can be used to map our custom token to antd design token
export type AntdThemeConfigWithRequiredComponents = SetRequired<ThemeConfig, 'components'>;
