import React from 'react';
import {KitBadge} from '@kit/DataDisplay/';
import {KitSpace} from '@kit/Layout/';
import {KitTypography} from '@kit/General';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBell} from '@fortawesome/free-regular-svg-icons';

const App = () => {
    return (
        <KitSpace size="s">
            <KitBadge dot>
                <FontAwesomeIcon icon={faBell} style={{fontSize: 16}} />
            </KitBadge>
            <KitBadge dot>
                <KitTypography.Link>Link</KitTypography.Link>
            </KitBadge>
        </KitSpace>
    );
};

export default App;
