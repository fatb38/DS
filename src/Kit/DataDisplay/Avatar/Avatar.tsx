import React from 'react';
import {Avatar as AntdAvatar} from 'antd';
import {KitAvatarProps, KitAvatarColorType} from './types';
import {css, styled} from 'styled-components';
import theme from '@theme/index';

const StyledAntdAvatar = styled(AntdAvatar)<{
    $color: KitAvatarColorType;
}>`
    &:not(.ant-avatar-image) {
        ${props => {
            switch (props.$color) {
                case 'default':
                    return css`
                        background: ${theme.color.neutral.typography.black60};
                        color: ${theme.color.neutral.typography.white};
                    `;
                case 'blueInvert':
                    return css`
                        background: ${theme.color.primary.blue100};
                        color: ${theme.color.secondary.blue.blue200};
                    `;
            }
        }}
    }
`;

const KitAvatar: React.FunctionComponent<KitAvatarProps> = ({color = 'default', ...avatarProps}) => {
    return <StyledAntdAvatar $color={color} {...avatarProps} />;
};

KitAvatar.displayName = 'KitAvatar';

export default KitAvatar;
