import {IKitTheme} from '@theme/types';
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
    mapTagKitTokenToAntdToken
} from './DataEntry';
import {mapAlertKitTokenToAntdToken, mapProgressKitTokenToAntdToken} from './Feedback';
import {mapDividerKitTokenToAntdToken} from './Layout';
import {mapStepsKitTokenToAntdToken} from './Navigation';
import {mapButtonKitTokenToAntdToken} from './General';

export const mapKitThemeToAntdTheme = (theme: IKitTheme): ThemeConfig => {
    const {components} = theme;
    return {
        components: {
            Alert: mapAlertKitTokenToAntdToken(components.Alert),
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
            Progress: mapProgressKitTokenToAntdToken(components.Progress),
            Radio: mapRadioKitTokenToAntdToken(components.Radio),
            Rate: mapRateKitTokenToAntdToken(components.Rate),
            Select: mapSelectKitTokenToAntdToken(components.Select),
            Slider: mapSliderKitTokenToAntdToken(components.Slider),
            Steps: mapStepsKitTokenToAntdToken(components.Steps),
            Tag: mapTagKitTokenToAntdToken(components.Tag)
        }
    };
};
