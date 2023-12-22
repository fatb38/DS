import {AlertProps} from 'antd';
import {KitHTMLAttributes} from '../../../types';

type AntdAlertTypesToOmit = 'closeText' | 'closeIcon' | 'action' | 'icon';

export interface IKitAlert
    extends Omit<AlertProps, AntdAlertTypesToOmit>,
        Omit<KitHTMLAttributes<HTMLDivElement>, 'role'> {}
