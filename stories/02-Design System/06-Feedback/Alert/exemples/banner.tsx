import React from 'react';
import {KitAlert} from '@kit/index';

const App = () => {
    return (
        <>
            <KitAlert type="warning" message="Warning Text" banner />
            <br />
            <KitAlert message="Very long warning text warning text text text text text text text" banner closable />
            <br />
            <KitAlert showIcon={false} message="Warning text without icon" banner />
            <br />
            <KitAlert type="error" message="Error text" banner />
        </>
    );
};

export default App;
