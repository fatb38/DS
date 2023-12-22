import React from 'react';
import {KitGrid} from '@kit/Layout/';
import {IKitCol, IKitRow} from '@kit/Layout/Grid/types';

interface IFakeGrid extends IKitRow, IKitCol {}

export const FakeGrid: React.FunctionComponent<IFakeGrid> = () => null;

export const Template = () => {
    const {Row, Col} = KitGrid;
    return (
        <Row>
            <Col span={6}>
                <div className="col-demo odd">col-1</div>
            </Col>
            <Col span={6}>
                <div className="col-demo">col-2</div>
            </Col>
            <Col span={6}>
                <div className="col-demo odd">col-3</div>
            </Col>
            <Col span={6}>
                <div className="col-demo">col-4</div>
            </Col>
        </Row>
    );
};
