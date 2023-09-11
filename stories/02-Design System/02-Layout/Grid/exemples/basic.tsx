import React from 'react';
import {KitGrid} from '@kit/index';

const App = () => {
    return (
        <>
            <KitGrid.Row>
                <KitGrid.Col span={24}>
                    <div className="col-demo odd">col</div>
                </KitGrid.Col>
            </KitGrid.Row>
            <KitGrid.Row>
                <KitGrid.Col span={12}>
                    <div className="col-demo odd">col-12</div>
                </KitGrid.Col>
                <KitGrid.Col span={12}>
                    <div className="col-demo">col-12</div>
                </KitGrid.Col>
            </KitGrid.Row>
            <KitGrid.Row>
                <KitGrid.Col span={8}>
                    <div className="col-demo odd">col-8</div>
                </KitGrid.Col>
                <KitGrid.Col span={8}>
                    <div className="col-demo">col-8</div>
                </KitGrid.Col>
                <KitGrid.Col span={8}>
                    <div className="col-demo odd">col-8</div>
                </KitGrid.Col>
            </KitGrid.Row>
            <KitGrid.Row>
                <KitGrid.Col span={6}>
                    <div className="col-demo odd">col-6</div>
                </KitGrid.Col>
                <KitGrid.Col span={6}>
                    <div className="col-demo">col-6</div>
                </KitGrid.Col>
                <KitGrid.Col span={6}>
                    <div className="col-demo odd">col-6</div>
                </KitGrid.Col>
                <KitGrid.Col span={6}>
                    <div className="col-demo">col-6</div>
                </KitGrid.Col>
            </KitGrid.Row>
        </>
    );
};

export default App;
