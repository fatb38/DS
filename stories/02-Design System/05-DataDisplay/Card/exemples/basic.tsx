import React from 'react';
import {KitCard, KitImage} from '@kit/DataDisplay/';

const App = () => {
    return (
        <KitCard
            title="Tondeuse à gazon"
            description="Tondeuse thermique Auto tractée 70 VL 55 TH"
            extrainfo="550.00€"
            picture={<KitImage src="images/tondeuse.png" />}
        />
    );
};

export default App;
