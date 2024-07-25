import {FunctionComponent} from 'react';
import {Tree as AntdTree} from 'antd';
import {IKitTree} from './types';
import {useKitTheme} from '@theme/useKitTheme';
import cn from 'classnames';

import styles from './styles.module.scss';

export const KitTree: FunctionComponent<IKitTree> = ({className, ...treeProps}) => {
    const {appId} = useKitTheme();
    const clx = cn(appId, styles['kit-tree'], className);

    return (
        <AntdTree
            {...treeProps}
            className={clx}
            blockNode={true}
            draggable={false}
            onDragEnd={undefined}
            onDragEnter={undefined}
            onDragLeave={undefined}
            onDragOver={undefined}
            onDragStart={undefined}
            onDrop={undefined}
        />
    );
};

KitTree.displayName = 'KitTree';
