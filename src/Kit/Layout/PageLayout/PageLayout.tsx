import {KitHeader, KitSideMenu} from '@kit/Navigation';
import {FunctionComponent, PropsWithChildren} from 'react';
import styles from './styles.module.scss';
import {IKitPageLayout} from './types';
import cn from 'classnames';

export const PageLayout: FunctionComponent<PropsWithChildren<IKitPageLayout>> = ({
    headerProps,
    sideMenuProps,
    backgroundColor = 'var(--general-colors-primary-50)',
    children
}) => (
    <div
        className={cn({
            [styles['template-with-side-menu']]: sideMenuProps,
            [styles['template-without-side-menu']]: !sideMenuProps
        })}
    >
        <KitHeader {...headerProps} className={cn(headerProps?.className, styles['pageHeader'])} />
        {sideMenuProps && <KitSideMenu {...sideMenuProps} />}
        <main style={{backgroundColor}} className={cn(styles['content'], styles['content-padding'])}>
            {children}
        </main>
    </div>
);
