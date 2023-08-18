import React from 'react';
import {KitInputNumber} from '@kit/DataEntry/';
import {KitSpace} from '@kit/Layout';

const App = ({}) => {
    return (
        <KitSpace>
            <KitSpace direction="vertical" style={{width: '100px'}}>
                <KitInputNumber placeholder="2" helper="Helper" label="Label" />
                <KitInputNumber prefix="￥" placeholder="2" helper="Helper" label="Label" />
                <KitInputNumber prefix="￥" placeholder="2" helper="Helper" label="Label" disabled />
                <KitInputNumber prefix="￥" placeholder="2" helper="Helper" label="Label" status="warning" />
                <KitInputNumber prefix="￥" placeholder="2" helper="Helper" label="Label" status="error" />
            </KitSpace>
        </KitSpace>
    );
};

export default App;
