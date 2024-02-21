import React, {forwardRef, useMemo} from 'react';
import {Typography} from 'antd';
import {IKitText} from './types';
import {getCustomColor, getWeightClassname} from './commons';
import {useKitTheme} from '@theme/useKitTheme';
import cn from 'classnames';

import styles from './styles.module.scss';

const KitText = forwardRef<HTMLElement, IKitText>(({size = 'medium', className, ...props}, ref) => {
    const {appId} = useKitTheme();

    const clx = cn(
        appId,
        styles['kit-typography-text'],
        {
            'kit-typography-text-small': size === 'small',
            'kit-typography-text-medium': size === 'medium',
            'kit-typography-text-large': size === 'large'
        },
        className
    );

    const customStyle = useMemo(() => ({...props.style, ...getCustomColor(props.color)}), [props.color, props.style]);

    return (
        <Typography.Text {...props} ref={ref} className={`${clx} ${getWeightClassname(props)}`} style={customStyle} />
    );
});

KitText.displayName = 'KitText';

export default KitText;
