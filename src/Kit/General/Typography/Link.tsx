import React, {forwardRef, useMemo} from 'react';
import {Typography} from 'antd';
import {IKitLink} from './types';
import {getCustomColor, getWeightClassname} from './commons';
import {useKitTheme} from '@theme/useKitTheme';

import styles from './styles.module.scss';
import cn from 'classnames';

const KitLink = forwardRef<HTMLElement, IKitLink>(({size = 'medium', className, ...props}, ref) => {
    const {appId} = useKitTheme();

    const clx = cn(
        appId,
        styles['kit-typography-link'],
        {
            'kit-typography-link-small': size === 'small',
            'kit-typography-link-medium': size === 'medium',
            'kit-typography-link-large': size === 'large'
        },
        className
    );
    const customStyle = useMemo(() => ({...props.style, ...getCustomColor(props.color)}), [props.color, props.style]);

    return (
        <Typography.Link {...props} ref={ref} className={`${clx} ${getWeightClassname(props)}`} style={customStyle} />
    );
});
KitLink.displayName = 'KitLink';

export default KitLink;
