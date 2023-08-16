import React from 'react';
import {KitProgress} from '@kit/index';

const App = ({}) => {
    return (
        <>
            <KitProgress percent={50} steps={3} />
            <br />
            <KitProgress percent={30} steps={5} />
            <br />
            <KitProgress percent={100} steps={5} size="small" strokeColor={'#389e0d'} />
            <br />
            <KitProgress percent={60} steps={5} strokeColor={['#389e0d', '#389e0d', '#f5222d']} />
        </>
    );
};

export default App;
