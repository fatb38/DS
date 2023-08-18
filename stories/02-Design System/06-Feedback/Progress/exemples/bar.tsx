import React from 'react';
import {KitProgress} from '@kit/index';

const App = ({}) => {
    return (
        <>
            <KitProgress percent={30} />
            <KitProgress percent={50} status="active" />
            <KitProgress percent={70} status="exception" />
            <KitProgress percent={100} />
            <KitProgress percent={50} showInfo={false} />
        </>
    );
};

export default App;
