import React, {CSSProperties, FunctionComponent, useMemo} from 'react';
import {Avatar as AntdAvatar} from 'antd';
import {IKitAvatar} from './types';
import {styled} from 'styled-components';
import {useKitTheme} from '@theme/theme-context';
import {getColor, getContrastColor, getLighterColor, isSecondaryColor, isValidColor} from '@utils/functions';
import {kitAvatarCssTokens} from '@theme/aristid/components/DataDisplay/Avatar';
import {kitColorsPaletteCssTokens} from '@theme/aristid/general/colors';

const StyledAntdAvatar = styled(AntdAvatar)`
    &:not(.ant-avatar-image) {
        background: var(
            ${kitAvatarCssTokens.colors.background.default},
            var(${kitColorsPaletteCssTokens.neutral.black60})
        );
        color: var(
            ${kitAvatarCssTokens.colors.typography.default},
            var(${kitColorsPaletteCssTokens.neutral.typography.white})
        );
    }
`;

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

const KitAvatar: FunctionComponent<IKitAvatar> = ({
    color,
    className,
    style,
    secondaryColorInvert = false,
    ...avatarProps
}) => {
    const {appId} = useKitTheme();

    const customStyle = useMemo(
        () => ({...style, ...getCustomColors(color, secondaryColorInvert)}),
        [color, secondaryColorInvert, style]
    );

    return <StyledAntdAvatar style={customStyle} className={`${appId} ${className ?? ''}`} {...avatarProps} />;
};

KitAvatar.displayName = 'KitAvatar';

export default KitAvatar;
