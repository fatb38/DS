import {RateProps} from 'antd';
import {HTMLAttributes} from 'react';

type AntdRateTypesToOmit = '';

export type KitRateColor = 'default' | 'red' | 'green' | 'blue';

export interface KitRateProps extends Omit<RateProps, AntdRateTypesToOmit>, HTMLAttributes<HTMLDivElement> {
    color?: KitRateColor;
    disabledStarTransparency?: string;
}
