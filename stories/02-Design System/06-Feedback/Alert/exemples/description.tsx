import React from 'react';
import {KitAlert} from '@kit/index';

const App = ({}) => {
    return (
        <>
            <KitAlert
                type="success"
                message="Success Text"
                description="Success Description Success Description Success Description"
            />
            <br />
            <KitAlert
                type="info"
                message="Info Text"
                description="Info Description Info Description Info Description Info Description"
            />
            <br />
            <KitAlert
                type="warning"
                message="Warning Text"
                description="Warning Description Warning Description Warning Description Warning Description"
            />
            <br />
            <KitAlert
                type="error"
                message="Error Text"
                description="Error Description Error Description Error Description Error Description"
            />
        </>
    );
};

export default App;
