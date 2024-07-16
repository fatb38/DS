import {FunctionComponent} from 'react';
import {IKitLoader} from './types';
import cn from 'classnames';
import styles from './styles.module.scss';
import {useKitTheme} from '@theme/useKitTheme';

export const KitLoader: FunctionComponent<IKitLoader> = ({
    type = 'animated',
    infinite = false,
    value = 0,
    className,
    style,
    ...props
}) => {
    const {appId} = useKitTheme();

    const classes = cn(
        appId,
        styles.loader,
        type,
        {
            infinite: infinite
        },
        className
    );

    const _style = {
        '--components-Loader-width': value ?? 0,
        ...style
    };

    return <span className={classes} {...props} style={_style} />;
};
