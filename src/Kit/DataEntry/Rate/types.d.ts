import {RateProps} from 'antd';
import {KitHTMLAttributes} from '../../../types';
import {IKitRateTheme} from '@theme/types/components/DataEntry/Rate';
import {KitColorProp} from '@utils/functions/types';
import {ReactNode} from 'react';

type AntdRateTypesToOmit = 'character';

export interface IKitRate extends Omit<RateProps, AntdRateTypesToOmit>, KitHTMLAttributes<HTMLDivElement> {
    color?: KitColorProp;
    defaultIcon?: ReactNode;
    halfIcon?: ReactNode;
    activeIcon?: ReactNode;
}

export interface IStyledRate {
    $theme: IKitRateTheme;
    $activeStarColor: string;
}
