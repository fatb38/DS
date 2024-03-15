import React, {FunctionComponent} from 'react';
import {KitTypography} from '@kit/General';
import {KitAvatar} from '@kit/DataDisplay';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-regular-svg-icons';

export const BasicAndTypeAvatarTest: FunctionComponent = () => {
    const url = 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg';

    return (
        <div>
            <KitTypography.Title level="h3">Basic and types avatar</KitTypography.Title>
            <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
                <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                    <KitAvatar size="small" icon={<FontAwesomeIcon icon={faUser} />} />
                    <KitAvatar icon={<FontAwesomeIcon icon={faUser} />} />
                    <KitAvatar size="large" icon={<FontAwesomeIcon icon={faUser} />} />
                    <KitAvatar size={64} icon={<FontAwesomeIcon icon={faUser} />} />
                </div>
                <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                    <KitAvatar shape="square" size="small" icon={<FontAwesomeIcon icon={faUser} />} />
                    <KitAvatar shape="square" icon={<FontAwesomeIcon icon={faUser} />} />
                    <KitAvatar shape="square" size="large" icon={<FontAwesomeIcon icon={faUser} />} />
                    <KitAvatar shape="square" size={64} icon={<FontAwesomeIcon icon={faUser} />} />
                </div>
                <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                    <KitAvatar size="small">U</KitAvatar>
                    <KitAvatar>U</KitAvatar>
                    <KitAvatar size="large">U</KitAvatar>
                    <KitAvatar size={64}>U</KitAvatar>
                </div>
                <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                    <KitAvatar size="small">User</KitAvatar>
                    <KitAvatar>User</KitAvatar>
                    <KitAvatar size="large">User</KitAvatar>
                    <KitAvatar size={64}>User</KitAvatar>
                </div>
                <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                    <KitAvatar size="small" src={url} />
                    <KitAvatar src={url} />
                    <KitAvatar size="large" src={url} />
                    <KitAvatar size={64} src={url} />
                </div>
                <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                    <KitAvatar size="small" label="John Doe" />
                    <KitAvatar label="John Doe" />
                    <KitAvatar size="large" label="John Doe" />
                    <KitAvatar size={64} label="John Doe" />
                </div>
            </div>
        </div>
    );
};
