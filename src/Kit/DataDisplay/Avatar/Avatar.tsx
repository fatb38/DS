import React, {CSSProperties, FunctionComponent, PropsWithChildren, useMemo} from 'react';
import {Avatar as AntdAvatar} from 'antd';
import {IKitAvatar} from './types';
import {useKitTheme} from '@theme/useKitTheme';
import {
    getColor,
    getContrastColor,
    getInitials,
    getLighterColor,
    isSecondaryColor,
    isValidColor
} from '@utils/functions';
import {kitAvatarCssTokens} from '@theme/aristid/components/DataDisplay/Avatar';
import cn from 'classnames';

import styles from './styles.module.scss';

const getCustomColors = (
    color: IKitAvatar['color'],
    secondaryColorInvert: IKitAvatar['secondaryColorInvert']
): CSSProperties | null => {
    if (!color || !isValidColor(color)) {
        return null;
    }

    return {
        [kitAvatarCssTokens.colors.background.default]: getColor(color, secondaryColorInvert),
        [kitAvatarCssTokens.colors.typography.default]: isSecondaryColor(color)
            ? getLighterColor(color, secondaryColorInvert)
            : getContrastColor(color)
    } as CSSProperties;
};

const KitAvatar: FunctionComponent<PropsWithChildren<IKitAvatar>> = ({
    label,
    initialsMaxChars,
    color,
    className,
    style,
    secondaryColorInvert = false,
    children,
    disabled,
    imageFit = 'cover',
    ...avatarProps
}) => {
    const {appId} = useKitTheme();

    const customStyle = useMemo(
        () => ({...style, ...getCustomColors(color, secondaryColorInvert)}),
        [color, secondaryColorInvert, style]
    );

    const clx = cn(appId, styles['kit-avatar'], className, {
        'kit-avatar-image-fit-cover': imageFit === 'cover',
        'kit-avatar-image-fit-contain': imageFit === 'contain',
        'kit-avatar-image-fit-fill': imageFit === 'fill',
        [styles['kit-avatar-disabled']]: disabled
    });

    return (
        <AntdAvatar style={customStyle} className={clx} {...avatarProps}>
            {label !== undefined ? getInitials(label, initialsMaxChars) : children}
        </AntdAvatar>
    );
};

KitAvatar.displayName = 'KitAvatar';

export default KitAvatar;
