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
            </KitSpace>
            <KitSpace wrap size={16}>
                <KitAvatar size="small" icon={<FontAwesomeIcon icon={faUser} />} color="blueInvert" />
                <KitAvatar icon={<FontAwesomeIcon icon={faUser} />} color="blueInvert" />
                <KitAvatar size="large" icon={<FontAwesomeIcon icon={faUser} />} color="blueInvert" />
            </KitSpace>
            <KitSpace wrap size={16}>
                <KitAvatar size="small">U</KitAvatar>
                <KitAvatar>U</KitAvatar>
                <KitAvatar size="large">U</KitAvatar>
            </KitSpace>
            <KitSpace wrap size={16}>
                <KitAvatar size="small" color="blueInvert">
                    U
                </KitAvatar>
                <KitAvatar color="blueInvert">U</KitAvatar>
                <KitAvatar size="large" color="blueInvert">
                    U
                </KitAvatar>
            </KitSpace>
            <KitSpace wrap size={16}>
                <KitAvatar size="small" color="#36acaa">
                    U
                </KitAvatar>
                <KitAvatar color="#d1dfe9">U</KitAvatar>
                <KitAvatar size="large" color="#2e3438">
                    U
                </KitAvatar>
            </KitSpace>
        </KitSpace>
    );
};

export default App;
