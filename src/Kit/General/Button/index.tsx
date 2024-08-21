import {
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
import {faArrowRight, faCircleCheck} from '@fortawesome/free-solid-svg-icons';
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
        dangerModal,
        type = 'secondary',
        htmlType = 'button',
        checked,
        active,
        href,
        target,
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

    // TODO: Remove in the next major version  (v10.0.0). Do not forget to remove the type in KitButtonType
    if (type === 'text') {
        console.warn('Button type `text` is deprecated, please use `tertiary` instead');
    }

    const clx = cn(appId, styles['kit-btn'], className, {
        [`kit-btn-${type}`]: !dangerModal && type,
        [`kit-btn-secondary`]: dangerModal || type === 'secondary',
        ['kit-btn-disabled']: disabled,
        ['kit-btn-danger-modal']: dangerModal,
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

    const Component = type === 'link' || type === 'redirect' ? 'a' : 'button';
    const linkProps = {
        href: type === 'link' || type === 'redirect' ? href : undefined,
        target: type === 'link' || type === 'redirect' ? target : undefined,
        tabIndex: 0
    };

    return (
        <Component
            onClick={disableSecureClick ? onClick : secureClick}
            disabled={disabled}
            {...linkProps}
            ref={ref as LegacyRef<HTMLButtonElement & HTMLAnchorElement>}
            type={htmlType}
            {...props}
            className={clx}
        >
            {loading ? <LoadingOutlined className="kit-btn-icon" /> : BtnIcon}
            {children}
            {type === 'redirect' && <FontAwesomeIcon icon={faArrowRight} className="kit-btn-icon-redirect" />}
            {type === 'segmented' && checked && (
                <FontAwesomeIcon icon={faCircleCheck} className="kit-btn-segmented-actived-icon" />
            )}
        </Component>
    );
};

export const KitButton = forwardRef<HTMLButtonElement | HTMLAnchorElement, IKitButton>(
    Button
) as KitButtonCompoundedComponent;

KitButton.displayName = 'KitButton';
