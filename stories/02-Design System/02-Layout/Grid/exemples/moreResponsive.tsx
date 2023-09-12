import React from 'react';
import {KitGrid} from '@kit/index';

const App = () => {
    return (
        <KitGrid.Row>
            <KitGrid.Col xs={{span: 5, offset: 1}} lg={{span: 6, offset: 2}}>
                <div className="col-demo odd">Col</div>
            </KitGrid.Col>
            <KitGrid.Col xs={{span: 11, offset: 1}} lg={{span: 6, offset: 2}}>
                <div className="col-demo">Col</div>
            </KitGrid.Col>
            <KitGrid.Col xs={{span: 5, offset: 1}} lg={{span: 6, offset: 2}}>
                <div className="col-demo odd">Col</div>
            </KitGrid.Col>
        </KitGrid.Row>
    );
};

export default App;
