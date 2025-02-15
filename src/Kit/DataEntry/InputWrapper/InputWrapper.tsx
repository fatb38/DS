import {FunctionComponent, ReactNode, cloneElement, useMemo} from 'react';
import {IKitInputWrapper} from './types';
import {KitButton, KitTypography} from '@kit/General/';
import {useKitTheme} from '@theme/useKitTheme';
import cn from 'classnames';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircleInfo, faTriangleExclamation, faCircleXmark} from '@fortawesome/free-solid-svg-icons';

import styles from './styles.module.scss';

const KitInputWrapper: FunctionComponent<IKitInputWrapper> = ({
    label,
    htmlFor,
    helper,
    disabled,
    status,
    bordered,
    hoverable,
    required,
    infoIcon,
    onInfoClick,
    onFocus,
    onBlur,
    actions,
    className,
    children
}) => {
    const {appId} = useKitTheme();

    const focusable = !disabled && (onFocus !== undefined || onBlur !== undefined);

    const _wrapperClassName = cn(styles['kit-input-wrapper'], appId, className ?? '', {
        disabled,
        bordered,
        hoverable,
        focusable,
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

    const _actions = useMemo(
        () =>
            actions
                ? actions.map((action, index) =>
                      cloneElement(action, {
                          disabled: disabled,
                          key: action.key ?? index
                      })
                  )
                : null,
        [disabled, actions]
    );

    const shouldRenderWrapperHeader = Boolean(label || required || onInfoClick || _actions);

    return (
        <div className={_wrapperClassName}>
            {shouldRenderWrapperHeader && (
                <div className="kit-input-wrapper-label">
                    <label htmlFor={htmlFor}>
                        <KitTypography.Text size="fontSize5" weight="medium">
                            {label}
                        </KitTypography.Text>
                    </label>
                    {required && <span className="kit-input-wrapper-required">*</span>}
                    {onInfoClick && (
                        <KitButton
                            className="kit-input-wrapper-info"
                            type="tertiary"
                            color="black"
                            disabled={disabled}
                            icon={_infoIcon}
                            onClick={onInfoClick}
                        />
                    )}
                    <div className="kit-input-wrapper-actions">{_actions}</div>
                </div>
            )}
            <div
                className="kit-input-wrapper-content"
                tabIndex={focusable ? 0 : -1}
                onFocus={onFocus ?? undefined}
                onBlur={onBlur ?? undefined}
            >
                {children}
            </div>
            {helper && (
                <div className="kit-input-wrapper-helper">
                    <KitTypography.Text size="fontSize7" ellipsis={{tooltip: true}}>
                        {_infoIcon} {helper}
                    </KitTypography.Text>
                </div>
            )}
        </div>
    );
};

export default KitInputWrapper;
