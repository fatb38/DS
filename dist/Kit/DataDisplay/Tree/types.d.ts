import type {BasicDataNode} from 'rc-tree';
import {TreeProps} from 'antd';
import {DataNode} from 'antd/lib/tree';
import {KitHTMLAttributes} from '../../../types';

type AntdTreeTypesToOmit =
    | 'blockNode'
    | 'draggable'
    | 'onDragEnd'
    | 'onDragEnter'
    | 'onDragLeave'
    | 'onDragOver'
    | 'onDragStart'
    | 'onDrop'
    | 'filterTreeNode';

export interface KitTreeProps
    extends Omit<TreeProps<BasicDataNode | DataNode>, AntdTreeTypesToOmit>,
        KitHTMLAttributes<HTMLDivElement> {}
