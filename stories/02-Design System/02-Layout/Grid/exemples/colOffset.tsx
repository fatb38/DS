import React, {Fragment} from 'react';
import {KitGrid} from '@kit/index';

const App = ({}) => {
    return (
        <Fragment>
            <KitGrid.Row>
                <KitGrid.Col span={8}>
                    <div className="col-demo odd">col-8</div>
                </KitGrid.Col>
                <KitGrid.Col span={8} offset={8}>
                    <div className="col-demo">col-8 offset-8</div>
                </KitGrid.Col>
            </KitGrid.Row>
            <KitGrid.Row>
                <KitGrid.Col span={6} offset={6}>
                    <div className="col-demo odd">col-6 offset-6</div>
                </KitGrid.Col>
                <KitGrid.Col span={6} offset={6}>
                    <div className="col-demo">col-6 offeset-6</div>
                </KitGrid.Col>
            </KitGrid.Row>
            <KitGrid.Row>
                <KitGrid.Col span={12} offset={6}>
                    <div className="col-demo">col-12 offset-6</div>
                </KitGrid.Col>
            </KitGrid.Row>
        </Fragment>
    );
};

export default App;
