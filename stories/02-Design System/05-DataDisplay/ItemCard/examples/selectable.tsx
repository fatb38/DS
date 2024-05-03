import React from 'react';
import {KitItemCard, KitImage} from '@kit/DataDisplay/';
import {KitSpace} from '@kit/Layout';

const App = () => (
        <KitSpace direction="vertical">
            <KitItemCard
                title="Tondeuse à gazon"
                description="Tondeuse thermique Auto tractée 70 VL 55 TH"
                extrainfo="550.00€"
                picture={<KitImage src="public/images/tondeuse.png" />}
                colors={[
                    {label: 'test', color: '#00D9A9'},
                    {label: 'toto', color: '#009876'}
                ]}
                onSelectChange={e => {
                    console.log(e);
                }}
            />
            <KitItemCard
                vertical
                title="Tondeuse à gazon"
                description="Tondeuse thermique Auto tractée 70 VL 55 TH"
                extrainfo="550.00€"
                picture={<KitImage src="public/images/tondeuse.png" />}
                colors={[
                    {label: 'test', color: '#00D9A9'},
                    {label: 'toto', color: '#009876'}
                ]}
                onSelectChange={e => {
                    console.log(e);
                }}
            />
        </KitSpace>
    );

export default App;
