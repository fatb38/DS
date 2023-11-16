import React from 'react';
import {KitSpace} from '@kit/Layout';
import {KitItemList} from '@kit/DataDisplay';

const App = () => {
    return (
        <KitSpace direction="vertical" size="m">
            <div style={{width: '350px'}}>
                <KitItemList
                    title="Tondeuse à gazon"
                    description="Tondeuse thermique Auto tractée 70 VL 55 TH"
                    tagNumber={4}
                />
            </div>
        </KitSpace>
    );
};

export default App;
