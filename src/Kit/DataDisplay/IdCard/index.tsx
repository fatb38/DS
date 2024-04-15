import React from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';
import {FunctionComponent} from 'react';
import {useKitTheme} from '@theme/useKitTheme';
import {IKitIdCard} from './types';
import {KitTypography} from '@kit/General';
import KitAvatar from '../Avatar/Avatar';

const _getTitle = (title: IKitIdCard['title'], cardSize: IKitIdCard['size'], disabled: boolean) => {
    const clx = cn({'kit-id-card-title-large': cardSize === 'large'});

    return (
        <KitTypography.Text className={clx} size="large" weight="bold" ellipsis={{tooltip: true}} disabled={disabled}>
            {title}
        </KitTypography.Text>
    );
};

const _getDescription = (description: IKitIdCard['description'], cardSize: IKitIdCard['size'], disabled: boolean) => {
    const textSize = cardSize === 'medium' ? 'small' : 'large';

    return (
        <KitTypography.Text size={textSize} ellipsis={{tooltip: true}} disabled={disabled}>
            {description}
        </KitTypography.Text>
    );
};

export const KitIdCard: FunctionComponent<IKitIdCard> = ({
    className,
    title,
    description,
    avatarProps,
    size = 'medium',
    disabled = false,
    ...idCardProps
}) => {
    const {appId} = useKitTheme();

    const clx = cn(appId, styles['kit-id-card'], className);

    const shouldDisplayAvatar = avatarProps !== undefined;
    const shouldDisplayTitle = title !== undefined;
    const shouldDisplayDescription = description !== undefined;
    const shouldDisplayInfo = shouldDisplayTitle || shouldDisplayDescription;

    return (
        <div className={`${clx} id-card-grid`} {...idCardProps}>
            {shouldDisplayAvatar && (
                <div className="card-avatar">
                    <KitAvatar {...avatarProps} disabled={disabled} />
                </div>
            )}
            {shouldDisplayInfo && (
                <div className="card-info">
                    {shouldDisplayTitle && _getTitle(title, size, disabled)}
                    {shouldDisplayDescription && _getDescription(description, size, disabled)}
                </div>
            )}
        </div>
    );
};

KitIdCard.displayName = 'KitIdCard';
