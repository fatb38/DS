import React from 'react';
import {KitAvatar, KitCard} from '@kit/DataDisplay/';
import {KitSpace} from '@kit/Layout';

const App = () => {
    return (
        <KitSpace direction="vertical">
            <KitCard
                title="Tondeuse à gazon"
                description="Tondeuse thermique Auto tractée 70 VL 55 TH"
                extrainfo="550.00€"
                picture={<KitAvatar>G</KitAvatar>}
            />
            <KitCard
                vertical
                title="Tondeuse à gazon"
                description="Tondeuse thermique Auto tractée 70 VL 55 TH"
                extrainfo="550.00€"
                picture={<KitAvatar>G</KitAvatar>}
            />
        </KitSpace>
    );
};

export default App;
