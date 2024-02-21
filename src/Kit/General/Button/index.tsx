import React, {
    ForwardRefRenderFunction,
    LegacyRef,
    ReactElement,
    ReactNode,
    cloneElement,
    forwardRef,
    useEffect,
    useMemo,
    useState
} from 'react';
import LoadingOutlined from '@ant-design/icons/LoadingOutlined';
import type {IKitButton, KitButtonCompoundedComponent, loadingConfig, loadingType} from './types';
import {useKitTheme} from '@theme/useKitTheme';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircleCheck} from '@fortawesome/free-solid-svg-icons';
import useSecureClick from '@hooks/useSecureClick';
import cn from 'classnames';

import styles from './styles.module.scss';
import {IKitIcon} from '../Icon/types';

const _getIconElement = (icon): ReactNode | null => {
    if (!icon) {
        return null;
    }

    const props = (icon as ReactElement).props as IKitIcon;
    return cloneElement(icon as ReactElement, {
        className: (props?.className ?? '') + ' kit-btn-icon'
    });
};

const _getLoadingConfig = (loading: loadingType): loadingConfig => {
    if (typeof loading === 'object' && loading) {
        let delay = loading?.delay;
        delay = !Number.isNaN(delay) && typeof delay === 'number' ? delay : 0;
        return {
            loading: delay <= 0,
            delay
        };
    }

    return {
        loading: !!loading,
        delay: 0
    };
};

const Button: ForwardRefRenderFunction<HTMLButtonElement | HTMLAnchorElement, IKitButton> = (
    {
        iconSize,
        primaryModal,
        type = 'secondary',
        checked,
        active,
        loading: internalLoading = false,
        icon,
        danger,
        color,
        block,
        className,
        onClick,
        disableSecureClick,
        children,
        disabled,
        ...props
    },
    ref
) => {
    const {appId} = useKitTheme();
    const [loading, setLoading] = useState(false);

    const loadingOrDelay = useMemo<loadingConfig>(() => _getLoadingConfig(internalLoading), [internalLoading]);

    const secureClick = useSecureClick(onClick);

    const iconOnly = !children && icon;

    const clx = cn(appId, styles['kit-btn'], className, {
        [`kit-btn-${type}`]: !primaryModal && type,
        ['kit-btn-primaryModal']: primaryModal,
        ['kit-btn-danger']: danger,
        ['kit-btn-block']: block,
        ['kit-btn-segmented-active']: active,
        [`icon-${iconSize ?? 'm'}`]: iconSize,
        [`kit-btn-icon-only`]: iconOnly,
        [`kit-btn-color-${color}`]: color
    });

    const BtnIcon = _getIconElement(icon);

    useEffect(() => {
        let delayTimer: ReturnType<typeof setTimeout> | null = null;

        if (loadingOrDelay.delay > 0) {
            delayTimer = setTimeout(() => {
                delayTimer = null;
                setLoading(true);
            }, loadingOrDelay.delay);
        } else {
            setLoading(loadingOrDelay.loading);
        }

        function cleanupTimer() {
            if (delayTimer) {
                clearTimeout(delayTimer);
                delayTimer = null;
            }
        }

        return cleanupTimer;
    }, [internalLoading, loadingOrDelay]);

    return (
        <button
            onClick={disableSecureClick ? onClick : secureClick}
            disabled={disabled}
            ref={ref as LegacyRef<HTMLButtonElement>}
            {...props}
            className={clx}
        >
            {loading ? <LoadingOutlined className="kit-btn-icon" /> : BtnIcon}
            {children}
            {type === 'segmented' && checked && (
                <FontAwesomeIcon icon={faCircleCheck} className="kit-btn-segmented-actived-icon" />
            )}
        </button>
    );
};

export const KitButton = forwardRef<HTMLButtonElement | HTMLAnchorElement, IKitButton>(
    Button
) as KitButtonCompoundedComponent;

KitButton.displayName = 'KitButton';
