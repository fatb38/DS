import React from 'react';
import {KitTag} from '@kit/DataEntry/';
import {KitSpace} from '@kit/Layout/';

const App = ({}) => {
    const log = e => {
        console.log(e);
    };
    const preventDefault = e => {
        e.preventDefault();
        console.log('Clicked! But prevent default.');
    };

    return (
        <KitSpace>
            <KitTag>Tag 1</KitTag>
            <KitTag closable onClose={log}>
                Tag 2
            </KitTag>
            <KitTag closable onClose={preventDefault}>
                Prevent Default
            </KitTag>
        </KitSpace>
    );
};

export default App;
