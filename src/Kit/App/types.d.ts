import {KitHTMLAttributes} from '../../types';
import {ReactNode} from 'react';
import {Locale} from 'antd/lib/locale';

export interface KitAppProps extends KitHTMLAttributes {
    children?: ReactNode;
}
