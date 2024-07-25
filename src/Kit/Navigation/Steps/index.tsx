import {FunctionComponent} from 'react';
import {Steps as AntdSteps} from 'antd';
import {IKitSteps} from './types';
import {useKitTheme} from '@theme/useKitTheme';
import cn from 'classnames';

import styles from './styles.module.scss';

export const KitSteps: FunctionComponent<IKitSteps> = ({className, ...props}) => {
    const {appId} = useKitTheme();
    const clx = cn(appId, styles['kit-steps'], className);

    return <AntdSteps {...props} progressDot className={clx} />;
};

KitSteps.displayName = 'KitSteps';
