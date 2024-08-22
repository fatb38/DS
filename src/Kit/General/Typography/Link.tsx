import {forwardRef, useMemo} from 'react';
import {Typography} from 'antd';
import {IKitLink} from './types';
import {getCustomColor, getFontSizeClassName, getWeightClassName} from './commons';
import {useKitTheme} from '@theme/useKitTheme';

import styles from './styles.module.scss';
import cn from 'classnames';

const KitLink = forwardRef<HTMLElement, IKitLink>(({size = 'medium', weight, className, ...props}, ref) => {
    const {appId} = useKitTheme();

    const clx = cn(
        appId,
        styles['kit-typography-link'],
        getFontSizeClassName(size),
        getWeightClassName(weight),
        className
    );
    const customStyle = useMemo(() => ({...props.style, ...getCustomColor(props.color)}), [props.color, props.style]);

    return <Typography.Link {...props} ref={ref} className={clx} style={customStyle} />;
});
KitLink.displayName = 'KitLink';

export default KitLink;
