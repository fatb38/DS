import React, {Fragment} from 'react';
import {KitDivider, KitGrid} from '@kit/index';

const App = ({}) => {
    return (
        <Fragment>
            <KitDivider orientation="left">Percentage columns</KitDivider>
            <KitGrid.Row>
                <KitGrid.Col flex={2}>
                    <div className="col-demo odd">2/5</div>
                </KitGrid.Col>
                <KitGrid.Col flex={3}>
                    <div className="col-demo">3/5</div>
                </KitGrid.Col>
            </KitGrid.Row>
            <KitDivider orientation="left">Fill reset</KitDivider>
            <KitGrid.Row>
                <KitGrid.Col flex="100px">
                    <div className="col-demo odd">100px</div>
                </KitGrid.Col>
                <KitGrid.Col flex="auto">
                    <div className="col-demo">Fill rest</div>
                </KitGrid.Col>
            </KitGrid.Row>
        </Fragment>
    );
};

export default App;
