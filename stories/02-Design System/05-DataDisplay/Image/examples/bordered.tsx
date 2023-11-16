import React from 'react';
import {KitImage} from '@kit/DataDisplay';

const App = () => {
    return (
        <KitImage
            bordered
            rounded
            width={200}
            src='public/images/portrait.png'
        />
    );
};

export default App;
