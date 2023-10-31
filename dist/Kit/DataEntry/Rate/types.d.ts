import {RateProps} from 'antd';
import {KitHTMLAttributes} from '../../../types';
import {IKitRateTheme} from '@theme/types/components/DataEntry/Rate';

type AntdRateTypesToOmit = '';

type KitRateColor = 'default' | 'red' | 'green' | 'blue';

export interface IKitRate extends Omit<RateProps, AntdRateTypesToOmit>, KitHTMLAttributes<HTMLDivElement> {
    color?: KitRateColor;
    disabledStarTransparency?: string;
}

export interface IStyledRate {
    $theme: IKitRateTheme;
    $color: KitRateColor;
    $disabledStarTransparency: string;
}
