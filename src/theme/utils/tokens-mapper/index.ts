import {IKitCustomTheme, IKitTheme} from '@theme/types';
import {ThemeConfig} from 'antd';
import {
    badgeKitTokenToAntdToken,
    collapseKitTokenToAntdToken,
    tabsKitTokenToAntdToken,
    tooltipKitTokenToAntdToken,
    treeKitTokenToAntdToken
} from './DataDisplay';
import {mapCheckboxKitTokenToAntdToken, mapSliderKitTokenToAntdToken, mapTagKitTokenToAntdToken} from './DataEntry';
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

export const mapKitThemeToAntdTheme = (theme: IKitTheme, customTheme?: IKitCustomTheme): ThemeConfig => {
    const components = merge(theme.components, customTheme?.components);

    return {
        components: {
            Alert: alertKitTokenToAntdToken,
            Badge: badgeKitTokenToAntdToken,
            Button: buttonKitTokenToAntdToken,
            Checkbox: mapCheckboxKitTokenToAntdToken(components.Checkbox),
            Collapse: collapseKitTokenToAntdToken,
            DatePicker: datePickerKitTokenToAntdToken,
            Divider: dividerKitTokenToAntdToken,
            Tabs: tabsKitTokenToAntdToken,
            Tooltip: tooltipKitTokenToAntdToken,
            Tree: treeKitTokenToAntdToken,
            Input: mapInputKitTokenToAntdToken,
            InputNumber: inputNumberKitTokenToAntdToken,
            Progress: progressKitTokenToAntdToken,
            Radio: radioKitTokenToAntdToken,
            Rate: rateKitTokenToAntdToken,
            Select: selectKitTokenToAntdToken,
            Slider: mapSliderKitTokenToAntdToken(components.Slider),
            Steps: stepsKitTokenToAntdToken,
            Tag: mapTagKitTokenToAntdToken(components.Tag),
            Pagination: paginationKitTokenToAntdToken,
            ColorPicker: colorPickerKitTokenToAntdToken
        }
    };
};
