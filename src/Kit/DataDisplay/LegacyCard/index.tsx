import React, {CSSProperties, FunctionComponent, ReactElement, ReactNode, cloneElement} from 'react';
import {Card as AntdCard} from 'antd';
import cn from 'classnames';
import IKitLegacyCard from './types';
import {KitIcon, KitTypography} from '@kit/General';
import {KitSpace} from '@kit/Layout';
import {useKitTheme} from '@theme/useKitTheme';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLink} from '@fortawesome/free-solid-svg-icons';

import styles from './styles.module.scss';

const _getCover = (cover?: ReactNode) => {
    let cardCover: null | ReactElement = null;

    if (cover) {
        const customCover = cover as ReactElement;
        cardCover = cloneElement(customCover, {
            className: `kit-card-cover ${(customCover.props as HTMLElement).className ?? ''}`
        });
    }

    return cardCover;
};

const _getActions = (disabled: boolean, actions?: ReactNode[]) => {
    if (disabled && actions) {
        return actions?.reduce<ReactNode[]>((acc, action) => {
            const customAction = action as ReactElement;
            const disabledAction = cloneElement(customAction, {
                onClick: undefined
            });
            acc.push(disabledAction);
            return acc;
        }, []);
    }
    return actions;
};

const _getExtra = (disabled: boolean, extra?: ReactNode) => {
    let cardExtra: null | ReactElement = null;

    if (extra) {
        const customExtra = extra as ReactElement;
        cardExtra = cloneElement(customExtra, {
            className: `kit-card-extra ${(customExtra.props as HTMLElement).className ?? ''}`,
            href: disabled ? null : (customExtra.props as HTMLAnchorElement).href
        });
    }

    return cardExtra;
};

export const KitLegacyCard: FunctionComponent<IKitLegacyCard> = ({
    style,
    cover,
    extra,
    contentTitle,
    contentDescription,
    actions,
    onContentTitleClick,
    className,
    separator = false,
    disabled = false,
    ...props
}) => {
    const {appId} = useKitTheme();

    const customStyle: CSSProperties = {
        width: style?.width ?? '340px'
    };

    const clx = cn(appId, styles['kit-legacy-card'], className ?? '', {
        disabled,
        separator
    });

    return (
        <AntdCard
            {...props}
            className={clx}
            style={customStyle}
            extra={_getExtra(disabled, extra)}
            cover={_getCover(cover)}
            bodyStyle={contentTitle || contentDescription ? {} : {padding: 0, height: 0}}
            actions={_getActions(disabled, actions)}
        >
            <KitSpace direction="vertical">
                {(contentTitle || onContentTitleClick) && (
                    <div
                        className={`content-title-container ${onContentTitleClick ? 'content-title-click' : ''}`}
                        onClick={disabled ? undefined : onContentTitleClick}
                    >
                        {onContentTitleClick && (
                            <KitIcon className="kit-card-content-title-icon" icon={<FontAwesomeIcon icon={faLink} />} />
                        )}
                        {contentTitle && (
                            <KitTypography.Text className="card-content-title">{contentTitle}</KitTypography.Text>
                        )}
                    </div>
                )}
                {contentDescription && (
                    <KitTypography.Text className="card-content-description">{contentDescription}</KitTypography.Text>
                )}
            </KitSpace>
        </AntdCard>
    );
};

KitLegacyCard.displayName = 'KitLegacyCard';
