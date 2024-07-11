import React, {FunctionComponent, ReactNode, cloneElement, useMemo} from 'react';
import {IKitInputWrapper} from './types';
import {KitButton, KitTypography} from '@kit/General/';
import {useKitTheme} from '@theme/useKitTheme';
import cn from 'classnames';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircleInfo, faTriangleExclamation, faCircleXmark} from '@fortawesome/free-solid-svg-icons';

import styles from './styles.module.scss';

const KitInputWrapper: FunctionComponent<IKitInputWrapper> = ({
    label,
    helper,
    disabled,
    status,
    bordered,
    required,
    infoIcon,
    onInfoClick,
    actions,
    className,
    children
}) => {
    const {appId} = useKitTheme();

    const _wrapperClassName = cn(styles['kit-input-wrapper'], appId, className ?? '', {
        disabled,
        bordered,
        error: status === 'error',
        warning: status === 'warning'
    });

    const getFontAwesomeIcon = () => {
        if (status === 'warning') {
            return faTriangleExclamation;
        }
        if (status === 'error') {
            return faCircleXmark;
        }
        return faCircleInfo;
    };

    const _infoIcon: ReactNode = infoIcon ?? <FontAwesomeIcon icon={getFontAwesomeIcon()} />;

    const _actions = useMemo(() => {
        if (!disabled) {
            return actions;
        }
        return actions
            ? actions.map(action =>
                  cloneElement(action, {
                      disabled: true
                  })
              )
            : null;
    }, [disabled, actions]);

    const shouldRenderWrapperHeader = Boolean(label || required || onInfoClick || _actions);

    return (
        <div className={_wrapperClassName}>
            {shouldRenderWrapperHeader && (
                <div className="kit-input-wrapper-label">
                    <KitTypography.Text size="large" weight="medium">
                        {label}
                    </KitTypography.Text>
                    {required && <span className="kit-input-wrapper-required">*</span>}
                    {onInfoClick && (
                        <KitButton
                            className="kit-input-wrapper-info"
                            type="text"
                            color="black"
                            disabled={disabled}
                            icon={_infoIcon}
                            onClick={onInfoClick}
                        />
                    )}
                    <div className="kit-input-wrapper-actions">{_actions}</div>
                </div>
            )}
            <div className="kit-input-wrapper-content">{children}</div>
            {helper && (
                <div className="kit-input-wrapper-helper">
                    <KitTypography.Text size="small" weight="regular" ellipsis={{tooltip: true}}>
                        {_infoIcon} {helper}
                    </KitTypography.Text>
                </div>
            )}
        </div>
    );
};

export default KitInputWrapper;
