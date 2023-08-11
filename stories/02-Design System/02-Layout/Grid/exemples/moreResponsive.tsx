import React, { Fragment } from 'react';
import { KitGrid } from "@kit/Layout/";

const App= ({}) => {
    return (
        <Fragment>
            <KitGrid.Row>
                <KitGrid.Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                    <div className="col-demo odd">Col</div>
                </KitGrid.Col>
                <KitGrid.Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                    <div className="col-demo">Col</div>
                </KitGrid.Col>
                <KitGrid.Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                    <div className="col-demo odd">Col</div>
                </KitGrid.Col>
            </KitGrid.Row>
        </Fragment>
    );
};

export default App;