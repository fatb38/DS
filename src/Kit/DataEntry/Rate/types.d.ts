import {RateProps} from 'antd';
import {KitHTMLAttributes} from '../../../types';
import {KitColorProp} from '@utils/functions/types';
import {ReactNode} from 'react';

type AntdRateTypesToOmit = 'character';

export interface IKitRate extends Omit<RateProps, AntdRateTypesToOmit>, KitHTMLAttributes<HTMLDivElement> {
    color?: KitColorProp;
    defaultIcon?: ReactNode;
    halfIcon?: ReactNode;
    activeIcon?: ReactNode;
}
