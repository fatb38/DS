import React from 'react';
import {KitRate} from '@kit/DataEntry';
import {KitSpace} from '@kit/Layout';

const App = () => {
    return (
        <KitSpace direction="vertical">
            <KitSpace>
                <KitRate disabled defaultValue={2} />
            </KitSpace>
            <KitSpace style={{backgroundColor: 'lightBlue'}}>
                <KitRate disabled defaultValue={2} disabledStarTransparency="lightBlue" />
            </KitSpace>
        </KitSpace>
    );
};

export default App;
