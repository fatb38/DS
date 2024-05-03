import React from 'react';
import {KitProgress, KitSpace} from '@kit/index';

const App = () => (
        <>
            <KitSpace direction="vertical">
                <KitProgress percent={50} />
                <KitProgress percent={50} size="small" />
                <KitProgress percent={50} size={[300, 20]} />
            </KitSpace>
            <br />
            <br />
            <KitSpace size={30}>
                <KitProgress type="circle" percent={50} />
                <KitProgress type="circle" percent={50} size="small" />
                <KitProgress type="circle" percent={50} size={20} />
            </KitSpace>
            <br />
            <br />
            <KitSpace size={30}>
                <KitProgress type="dashboard" percent={50} />
                <KitProgress type="dashboard" percent={50} size="small" />
                <KitProgress type="dashboard" percent={50} size={20} />
            </KitSpace>
            <br />
            <br />
            <KitSpace size={30} wrap>
                <KitProgress steps={3} percent={50} />
                <KitProgress steps={3} percent={50} size="small" />
                <KitProgress steps={3} percent={50} size={20} />
                <KitProgress steps={3} percent={50} size={[20, 30]} />
            </KitSpace>
        </>
    );

export default App;
