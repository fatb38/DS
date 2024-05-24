import React from 'react';
import {KitAvatar, KitItemCard} from '@kit/DataDisplay/';
import {KitSpace} from '@kit/Layout';

const App = () => (
        <KitSpace>
            <KitSpace direction="vertical">
                <KitItemCard
                    title="Tondeuse à gazon"
                    description="Tondeuse thermique Auto tractée 70 VL 55 TH"
                    extrainfo="550.00€"
                    picture={<KitAvatar>G</KitAvatar>}
                />
                <KitItemCard
                    vertical
                    title="Tondeuse à gazon"
                    description="Tondeuse thermique Auto tractée 70 VL 55 TH"
                    extrainfo="550.00€"
                    picture={<KitAvatar>G</KitAvatar>}
                />
            </KitSpace>
            <KitSpace direction="vertical">
                <KitItemCard
                    fullWidthAvatar
                    title="Tondeuse à gazon"
                    description="Tondeuse thermique Auto tractée 70 VL 55 TH"
                    extrainfo="550.00€"
                    picture={<KitAvatar>G</KitAvatar>}
                />
                <KitItemCard
                    fullWidthAvatar
                    vertical
                    title="Tondeuse à gazon"
                    description="Tondeuse thermique Auto tractée 70 VL 55 TH"
                    extrainfo="550.00€"
                    picture={<KitAvatar>G</KitAvatar>}
                />
            </KitSpace>
        </KitSpace>
    );

export default App;
