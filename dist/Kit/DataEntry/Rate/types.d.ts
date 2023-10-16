import {RateProps} from 'antd';
import {KitHTMLAttributes} from '../../../types';

type AntdRateTypesToOmit = '';

export type KitRateColor = 'default' | 'red' | 'green' | 'blue';

export interface KitRateProps extends Omit<RateProps, AntdRateTypesToOmit>, KitHTMLAttributes<HTMLDivElement> {
    color?: KitRateColor;
    disabledStarTransparency?: string;
}
