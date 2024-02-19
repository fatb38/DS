import React, {ForwardRefRenderFunction, forwardRef} from 'react';
import {Button as AntdButton} from 'antd';
import type {IKitButton, KitButtonCompoundedComponent} from './types';
import {ButtonType} from 'antd/lib/button';
import {useKitTheme} from '@theme/useKitTheme';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircleCheck} from '@fortawesome/free-solid-svg-icons';
import useSecureClick from '@hooks/useSecureClick';
import cn from 'classnames';

import styles from './styles.module.scss';

const Button: ForwardRefRenderFunction<HTMLButtonElement | HTMLAnchorElement, IKitButton> = (
    {
        iconSize,
        primaryModal,
        type,
        segmentedChecked,
        segmentedActived,
        segmentedColor,
        textColor,
        className,
        wrapperClassName,
        wrapperStyle,
        onClick,
        disableSecureClick,
        children,
        ...props
    },
    ref
) => {
    const {appId} = useKitTheme();

    const secureClick = useSecureClick(onClick);

    // const _getButtonCssTokens = () => {
    //     if (primaryModal) {
    //         return {
    //             custom: kitButtonCssTokens.primary,
    //             default: kitButtonDefaultCssTokens.primary
    //         };
    //     }

    //     switch (type) {
    //         case 'primary':
    //             return {
    //                 custom: kitButtonCssTokens.primary,
    //                 default: kitButtonDefaultCssTokens.primary
    //             };
    //         case 'link':
    //             return {
    //                 custom: kitButtonCssTokens.link,
    //                 default: kitButtonDefaultCssTokens.link
    //             };
    //         case 'text':
    //             return !textColor
    //                 ? {
    //                       custom: kitButtonCssTokens.text.default,
    //                       default: kitButtonDefaultCssTokens.text.default
    //                   }
    //                 : {
    //                       custom: kitButtonCssTokens.text[textColor],
    //                       default: kitButtonDefaultCssTokens.text[textColor]
    //                   };
    //         case 'segmented':
    //             return !segmentedColor
    //                 ? {
    //                       custom: kitButtonCssTokens.segmented.default,
    //                       default: kitButtonDefaultCssTokens.segmented.default
    //                   }
    //                 : {
    //                       custom: kitButtonCssTokens.segmented[segmentedColor],
    //                       default: kitButtonDefaultCssTokens.segmented[segmentedColor]
    //                   };
    //         case 'default':
    //         default:
    //             return {
    //                 custom: kitButtonCssTokens.default,
    //                 default: kitButtonDefaultCssTokens.default
    //             };
    //     }
    // };

    const _getAntdType = (): ButtonType => {
        if (primaryModal) {
            return 'primary';
        }

        switch (type) {
            case 'segmented':
            default:
                return 'default';
            case 'primary':
            case 'link':
            case 'text':
            case 'default':
                return type;
        }
    };

    const clx = cn(appId, styles['kit-btn'], className, `kit-btn-${type ?? 'default'}`, {
        // 'kit-btn-segmented': type === 'segmented',
        [`kit-btn-${textColor ?? 'default'}`]: type === 'text',
        [`kit-btn-${segmentedColor ?? 'default'}`]: type === 'segmented' && !props.danger,
        ['ant-btn-icon-only']: !children && children !== 0 && !props.loading && props.icon,
        [`icon-${iconSize ?? 'm'}`]: iconSize,
        'kit-btn-segmented-actived': segmentedActived
    });

    return (
        <div
            className={wrapperClassName ?? ''}
            style={{
                position: 'relative',
                display: 'inline-block',
                ...wrapperStyle
            }}
        >
            <AntdButton
                {...props}
                className={clx}
                ghost={primaryModal}
                type={_getAntdType()}
                onClick={disableSecureClick ? onClick : secureClick}
                ref={ref}
            >
                {children}
                {type === 'segmented' && segmentedChecked && (
                    <FontAwesomeIcon icon={faCircleCheck} className="kit-btn-segmented-actived-icon" />
                )}
            </AntdButton>
        </div>
    );
};

export const KitButton = forwardRef<HTMLButtonElement | HTMLAnchorElement, IKitButton>(
    Button
) as KitButtonCompoundedComponent;

KitButton.displayName = 'KitButton';
