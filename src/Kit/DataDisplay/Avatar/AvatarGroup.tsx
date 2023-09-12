import React from 'react';
import {Avatar as AntdAvatar} from 'antd';
import {KitAvatarGroupProps} from './types';

import {useKitTheme} from '@theme/theme-context';

const KitAvatarGroup: React.FunctionComponent<KitAvatarGroupProps> = avatarGroupProps => {
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
