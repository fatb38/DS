import {IKitCustomTheme, IKitTheme} from '@theme/types';
import {ThemeConfig} from 'antd';
import {
    badgeKitTokenToAntdToken,
    collapseKitTokenToAntdToken,
    tabsKitTokenToAntdToken,
    tooltipKitTokenToAntdToken,
    treeKitTokenToAntdToken
} from './DataDisplay';
import {stepsKitTokenToAntdToken, paginationKitTokenToAntdToken} from './Navigation';
import {buttonKitTokenToAntdToken} from './General';
import {merge} from 'lodash';
import {dividerKitTokenToAntdToken} from './Layout';
import {alertKitTokenToAntdToken, progressKitTokenToAntdToken} from './Feedback';
import {datePickerKitTokenToAntdToken} from '@theme/utils/tokens-mapper/DataEntry/DatePicker';
import {mapInputKitTokenToAntdToken} from '@theme/utils/tokens-mapper/DataEntry/Input';
import {colorPickerKitTokenToAntdToken} from '@theme/utils/tokens-mapper/DataEntry/ColorPicker';
import {inputNumberKitTokenToAntdToken} from '@theme/utils/tokens-mapper/DataEntry/InputNumber';
import {radioKitTokenToAntdToken} from '@theme/utils/tokens-mapper/DataEntry/Radio';
import {rateKitTokenToAntdToken} from '@theme/utils/tokens-mapper/DataEntry/Rate';
import {selectKitTokenToAntdToken} from '@theme/utils/tokens-mapper/DataEntry/Select';
import {tagKitTokenToAntdToken} from '@theme/utils/tokens-mapper/DataEntry/Tag';
import {mapCheckboxKitTokenToAntdToken} from '@theme/utils/tokens-mapper/DataEntry/Checkbox';
import {mapSliderKitTokenToAntdToken} from '@theme/utils/tokens-mapper/DataEntry/Slider';

export const mapKitThemeToAntdTheme = (theme: IKitTheme, customTheme?: IKitCustomTheme): ThemeConfig => {
    const components = merge(theme.components, customTheme?.components);

    return {
        components: {
            Alert: alertKitTokenToAntdToken,
            Badge: badgeKitTokenToAntdToken,
            Button: buttonKitTokenToAntdToken(components.Button),
            Checkbox: mapCheckboxKitTokenToAntdToken(components.Checkbox),
            Collapse: collapseKitTokenToAntdToken(components.Collapse),
            ColorPicker: colorPickerKitTokenToAntdToken(components.ColorPicker),
            DatePicker: datePickerKitTokenToAntdToken(components.DatePicker),
            Divider: dividerKitTokenToAntdToken(components.Divider),
            Input: mapInputKitTokenToAntdToken(components.Input),
            InputNumber: inputNumberKitTokenToAntdToken(components.InputNumber),
            Pagination: paginationKitTokenToAntdToken(components.Pagination),
            Progress: progressKitTokenToAntdToken,
            Radio: radioKitTokenToAntdToken(components.Radio),
            Rate: rateKitTokenToAntdToken,
            Select: selectKitTokenToAntdToken(components.Select),
            Slider: mapSliderKitTokenToAntdToken(components.Slider),
            Steps: stepsKitTokenToAntdToken(components.Steps),
            Tabs: tabsKitTokenToAntdToken(components.Tabs),
            Tag: tagKitTokenToAntdToken(components.Tag),
            Tree: treeKitTokenToAntdToken(components.Tree),
            Tooltip: tooltipKitTokenToAntdToken(components.Tooltip)
        }
    };
};
