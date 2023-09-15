import {AlertProps} from 'antd';
import {KitHTMLAttributes} from '../../../types';

type AntdAlertTypesToOmit = 'closeText' | 'closeIcon' | 'action' | 'icon';

export interface KitAlertProps extends Omit<AlertProps, AntdAlertTypesToOmit>, KitHTMLAttributes<HTMLDivElement> {}
