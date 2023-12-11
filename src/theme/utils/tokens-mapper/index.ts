import {IKitCustomTheme, IKitTheme} from '@theme/types';
import {ThemeConfig} from 'antd';
import {
    badgeKitTokenToAntdToken,
    collapseKitTokenToAntdToken,
    tabsKitTokenToAntdToken,
    tooltipKitTokenToAntdToken,
    treeKitTokenToAntdToken
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
import {stepsKitTokenToAntdToken, paginationKitTokenToAntdToken} from './Navigation';
import {buttonKitTokenToAntdToken} from './General';
import {merge} from 'lodash';
import {dividerKitTokenToAntdToken} from './Layout';
import {alertKitTokenToAntdToken, progressKitTokenToAntdToken} from './Feedback';

export const mapKitThemeToAntdTheme = (theme: IKitTheme, customTheme?: IKitCustomTheme): ThemeConfig => {
    const components = merge(theme.components, customTheme?.components);

    return {
        components: {
            Alert: alertKitTokenToAntdToken,
            Badge: badgeKitTokenToAntdToken,
            Button: buttonKitTokenToAntdToken,
            Checkbox: mapCheckboxKitTokenToAntdToken(components.Checkbox),
            Collapse: collapseKitTokenToAntdToken,
            DatePicker: mapDatePickerKitTokenToAntdToken(components.DatePicker),
            Divider: dividerKitTokenToAntdToken,
            Tabs: tabsKitTokenToAntdToken,
            Tooltip: tooltipKitTokenToAntdToken,
            Tree: treeKitTokenToAntdToken,
            Input: mapInputKitTokenToAntdToken(components.Input),
            InputNumber: mapInputNumberKitTokenToAntdToken(components.InputNumber),
            Progress: progressKitTokenToAntdToken,
            Radio: mapRadioKitTokenToAntdToken(components.Radio),
            Rate: mapRateKitTokenToAntdToken(components.Rate),
            Select: mapSelectKitTokenToAntdToken(components.Select),
            Slider: mapSliderKitTokenToAntdToken(components.Slider),
            Steps: stepsKitTokenToAntdToken,
            Tag: mapTagKitTokenToAntdToken(components.Tag),
            Pagination: paginationKitTokenToAntdToken,
            ColorPicker: mapColorPickerKitTokenToAntdToken(components.ColorPicker)
        }
    };
};
