import React from 'react';
import {KitSpace} from '@kit/Layout';
import {KitImage, KitItemList} from '@kit/DataDisplay';
import {KitIcon} from '@kit/General';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-regular-svg-icons';

const App = () => {
    return (
        <KitSpace direction="vertical" size="m">
            <div style={{width: '350px'}}>
                <KitItemList
                    title="Tondeuse à gazon"
                    description="Tondeuse thermique Auto tractée 70 VL 55 TH"
                    picture={<KitIcon icon={<FontAwesomeIcon icon={faUser} />} />}
                />
            </div>
            <div style={{width: '350px'}}>
                <KitItemList
                    title="Tondeuse à gazon"
                    description="Tondeuse thermique Auto tractée 70 VL 55 TH"
                    picture={<KitImage src="public/images/tondeuse.png" />}
                />
            </div>
        </KitSpace>
    );
};

export default App;
