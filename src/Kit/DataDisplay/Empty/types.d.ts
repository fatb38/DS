import {EmptyProps} from 'antd';
import {KitHTMLAttributes} from '../../../types';
import {FunctionComponent, ReactNode} from 'react';

type AntdEmptyTypesToOmit = 'description';

export interface IKitEmpty extends KitHTMLAttributes<HTMLDivElement>, Omit<EmptyProps, AntdEmptyTypesToOmit> {
    title?: ReactNode;
    description?: ReactNode;
    button?: ReactNode;
}

export type KitEmptyCompoundedComponent = FunctionComponent<IKitEmpty> & {
    ASSET_FOLDER: ReactNode;
    ASSET_LIST: ReactNode;
    ASSET_MODAL: ReactNode;
    ASSET_PAGE: ReactNode;
    ASSET_RESULT: ReactNode;
};
