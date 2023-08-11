import React, { Fragment } from 'react';
import { KitDivider, KitGrid } from "@kit/Layout/";

const App= ({}) => {
    return (
        <Fragment>
            <KitDivider orientation="left">sub-element align left</KitDivider>
            <KitGrid.Row justify="start">
                <KitGrid.Col span={4}>
                    <div className="col-demo odd">col-4</div>
                </KitGrid.Col>
                <KitGrid.Col span={4}>
                    <div className="col-demo">col-4</div>
                </KitGrid.Col>
                <KitGrid.Col span={4}>
                    <div className="col-demo odd">col-4</div>
                </KitGrid.Col>
                <KitGrid.Col span={4}>
                    <div className="col-demo">col-4</div>
                </KitGrid.Col>
            </KitGrid.Row>
            <KitDivider orientation="left">sub-element align center</KitDivider>
            <KitGrid.Row justify="center">
                <KitGrid.Col span={4}>
                    <div className="col-demo odd">col-4</div>
                </KitGrid.Col>
                <KitGrid.Col span={4}>
                    <div className="col-demo">col-4</div>
                </KitGrid.Col>
                <KitGrid.Col span={4}>
                    <div className="col-demo odd">col-4</div>
                </KitGrid.Col>
                <KitGrid.Col span={4}>
                    <div className="col-demo">col-4</div>
                </KitGrid.Col>
            </KitGrid.Row>
            <KitDivider orientation="left">sub-element align right</KitDivider>
            <KitGrid.Row justify="end">
                <KitGrid.Col span={4}>
                    <div className="col-demo odd">col-4</div>
                </KitGrid.Col>
                <KitGrid.Col span={4}>
                    <div className="col-demo">col-4</div>
                </KitGrid.Col>
                <KitGrid.Col span={4}>
                    <div className="col-demo odd">col-4</div>
                </KitGrid.Col>
                <KitGrid.Col span={4}>
                    <div className="col-demo">col-4</div>
                </KitGrid.Col>
            </KitGrid.Row>
        </Fragment>
    );
};

export default App;