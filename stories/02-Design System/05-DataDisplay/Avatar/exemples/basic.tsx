import React from 'react';
import {KitAvatar} from '@kit/DataDisplay/';
import {KitSpace} from '@kit/Layout/';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-regular-svg-icons';

const App = () => {
    return (
        <KitSpace direction="vertical" size={16}>
            <KitSpace wrap size={16}>
                <KitAvatar size="small" icon={<FontAwesomeIcon icon={faUser} />} />
                <KitAvatar icon={<FontAwesomeIcon icon={faUser} />} />
                <KitAvatar size="large" icon={<FontAwesomeIcon icon={faUser} />} />
                <KitAvatar size={64} icon={<FontAwesomeIcon icon={faUser} />} />
            </KitSpace>
            <KitSpace wrap size={16}>
                <KitAvatar shape="square" size="small" icon={<FontAwesomeIcon icon={faUser} />} />
                <KitAvatar shape="square" icon={<FontAwesomeIcon icon={faUser} />} />
                <KitAvatar shape="square" size="large" icon={<FontAwesomeIcon icon={faUser} />} />
                <KitAvatar shape="square" size={64} icon={<FontAwesomeIcon icon={faUser} />} />
            </KitSpace>
        </KitSpace>
    );
};

export default App;
