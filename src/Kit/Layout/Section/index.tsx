import {CSSProperties, PropsWithChildren} from 'react';
import {FunctionComponent} from 'react';
import {IKitSection} from './types';
import {getColor, isValidColor} from '@utils/functions';
import cn from 'classnames';
import classes from './styles.module.scss';

export const KitSection: FunctionComponent<PropsWithChildren<IKitSection>> = ({
    className,
    style,
    borderColor = 'primary',
    children
}) => {
    const getCustomColor = (): CSSProperties | undefined => {
        if (borderColor === 'primary') {
            return {
                '--section-border-color': 'var(--general-utilities-main-default)'
            } as CSSProperties;
        }

        if (!borderColor || !isValidColor(borderColor)) {
            return;
        }
        return {
            '--section-border-color': getColor(borderColor)
        } as CSSProperties;
    };

    return (
        <section className={cn(className, classes.borderSection)} style={{...getCustomColor(), ...style}}>
            {children}
        </section>
    );
};
