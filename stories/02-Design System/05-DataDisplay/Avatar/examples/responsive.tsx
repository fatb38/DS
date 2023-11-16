import React from 'react';
import {KitAvatar} from '@kit/DataDisplay/';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faImage} from '@fortawesome/free-regular-svg-icons';

const App = () => {
    return (
        <KitAvatar
            size={{xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100}}
            icon={<FontAwesomeIcon icon={faImage} />}
        />
    );
};

export default App;
