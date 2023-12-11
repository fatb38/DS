import {IKitCustomTheme, IKitTheme} from '@theme/types';
import {ThemeConfig} from 'antd';
import {
    mapBadgeKitTokenToAntdToken,
    mapCollapseKitTokenToAntdToken,
    mapTabsKitTokenToAntdToken,
    mapTooltipKitTokenToAntdToken,
    mapTreeKitTokenToAntdToken
} from './DataDisplay';
import {
    mapCheckboxKitTokenToAntdToken,
    mapDatePickerKitTokenToAntdToken,
    mapInputKitTokenToAntdToken,
    mapInputNumberKitTokenToAntdToken,
    mapRadioKitTokenToAntdToken,
    mapRateKitTokenToAntdToken,
    mapSelectKitTokenToAntdToken,
    mapSliderKitTokenToAntdToken,
    mapTagKitTokenToAntdToken,
    mapColorPickerKitTokenToAntdToken
} from './DataEntry';
import {mapDividerKitTokenToAntdToken} from './Layout';
import {mapStepsKitTokenToAntdToken, mapPaginationKitTokenToAntdToken} from './Navigation';
import {mapButtonKitTokenToAntdToken} from './General';
import {merge} from 'lodash';
import {alertKitTokenToAntdToken, progressKitTokenToAntdToken} from './Feedback';

export const mapKitThemeToAntdTheme = (theme: IKitTheme, customTheme?: IKitCustomTheme): ThemeConfig => {
    const components = merge(theme.components, customTheme?.components);

    return {
        components: {
            Alert: alertKitTokenToAntdToken,
            Badge: mapBadgeKitTokenToAntdToken(components.Badge),
            Button: mapButtonKitTokenToAntdToken(components.Button),
            Checkbox: mapCheckboxKitTokenToAntdToken(components.Checkbox),
            Collapse: mapCollapseKitTokenToAntdToken(components.Collapse),
            DatePicker: mapDatePickerKitTokenToAntdToken(components.DatePicker),
            Divider: mapDividerKitTokenToAntdToken(components.Divider),
            Tabs: mapTabsKitTokenToAntdToken(components.Tabs),
            Tooltip: mapTooltipKitTokenToAntdToken(components.Tooltip),
            Tree: mapTreeKitTokenToAntdToken(components.Tree),
            Input: mapInputKitTokenToAntdToken(components.Input),
            InputNumber: mapInputNumberKitTokenToAntdToken(components.InputNumber),
            Progress: progressKitTokenToAntdToken,
            Radio: mapRadioKitTokenToAntdToken(components.Radio),
            Rate: mapRateKitTokenToAntdToken(components.Rate),
            Select: mapSelectKitTokenToAntdToken(components.Select),
            Slider: mapSliderKitTokenToAntdToken(components.Slider),
            Steps: mapStepsKitTokenToAntdToken(),
            Tag: mapTagKitTokenToAntdToken(components.Tag),
            Pagination: mapPaginationKitTokenToAntdToken(),
            ColorPicker: mapColorPickerKitTokenToAntdToken(components.ColorPicker)
        }
    };
};
