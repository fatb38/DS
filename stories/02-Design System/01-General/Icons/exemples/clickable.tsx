import React from 'react';
import {KitIcon, KitSpace} from '@kit/index';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faDownload} from '@fortawesome/free-solid-svg-icons';

const App = () => {
    return (
        <KitSpace>
            <KitIcon icon={<FontAwesomeIcon icon={faDownload} />} onClick={() => console.log('click')} />
        </KitSpace>
    );
};

export default App;
