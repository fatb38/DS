import React from 'react';
import {KitTag} from '@kit/DataEntry/';
import {KitSpace} from '@kit/Layout/';

const App = ({}) => {
    return (
        <KitSpace>
            <KitTag>Default</KitTag>
            <KitTag color="red">Red</KitTag>
            <KitTag color="green">Green</KitTag>
            <KitTag color="blue">Blue</KitTag>
            <KitTag color="blueInvert">Blue invert</KitTag>
        </KitSpace>
    );
};

export default App;
