import React, {forwardRef} from 'react';
import {Typography} from 'antd';
import {IKitText} from './types';
import {getWeightClassname} from './commons';
import {useKitTheme} from '@theme/useKitTheme';
import styles from './styles.module.scss';
import cn from 'classnames';

const KitParagraph = forwardRef<HTMLElement, IKitText>(({size = 'medium', className, ...props}, ref) => {
    const {appId} = useKitTheme();

    const clx = cn(
        styles['kit-typography-paragraph'],
        {
            'kit-typography-paragraph-small': size === 'small',
            'kit-typography-paragraph-medium': size === 'medium',
            'kit-typography-paragraph-large': size === 'large'
        },
        className
    );

    return <Typography.Paragraph {...props} ref={ref} className={`${appId} ${clx} ${getWeightClassname(props)}`} />;
});
KitParagraph.displayName = 'KitParagraph';

export default KitParagraph;
