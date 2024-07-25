import {FunctionComponent} from 'react';
import {Avatar as AntdAvatar} from 'antd';
import {IKitAvatarGroup} from './types';
import {useKitTheme} from '@theme/useKitTheme';
import cn from 'classnames';

import styles from './styles.module.scss';

const KitAvatarGroup: FunctionComponent<IKitAvatarGroup> = ({className, disabled, maxCount, ...avatarGroupProps}) => {
    const {appId} = useKitTheme();

    const clx = cn(appId, styles['kit-avatar-group'], className, {
        ['override-last']: maxCount,
        [styles['kit-avatar-group-disabled']]: disabled
    });

    return (
        <AntdAvatar.Group
            {...avatarGroupProps}
            maxCount={maxCount}
            className={clx}
            maxStyle={{
                cursor: avatarGroupProps.maxPopoverTrigger === 'click' ? 'pointer' : 'initial'
            }}
        />
    );
};

export default KitAvatarGroup;
