import React from 'react';
import {KitAvatar} from '@kit/DataDisplay/';
import {KitSpace} from '@kit/Layout/';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-regular-svg-icons';

const App = () => {
    const url = 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg';

    return (
        <KitSpace direction="vertical" size={16}>
            <KitSpace wrap size={16}>
                <KitAvatar size="small" icon={<FontAwesomeIcon icon={faUser} />} />
                <KitAvatar icon={<FontAwesomeIcon icon={faUser} />} />
                <KitAvatar size="large" icon={<FontAwesomeIcon icon={faUser} />} />
            </KitSpace>
            <KitSpace wrap size={16}>
                <KitAvatar size="small">U</KitAvatar>
                <KitAvatar>U</KitAvatar>
                <KitAvatar size="large">U</KitAvatar>
            </KitSpace>
            <KitSpace wrap size={16}>
                <KitAvatar size="small">User</KitAvatar>
                <KitAvatar>User</KitAvatar>
                <KitAvatar size="large">User</KitAvatar>
            </KitSpace>
            <KitSpace wrap size={16}>
                <KitAvatar size="small" src={url} />
                <KitAvatar src={url} />
                <KitAvatar size="large" src={url} />
            </KitSpace>
        </KitSpace>
    );
};

export default App;
