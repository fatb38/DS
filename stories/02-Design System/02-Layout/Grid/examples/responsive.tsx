import React from 'react';
import {KitGrid} from '@kit/index';

const App = () => (
        <KitGrid.Row>
            <KitGrid.Col xs={2} sm={4} md={6} lg={8} xl={10}>
                <div className="col-demo odd">Col</div>
            </KitGrid.Col>
            <KitGrid.Col xs={20} sm={16} md={12} lg={8} xl={4}>
                <div className="col-demo">Col</div>
            </KitGrid.Col>
            <KitGrid.Col xs={2} sm={4} md={6} lg={8} xl={10}>
                <div className="col-demo odd">Col</div>
            </KitGrid.Col>
        </KitGrid.Row>
    );

export default App;
