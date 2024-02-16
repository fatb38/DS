import React, {FunctionComponent} from 'react';
import {IKitInputWrapper} from './types';
import {KitTypography} from '@kit/General/';
import {useKitTheme} from '@theme/useKitTheme';
import cn from 'classnames';

import styles from './styles.module.scss';

const KitInputWrapper: FunctionComponent<IKitInputWrapper> = ({
    label,
    helper,
    disabled,
    status,
    bordered,
    className,
    children
}) => {
    const {appId} = useKitTheme();

    const _wrapperClassName = cn(styles['kit-input-wrapper'], appId, className ?? '', {
        disabled: disabled,
        bordered: bordered,
        error: status === 'error',
        warning: status === 'warning'
    });

    return (
        <div className={_wrapperClassName}>
            {label && (
                <div className="kit-input-wrapper-label">
                    <KitTypography.Text size="large" weight="medium">
                        {label}
                    </KitTypography.Text>
                </div>
            )}
            <div className="kit-input-wrapper-content">{children}</div>
            {helper && (
                <div className="kit-input-wrapper-helper">
                    <KitTypography.Text size="small" weight="regular">
                        * {helper}
                    </KitTypography.Text>
                </div>
            )}
        </div>
    );
};

export default KitInputWrapper;
