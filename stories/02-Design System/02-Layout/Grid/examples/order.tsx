import React from 'react';
import {KitDivider, KitGrid} from '@kit/index';

const App = () => {
    return (
        <>
            <KitDivider orientation="left">Normal</KitDivider>
            <KitGrid.Row>
                <KitGrid.Col span={6} order={4}>
                    <div className="col-demo odd">1 col-order-4</div>
                </KitGrid.Col>
                <KitGrid.Col span={6} order={3}>
                    <div className="col-demo">2 col-order-3</div>
                </KitGrid.Col>
                <KitGrid.Col span={6} order={2}>
                    <div className="col-demo odd">3 col-order-2</div>
                </KitGrid.Col>
                <KitGrid.Col span={6} order={1}>
                    <div className="col-demo">4 col-order-1</div>
                </KitGrid.Col>
            </KitGrid.Row>
            <KitDivider orientation="left">Responsive</KitDivider>
            <KitGrid.Row>
                <KitGrid.Col span={6} xs={{order: 1}} sm={{order: 2}} md={{order: 3}} lg={{order: 4}}>
                    <div className="col-demo odd">1 col-order-responsive</div>
                </KitGrid.Col>
                <KitGrid.Col span={6} xs={{order: 2}} sm={{order: 1}} md={{order: 4}} lg={{order: 3}}>
                    <div className="col-demo">2 col-order-responsive</div>
                </KitGrid.Col>
                <KitGrid.Col span={6} xs={{order: 3}} sm={{order: 4}} md={{order: 2}} lg={{order: 1}}>
                    <div className="col-demo odd">3 col-order-responsive</div>
                </KitGrid.Col>
                <KitGrid.Col span={6} xs={{order: 4}} sm={{order: 3}} md={{order: 1}} lg={{order: 2}}>
                    <div className="col-demo">4 col-order-responsive</div>
                </KitGrid.Col>
            </KitGrid.Row>
        </>
    );
};

export default App;
