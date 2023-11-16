import React from 'react';
import {KitGrid} from '@kit/index';

const App = () => {
    return (
        <>
            <KitGrid.Row>
                <KitGrid.Col span={18} push={6}>
                    <div className="col-demo odd">col-18 col-push-6</div>
                </KitGrid.Col>
                <KitGrid.Col span={6} pull={18}>
                    <div className="col-demo">col-6 col-pull-18</div>
                </KitGrid.Col>
            </KitGrid.Row>
        </>
    );
};

export default App;
