import React from 'react';
import {KitSpace} from '@kit/Layout';
import {KitAvatar, KitItemList} from '@kit/DataDisplay';

const App = () => {
    const title = 'Tondeuse à gazon';
    const description = 'Tondeuse thermique Auto tractée 70 VL 55 TH';
    const avatar = <KitAvatar label={'TG'} />;

    return (
        <KitSpace direction="vertical" size="m">
            <div style={{width: '550px', display: 'flex', flexDirection: 'column', gap: '10px'}}>
                <KitItemList idCardProps={{title}} />
                <KitItemList idCardProps={{title, description}} />
                <KitItemList idCardProps={{title, description, avatar}} />
            </div>
        </KitSpace>
    );
};

export default App;
