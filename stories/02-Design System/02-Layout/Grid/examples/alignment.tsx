import React from 'react';
import {KitDivider, KitGrid} from '@kit/index';

const App = () => (
        <>
            <KitDivider orientation="left">Align Top</KitDivider>
            <KitGrid.Row justify="center" align="top">
                <KitGrid.Col span={4}>
                    <div className="col-demo odd higher">col-4</div>
                </KitGrid.Col>
                <KitGrid.Col span={4}>
                    <div className="col-demo">col-4</div>
                </KitGrid.Col>
                <KitGrid.Col span={4}>
                    <div className="col-demo odd higher">col-4</div>
                </KitGrid.Col>
                <KitGrid.Col span={4}>
                    <div className="col-demo">col-4</div>
                </KitGrid.Col>
            </KitGrid.Row>
            <KitDivider orientation="left">Align Middle</KitDivider>
            <KitGrid.Row justify="center" align="middle">
                <KitGrid.Col span={4}>
                    <div className="col-demo odd higher">col-4</div>
                </KitGrid.Col>
                <KitGrid.Col span={4}>
                    <div className="col-demo">col-4</div>
                </KitGrid.Col>
                <KitGrid.Col span={4}>
                    <div className="col-demo odd higher">col-4</div>
                </KitGrid.Col>
                <KitGrid.Col span={4}>
                    <div className="col-demo">col-4</div>
                </KitGrid.Col>
            </KitGrid.Row>
            <KitDivider orientation="left">Align Bottom</KitDivider>
            <KitGrid.Row justify="center" align="bottom">
                <KitGrid.Col span={4}>
                    <div className="col-demo odd higher">col-4</div>
                </KitGrid.Col>
                <KitGrid.Col span={4}>
                    <div className="col-demo">col-4</div>
                </KitGrid.Col>
                <KitGrid.Col span={4}>
                    <div className="col-demo odd higher">col-4</div>
                </KitGrid.Col>
                <KitGrid.Col span={4}>
                    <div className="col-demo">col-4</div>
                </KitGrid.Col>
            </KitGrid.Row>
        </>
    );

export default App;
