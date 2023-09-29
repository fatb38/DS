import React from 'react';
import {KitSpace} from '@kit/Layout';
import {KitImage, KitItemList} from '@kit/DataDisplay';
import {KitIcon} from '@kit/General';
import {UserOutlined} from '@ant-design/icons';

const App = () => {
    return (
        <KitSpace direction="vertical" size="m">
            <div style={{width: '350px'}}>
                <KitItemList
                    title="Tondeuse à gazon"
                    description="Tondeuse thermique Auto tractée 70 VL 55 TH"
                    picture={<KitIcon icon={<UserOutlined />} />}
                />
            </div>
            <div style={{width: '350px'}}>
                <KitItemList
                    title="Tondeuse à gazon"
                    description="Tondeuse thermique Auto tractée 70 VL 55 TH"
                    picture={<KitImage src="images/tondeuse.png" />}
                />
            </div>
        </KitSpace>
    );
};

export default App;
