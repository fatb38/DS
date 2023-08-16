import React from 'react';
import {KitProgress, KitSpace} from '@kit/index';

const App = ({}) => {
    return (
        <>
            <KitProgress
                type="circle"
                trailColor="#e6f4ff"
                percent={60}
                strokeWidth={20}
                size={14}
                format={number => `processing, finished ${number}%`}
            />
            <span style={{marginLeft: 8}}>Freeing code</span>
        </>
    );
};

export default App;
