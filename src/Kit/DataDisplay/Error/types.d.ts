import {EmptyProps} from 'antd';
import {KitHTMLAttributes} from '../../../types';
import {ReactNode} from 'react';

type AntdEmptyTypesToOmit = 'description';

export interface IKitError extends KitHTMLAttributes<HTMLDivElement>, Omit<EmptyProps, AntdEmptyTypesToOmit> {
    title: string;
    description: ReactNode;
}
