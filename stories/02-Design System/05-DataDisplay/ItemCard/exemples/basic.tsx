import React from 'react';
import {KitItemCard, KitImage} from '@kit/DataDisplay/';

const App = () => {
    return (
        <KitItemCard
            title="Tondeuse à gazon"
            description="Tondeuse thermique Auto tractée 70 VL 55 TH"
            extrainfo="550.00€"
            picture={<KitImage src="images/tondeuse.png" />}
        />
    );
};

export default App;
