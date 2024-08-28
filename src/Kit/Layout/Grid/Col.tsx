import {FunctionComponent} from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';
import {useKitTheme} from '@theme/useKitTheme';
import {IKitCol} from './types';

const Col: FunctionComponent<IKitCol> = ({
    children,
    span = 1,
    col = 'auto',
    align,
    justify,
    alignSelf,
    flex,
    fullWidth = false,
    className,
    style,
    ...props
}) => {
    const {appId} = useKitTheme();

    const clx = cn(
        appId,
        styles['kit-col'],
        {
            ['kit-col-flex']: flex,
            [`kit-col-align-${align}`]: flex && align,
            [`kit-col-align-self-${alignSelf}`]: !!alignSelf,
            [`kit-col-justify-${justify}`]: !!justify
        },
        className
    );

    const internalStyle = {
        ...style,
        gridColumn: fullWidth ? '1 / -1' : `${col} / span ${span}`
    };

    return (
        <div {...props} className={clx} style={internalStyle}>
            {children}
        </div>
    );
};

export default Col;
