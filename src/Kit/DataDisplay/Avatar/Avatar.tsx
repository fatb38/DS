import React from 'react';
import {Avatar as AntdAvatar} from 'antd';
import {KitAvatarProps, KitAvatarColorType} from './types';
import {css, styled} from 'styled-components';
import {useKitTheme} from '@theme/theme-context';
import {IKitAvatarTheme} from '@theme/types/components/DataDisplay/Avatar';
import colorString from 'color-string';

export const getContrastColor = (color, light, dark) => {
    let rgb = colorString.get.rgb(color);
    let yiq = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;

    return yiq < 128 ? light : dark;
};

const StyledAntdAvatar = styled(AntdAvatar)<{
    $theme: IKitAvatarTheme;
    $color: KitAvatarColorType;
}>`
    &:not(.ant-avatar-image) {
        ${({$color, $theme}) => {
            switch ($color) {
                case 'default':
                    return css`
                        background: ${$theme.colors.background.default};
                        color: ${$theme.colors.typography.default};
                    `;
                case 'blueInvert':
                    return css`
                        background: ${$theme.colors.background.blueInvert};
                        color: ${$theme.colors.typography.blueInvert};
                    `;
                default:
                    return css`
                        background: ${$color};
                        color: ${getContrastColor(
                            $color,
                            $theme.colors.typography.default,
                            $theme.colors.typography.dark
                        )};
                    `;
            }
        }}
    }
`;

const KitAvatar: React.FunctionComponent<KitAvatarProps> = ({color = 'default', ...avatarProps}) => {
    const {theme} = useKitTheme();
    return <StyledAntdAvatar $theme={theme.components.Avatar} $color={color} {...avatarProps} />;
};

KitAvatar.displayName = 'KitAvatar';

export default KitAvatar;
