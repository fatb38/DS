import React from 'react';
import {KitProgress} from '@kit/index';

const App = () => (
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

export default App;
