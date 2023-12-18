import React, {FunctionComponent} from 'react';
import {Avatar as AntdAvatar} from 'antd';
import {IKitAvatarGroup} from './types';
import {useKitTheme} from '@theme/useKitTheme';
import styled, {css} from 'styled-components';
import {kitAvatarGroupCssTokens} from '@theme/aristid/components/DataDisplay/Avatar';
import {kitColorsPaletteCssTokens} from '@theme/aristid/general/colors';

const StyledAntdAvatarGroup = styled(AntdAvatar.Group)<{$shouldOverrideLastAvatarStyle: boolean}>`
    ${({$shouldOverrideLastAvatarStyle}) =>
        $shouldOverrideLastAvatarStyle
            ? css`
                  &.ant-avatar-group > span:last-child {
                      background: var(
                          ${kitAvatarGroupCssTokens.colors.background.default},
                          var(${kitColorsPaletteCssTokens.primary.primary100})
                      );
                      color: var(
                          ${kitAvatarGroupCssTokens.colors.typography.default},
                          var(
                              ${kitAvatarGroupCssTokens.colors.background.default},
                              var(${kitColorsPaletteCssTokens.primary.primary200})
                          )
                      );
                  }
              `
            : undefined}
`;

const KitAvatarGroup: FunctionComponent<IKitAvatarGroup> = ({className, maxCount, ...avatarGroupProps}) => {
    const {appId} = useKitTheme();

    return (
        <StyledAntdAvatarGroup
            {...avatarGroupProps}
            maxCount={maxCount}
            $shouldOverrideLastAvatarStyle={!!maxCount}
            className={`${appId} ${className ?? ''}`}
            maxStyle={{
                cursor: avatarGroupProps.maxPopoverTrigger === 'click' ? 'pointer' : 'initial'
            }}
        />
    );
};

export default KitAvatarGroup;
