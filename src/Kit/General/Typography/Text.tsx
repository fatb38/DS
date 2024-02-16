import React, {forwardRef} from 'react';
import {Typography} from 'antd';
import {IKitText} from './types';
import {getWeightClassname} from './commons';
import {useKitTheme} from '@theme/useKitTheme';

import styles from './styles.module.scss';
import cn from 'classnames';

const KitText = forwardRef<HTMLElement, IKitText>(({size = 'medium', className, ...props}, ref) => {
    const {appId} = useKitTheme();

    const clx = cn(
        styles['kit-typography-text'],
        {
            'kit-typography-text-small': size === 'small',
            'kit-typography-text-medium': size === 'medium',
            'kit-typography-text-large': size === 'large'
        },
        className
    );

    return <Typography.Text {...props} ref={ref} className={`${appId} ${clx} ${getWeightClassname(props)}`} />;
});

KitText.displayName = 'KitText';

export default KitText;
