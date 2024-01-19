import React, {FC} from 'react';
import {KitIcon, KitTypography} from '@kit/General';
import {KitAvatar, KitBadge} from '@kit/DataDisplay';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faClock} from '@fortawesome/free-regular-svg-icons';

export const BasicBadgeTest: FC = () => (
    <div>
        <KitTypography.Title level="h3">Basic badge</KitTypography.Title>
        <div style={{display: 'flex', gap: '20px', margin: '20px 0 60px'}}>
            <KitBadge count={5}>
                <KitAvatar shape="square" size="large" />
            </KitBadge>
            <KitBadge count={0} showZero>
                <KitAvatar shape="square" size="large" />
            </KitBadge>
            <KitBadge count={<KitIcon icon={<FontAwesomeIcon icon={faClock} />} color="red" />}>
                <KitAvatar shape="square" size="large" />
            </KitBadge>
            <KitBadge count={99}>
                <KitAvatar shape="square" size="large" />
            </KitBadge>
            <KitBadge count={100}>
                <KitAvatar shape="square" size="large" />
            </KitBadge>
            <KitBadge count={99} overflowCount={10}>
                <KitAvatar shape="square" size="large" />
            </KitBadge>
            <KitBadge count={1000} overflowCount={999}>
                <KitAvatar shape="square" size="large" />
            </KitBadge>
        </div>
    </div>
);
