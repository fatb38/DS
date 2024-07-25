import {FunctionComponent} from 'react';
import {Divider as AntdDivider} from 'antd';
import {IKitDivider} from './types';
import {useKitTheme} from '@theme/useKitTheme';
import cn from 'classnames';

import styles from './styles.module.scss';

export const KitDivider: FunctionComponent<IKitDivider> = ({noMargin = false, className, ...props}) => {
    const {appId} = useKitTheme();

    const clx = cn(appId, styles['kit-divider'], className, {
        'no-margin': noMargin
    });

    return <AntdDivider {...props} className={clx} />;
};

KitDivider.displayName = 'KitDivider';
