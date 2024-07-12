import {forwardRef} from 'react';
import {Switch as AntdSwitch} from 'antd';
import {IKitSwitch} from './types';
import {useKitTheme} from '@theme/useKitTheme';
import cn from 'classnames';

import styles from './styles.module.scss';

export const KitSwitch = forwardRef<HTMLButtonElement, IKitSwitch>(({className, ...props}, ref) => {
    const {appId} = useKitTheme();
    const clx = cn(appId, styles['kit-switch'], className);

    return (
        <AntdSwitch
            {...props}
            ref={ref}
            checkedChildren={null}
            unCheckedChildren={null}
            size="default"
            className={clx}
        />
    );
});

KitSwitch.displayName = 'KitSwitch';
