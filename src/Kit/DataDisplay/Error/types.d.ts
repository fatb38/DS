import {EmptyProps} from 'antd';
import {KitHTMLAttributes} from '../../../types';
import {ReactElement, ReactNode} from 'react';

type AntdEmptyTypesToOmit = 'description';

type KitHttpErrorCode = '401' | '403' | '404' | '500' | '502' | '503';

type KitErrorImageAlt = ({alt: string}) => ReactElement;

export interface IKitError extends KitHTMLAttributes<HTMLDivElement>, Omit<EmptyProps, AntdEmptyTypesToOmit> {
    title: string;
    description: ReactNode;
    httpErrorCode?: KitHttpErrorCode;
}
