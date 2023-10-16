import {AlertProps} from 'antd';
import {KitHTMLAttributes} from '../../../types';
import {IKitAlertTheme} from '@theme/types/components/Feedback/Alert';

type AntdAlertTypesToOmit = 'closeText' | 'closeIcon' | 'action' | 'icon';

export interface IKitAlert
    extends Omit<AlertProps, AntdAlertTypesToOmit>,
        Omit<KitHTMLAttributes<HTMLDivElement>, 'role'> {}

export interface IStyledKitAlert {
    $theme: IKitAlertTheme;
}
