import {TooltipProps} from 'antd';
import {HTMLAttributes} from 'react';

type AntdTooltipTypesToOmit = 'color' | 'overlayClassName' | 'overlayStyle' | 'overlayInnerStyle';

export interface KitTooltipProps extends Omit<TooltipProps, AntdTooltipTypesToOmit>, HTMLAttributes<HTMLDivElement> {}
