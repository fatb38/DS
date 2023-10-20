import React from 'react';
import {KitRate} from '@kit/DataEntry';
import {KitSpace} from '@kit/Layout';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHeart} from '@fortawesome/free-regular-svg-icons';

const App = () => {
    return (
        <KitSpace direction="vertical">
            <KitRate character={<FontAwesomeIcon icon={faHeart} />} allowHalf />
            <KitRate character="A" allowHalf style={{fontSize: 36}} />
            <KitRate character="好" allowHalf />
        </KitSpace>
    );
};

export default App;
