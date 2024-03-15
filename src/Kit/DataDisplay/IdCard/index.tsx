import React from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';
import {FunctionComponent} from 'react';
import {useKitTheme} from '@theme/useKitTheme';
import {IKitIdCard} from './types';
import {KitTypography} from '@kit/General';

const _getTitle = (title: IKitIdCard['title'], cardSize: IKitIdCard['size']) => {
    const clx = cn({'kit-id-card-title-large': cardSize === 'large'});

    return (
        <KitTypography.Text className={clx} size="large" weight="bold">
            {title}
        </KitTypography.Text>
    );
};

const _getDescription = (description: IKitIdCard['description'], cardSize: IKitIdCard['size']) => {
    const textSize = cardSize === 'medium' ? 'small' : 'large';

    return <KitTypography.Text size={textSize}>{description}</KitTypography.Text>;
};

export const KitIdCard: FunctionComponent<IKitIdCard> = ({
    className,
    title,
    description,
    avatar,
    size = 'medium',
    ...idCardProps
}) => {
    const {appId} = useKitTheme();

    const clx = cn(appId, styles['kit-id-card'], className);

    const shouldDisplayAvatar = avatar !== undefined;
    const shouldDisplayTitle = title !== undefined;
    const shouldDisplayDescription = description !== undefined;
    const shouldDisplayInfo = shouldDisplayTitle || shouldDisplayDescription;

    return (
        <div className={`${clx} id-card-grid`} {...idCardProps}>
            {shouldDisplayAvatar && <div className="card-avatar">{avatar}</div>}
            {shouldDisplayInfo && (
                <div className="card-info">
                    {shouldDisplayTitle && _getTitle(title, size)}
                    {shouldDisplayDescription && _getDescription(description, size)}
                </div>
            )}
        </div>
    );
};

KitIdCard.displayName = 'KitIdCard';
