import React from 'react';
import {KitItemCard, KitImage} from '@kit/DataDisplay/';

const App = () => (
        <KitItemCard
            title="Tondeuse à gazon"
            description="Tondeuse thermique Auto tractée 70 VL 55 TH"
            extrainfo="550.00€"
            picture={<KitImage src="public/images/tondeuse.png" />}
        />
    );

export default App;
