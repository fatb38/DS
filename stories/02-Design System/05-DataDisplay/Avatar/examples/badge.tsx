import React from 'react';
import {KitAvatar, KitBadge} from '@kit/DataDisplay/';
import {KitSpace} from '@kit/Layout/';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-regular-svg-icons';

const App = () => {
    return (
        <KitSpace size={24}>
            <KitBadge count={1}>
                <KitAvatar shape="square" icon={<FontAwesomeIcon icon={faUser} />} />
            </KitBadge>
            <KitBadge dot>
                <KitAvatar shape="square" icon={<FontAwesomeIcon icon={faUser} />} />
            </KitBadge>
        </KitSpace>
    );
};

export default App;
