import React from 'react';
import {KitAlert} from '@kit/index';

const App = () => {
    return (
        <>
            <KitAlert type="warning" message="Warning Text" closable />
            <br />
            <KitAlert type="error" message="Error Text" closable />
        </>
    );
};

export default App;
