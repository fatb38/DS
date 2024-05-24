import React from 'react';
import {KitMenu} from '@kit/Navigation';
import {KitSpace} from '@kit/Layout/';

const App = () => (
        <div style={{width: '100%', padding: '5px', background: 'lightgrey'}}>
            <KitSpace direction="vertical" style={{width: '400px'}}>
                <KitMenu title="View options" />
                <KitMenu title="View options" onCloseClick={() => console.log('on click close')} />
            </KitSpace>
        </div>
    );

export default App;
