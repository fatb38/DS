import React from 'react';
import {KitCard, KitImage} from '@kit/DataDisplay/';
import {KitSpace} from '@kit/Layout';

const App = () => {
    return (
        <KitSpace direction="vertical">
            <KitCard
                title="Tondeuse à gazon"
                description="Tondeuse thermique Auto tractée 70 VL 55 TH"
                extrainfo="550.00€"
                picture={<KitImage src="images/tondeuse.png" />}
                colors={[
                    {label: 'test', color: '#00D9A9'},
                    {label: 'toto', color: '#009876'}
                ]}
            />
            <KitCard
                vertical
                title="Tondeuse à gazon"
                description="Tondeuse thermique Auto tractée 70 VL 55 TH"
                extrainfo="550.00€"
                picture={<KitImage src="images/tondeuse.png" />}
                colors={[
                    {label: 'test', color: '#00D9A9'},
                    {label: 'toto', color: '#009876'}
                ]}
            />
        </KitSpace>
    );
};

export default App;
