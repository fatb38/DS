import React, {useState} from 'react';
import {KitTag} from '@kit/DataDisplay/';
import {KitSpace} from '@kit/Layout/';
import {KitButton} from '@kit/General/';

const App = () => {
    const [isTagVisible, setIsTagVisible] = useState(true);

    const log = e => {
        console.log(e);
        setIsTagVisible(false);
    };

    return (
        <KitSpace direction="vertical">
            <KitSpace>
                <KitTag>Tag 1</KitTag>
                {isTagVisible && <KitTag onClose={log}>Tag 2</KitTag>}
            </KitSpace>
            <br />
            <KitSpace>
                <KitButton type="primary" disableSecureClick onClick={() => setIsTagVisible(!isTagVisible)}>
                    {isTagVisible ? 'Hide Tag2' : 'Show Tag2'}
                </KitButton>
            </KitSpace>
        </KitSpace>
    );
};

export default App;
