import React, {forwardRef} from 'react';
import {Typography} from 'antd';
import {IKitLink} from './types';
import {getWeightClassname} from './commons';
import {useKitTheme} from '@theme/useKitTheme';

import styles from './styles.module.scss';
import cn from 'classnames';

const KitLink = forwardRef<HTMLElement, IKitLink>(({size = 'medium', className, ...props}, ref) => {
    const {appId} = useKitTheme();

    const clx = cn(
        styles['kit-typography-link'],
        {
            'kit-typography-link-small': size === 'small',
            'kit-typography-link-medium': size === 'medium',
            'kit-typography-link-large': size === 'large'
        },
        className
    );

    return <Typography.Link {...props} ref={ref} className={`${appId} ${clx} ${getWeightClassname(props)}`} />;
});
KitLink.displayName = 'KitLink';

export default KitLink;
