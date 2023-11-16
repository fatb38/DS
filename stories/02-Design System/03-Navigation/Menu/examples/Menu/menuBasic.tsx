import React from 'react';
import {KitMenu} from '@kit/Navigation';

const App = () => {
    return (
        <div style={{width: '100%', padding: '5px', background: 'lightgrey'}}>
            <div style={{width: '400px'}}>
                <KitMenu />
            </div>
        </div>
    );
};

export default App;
