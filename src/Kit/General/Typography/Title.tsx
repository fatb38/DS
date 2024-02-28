import React, {ForwardRefExoticComponent, forwardRef, useMemo} from 'react';
import Base from 'antd/es/typography/Base';
import {IInternalKitTitle, IKitTitle} from './types';
import {TITLE_LEVEL, getCustomColor} from './commons';
import cn from 'classnames';
import {useKitTheme} from '@theme/useKitTheme';

import styles from './styles.module.scss';

const KitTitle = forwardRef<unknown, IKitTitle>(({level = TITLE_LEVEL.h1, ...props}, ref) => {
    const {appId} = useKitTheme();
    const component: string = TITLE_LEVEL[level] as string;

    const InternalBase: ForwardRefExoticComponent<IInternalKitTitle> =
        Base as unknown as ForwardRefExoticComponent<IInternalKitTitle>;

    const customStyle = useMemo(() => ({...props.style, ...getCustomColor(props.color)}), [props.color, props.style]);

    const clx = cn(appId, styles['kit-typography-title'], props.className);

    // error come from ant
    return <InternalBase ref={ref} {...props} component={component} className={clx} style={customStyle} />;
});
KitTitle.displayName = 'KitTitle';

export default KitTitle;
