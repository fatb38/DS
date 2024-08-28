import {forwardRef, useMemo} from 'react';
import {Typography} from 'antd';
import {IKitText} from './types';
import {getCustomColor, getFontSizeClassName, getWeightClassName} from './commons';
import {useKitTheme} from '@theme/useKitTheme';
import cn from 'classnames';

import styles from './styles.module.scss';

const KitText = forwardRef<HTMLElement, IKitText>(({size = 'medium', weight, className, ...props}, ref) => {
    const {appId} = useKitTheme();

    const clx = cn(
        appId,
        styles['kit-typography-text'],
        getFontSizeClassName(size),
        getWeightClassName(weight),
        className
    );

    const customStyle = useMemo(() => ({...props.style, ...getCustomColor(props.color)}), [props.color, props.style]);

    return <Typography.Text {...props} ref={ref} className={clx} style={customStyle} />;
});

KitText.displayName = 'KitText';

export default KitText;
