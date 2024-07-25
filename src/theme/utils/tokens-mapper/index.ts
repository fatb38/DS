import {ThemeConfig} from 'antd';
import {
    badgeKitTokenToAntdToken,
    collapseKitTokenToAntdToken,
    tabsKitTokenToAntdToken,
    tableKitTokenToAntdToken,
    tooltipKitTokenToAntdToken,
    treeKitTokenToAntdToken
} from './DataDisplay';
import {stepsKitTokenToAntdToken, paginationKitTokenToAntdToken} from './Navigation';
import {dividerKitTokenToAntdToken} from './Layout';
import {alertKitTokenToAntdToken, progressKitTokenToAntdToken} from './Feedback';
import {datePickerKitTokenToAntdToken} from '@theme/utils/tokens-mapper/DataEntry/DatePicker';
import {inputKitTokenToAntdToken} from '@theme/utils/tokens-mapper/DataEntry/Input';
import {colorPickerKitTokenToAntdToken} from '@theme/utils/tokens-mapper/DataEntry/ColorPicker';
import {inputNumberKitTokenToAntdToken} from '@theme/utils/tokens-mapper/DataEntry/InputNumber';
import {radioKitTokenToAntdToken} from '@theme/utils/tokens-mapper/DataEntry/Radio';
import {rateKitTokenToAntdToken} from '@theme/utils/tokens-mapper/DataEntry/Rate';
import {selectKitTokenToAntdToken} from '@theme/utils/tokens-mapper/DataEntry/Select';
import {sliderKitTokenToAntdToken} from '@theme/utils/tokens-mapper/DataEntry/Slider';
import {checkboxKitTokenToAntdToken} from './DataEntry/Checkbox';
import {formKitTokenToAntdToken} from './DataEntry/Form';

export const antdThemeConfig: ThemeConfig = {
    components: {
        Alert: alertKitTokenToAntdToken,
        Badge: badgeKitTokenToAntdToken,
        Checkbox: checkboxKitTokenToAntdToken,
        Collapse: collapseKitTokenToAntdToken,
        ColorPicker: colorPickerKitTokenToAntdToken,
        DatePicker: datePickerKitTokenToAntdToken,
        Divider: dividerKitTokenToAntdToken,
        Input: inputKitTokenToAntdToken,
        InputNumber: inputNumberKitTokenToAntdToken,
        Pagination: paginationKitTokenToAntdToken,
        Progress: progressKitTokenToAntdToken,
        Radio: radioKitTokenToAntdToken,
        Rate: rateKitTokenToAntdToken,
        Select: selectKitTokenToAntdToken,
        Slider: sliderKitTokenToAntdToken,
        Steps: stepsKitTokenToAntdToken,
        Table: tableKitTokenToAntdToken,
        Tabs: tabsKitTokenToAntdToken,
        Tree: treeKitTokenToAntdToken,
        Tooltip: tooltipKitTokenToAntdToken,
        Form: formKitTokenToAntdToken
    }
};
