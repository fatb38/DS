import React from 'react';
import {KitIcon, KitSpace} from '@kit/index';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faDownload} from '@fortawesome/free-solid-svg-icons';

const App = () => {
    return (
        <KitSpace>
            <KitIcon icon={<FontAwesomeIcon icon={faDownload} />} hoverable />
            <KitIcon icon={<FontAwesomeIcon icon={faDownload} />} hoverable on />
        </KitSpace>
    );
};

export default App;
