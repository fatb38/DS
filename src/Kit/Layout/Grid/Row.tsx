import {CSSProperties, FunctionComponent} from 'react';
import {IKitRow} from './types';
import cn from 'classnames';
import {useKitTheme} from '@theme/useKitTheme';

const Row: FunctionComponent<IKitRow> = ({
    children,
    breakpoint = 'auto',
    menuOpen,
    align,
    gap,
    className,
    ...props
}) => {
    const {appId} = useKitTheme();

    const clx = cn(
        appId,
        'kit-row',
        {
            ['kit-row-fixed']: breakpoint !== 'auto',
            [`kit-row-align-${align}`]: !!align,
            [breakpoint]: breakpoint !== 'auto',
            'kit-row-menu-open': menuOpen
        },
        className
    );

    const style = gap ? {'--kit-Grid-rowGap': `${gap}px`} : {};

    return (
        <div {...props} className={clx} style={style as CSSProperties}>
            <div className="kit-row-inner">{children}</div>
        </div>
    );
};

export default Row;
