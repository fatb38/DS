import React, {FunctionComponent} from 'react';
import {Avatar as AntdAvatar} from 'antd';
import {IKitAvatarGroup} from './types';

import {useKitTheme} from '@theme/theme-context';

const KitAvatarGroup: FunctionComponent<IKitAvatarGroup> = avatarGroupProps => {
    const {theme: kitTheme} = useKitTheme();
    const theme = kitTheme.components.AvatarGroup;
    return (
        <AntdAvatar.Group
            maxStyle={{
                background: theme.colors.background.default,
                color: theme.colors.typography.default,
                cursor: avatarGroupProps.maxPopoverTrigger === 'click' ? 'pointer' : 'initial'
            }}
            {...avatarGroupProps}
        />
    );
};

export default KitAvatarGroup;
