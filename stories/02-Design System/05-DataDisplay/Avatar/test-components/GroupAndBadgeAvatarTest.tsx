import React, {FC} from 'react';
import {KitTypography} from '@kit/General';
import {KitAvatar, KitBadge} from '@kit/DataDisplay';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-regular-svg-icons';

export const GroupAndBadgeAvatarTest: FC = () => {
    const url = 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg';

    return (
        <div>
            <KitTypography.Title level="h3">Group avatar</KitTypography.Title>
            <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
                <div>
                    <KitTypography.Title level="h4">Default KitAvatar.Group</KitTypography.Title>
                    <KitAvatar.Group>
                        <KitAvatar src={url} />
                        <KitAvatar>K</KitAvatar>
                        <KitAvatar icon={<FontAwesomeIcon icon={faUser} />} />
                    </KitAvatar.Group>
                </div>
                <div>
                    <KitTypography.Title level="h4">KitAvatar.Group with limit</KitTypography.Title>
                    <KitAvatar.Group maxCount={2}>
                        <KitAvatar src={url} />
                        <KitAvatar>K</KitAvatar>
                        <KitAvatar icon={<FontAwesomeIcon icon={faUser} />} />
                        <KitAvatar icon={<FontAwesomeIcon icon={faUser} />} />
                    </KitAvatar.Group>
                </div>
                <KitTypography.Title level="h4">With badge</KitTypography.Title>
                <div style={{display: 'flex', gap: '20px'}}>
                    <KitBadge count={1}>
                        <KitAvatar shape="square" icon={<FontAwesomeIcon icon={faUser} />} />
                    </KitBadge>
                    <KitBadge dot>
                        <KitAvatar shape="square" icon={<FontAwesomeIcon icon={faUser} />} />
                    </KitBadge>
                </div>
            </div>
        </div>
    );
};
