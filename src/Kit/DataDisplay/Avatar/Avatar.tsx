import React, {FunctionComponent, useMemo} from 'react';
import {Avatar as AntdAvatar} from 'antd';
import {IKitAvatar, IStyledKitAvatar} from './types';
import {styled} from 'styled-components';
import {useKitTheme} from '@theme/theme-context';
import {getColor, getContrastColor, getLighterColor, isValidColor} from '@utils/functions';

const StyledAntdAvatar = styled(AntdAvatar)<IStyledKitAvatar>`
    &:not(.ant-avatar-image) {
        background: ${({$backgroundColor}) => $backgroundColor};
        color: ${({$iconColor}) => $iconColor};
    }
`;

const KitAvatar: FunctionComponent<IKitAvatar> = ({color, secondaryColorInvert = false, ...avatarProps}) => {
    const {theme} = useKitTheme();

    const calculatedIconColor = useMemo(() => {
        if (!color || !isValidColor(theme.general.colors, color)) {
            return theme.components.Avatar.colors.typography.default;
        }

        if (Object.keys(theme.general.colors.secondary).indexOf(color) > -1) {
            return getLighterColor(theme.general.colors, color, secondaryColorInvert);
        }

        return getContrastColor(theme.general.colors, color);
    }, [color, secondaryColorInvert, theme]);

    const calculatedBackgroundColor = useMemo(() => {
        if (!color || !isValidColor(theme.general.colors, color)) {
            return theme.components.Avatar.colors.background.default;
        }

        if (Object.keys(theme.general.colors.secondary).indexOf(color) > -1) {
            return getColor(theme.general.colors, color, secondaryColorInvert);
        }

        return getColor(theme.general.colors, color);
    }, [color, secondaryColorInvert, theme]);

    return (
        <StyledAntdAvatar
            $theme={theme.components.Avatar}
            $backgroundColor={calculatedBackgroundColor}
            $iconColor={calculatedIconColor}
            {...avatarProps}
        />
    );
};

KitAvatar.displayName = 'KitAvatar';

export default KitAvatar;
