import React from 'react';
import {Avatar as AntdAvatar} from 'antd';
import {KitAvatarProps, KitAvatarColorType} from './types';
import {css, styled} from 'styled-components';
import {useKitTheme} from '@theme/theme-context';
import {KitAvatarTheme} from '@theme/types/components/DataDisplay/Avatar';

const StyledAntdAvatar = styled(AntdAvatar)<{
    $theme: KitAvatarTheme;
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
