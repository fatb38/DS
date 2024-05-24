import React from 'react';
import {KitItemCard} from '@kit/DataDisplay/';
import {KitSpace} from '@kit/Layout';
import {KitIcon} from '@kit/General';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFaceSmile} from '@fortawesome/free-regular-svg-icons';

const App = () => (
        <KitSpace direction="vertical">
            <KitItemCard
                title="Tondeuse à gazon"
                description="Tondeuse thermique Auto tractée 70 VL 55 TH"
                extrainfo="550.00€"
                picture={<KitIcon icon={<FontAwesomeIcon icon={faFaceSmile} />} />}
            />
            <KitItemCard
                vertical
                title="Tondeuse à gazon"
                description="Tondeuse thermique Auto tractée 70 VL 55 TH"
                extrainfo="550.00€"
                picture={<KitIcon icon={<FontAwesomeIcon icon={faFaceSmile} />} />}
            />
        </KitSpace>
    );

export default App;
