import {TooltipProps} from 'antd';
import {KitHTMLAttributes} from '../../../types';

type AntdTooltipTypesToOmit = 'color' | 'overlayClassName' | 'overlayStyle' | 'overlayInnerStyle';

//TODO change title wording and delete Omit<title>
export interface KitTooltipProps
    extends Omit<TooltipProps, AntdTooltipTypesToOmit>,
        Omit<KitHTMLAttributes<HTMLDivElement>, 'title'> {}
