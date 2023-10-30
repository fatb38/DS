import {RateProps} from 'antd';
import {KitHTMLAttributes} from '../../../types';
import {IKitRateTheme} from '@theme/types/components/DataEntry/Rate';
import {KitColorProp} from '@utils/functions/types';

type AntdRateTypesToOmit = '';

export interface IKitRate extends Omit<RateProps, AntdRateTypesToOmit>, KitHTMLAttributes<HTMLDivElement> {
    color?: KitColorProp;
    disabledStarTransparency?: string;
}

export interface IStyledRate {
    $theme: IKitRateTheme;
    $activeStarColor: string;
    $disabledStarTransparency: string;
}
