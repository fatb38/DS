import React from 'react';
import {KitCard} from '@kit/DataDisplay/';
import {KitSpace} from '@kit/Layout';
import {KitIcon} from '@kit/General';
import {AntDesignOutlined} from '@ant-design/icons';

const App = () => {
    return (
        <KitSpace direction="vertical">
            <KitCard
                title="Tondeuse à gazon"
                description="Tondeuse thermique Auto tractée 70 VL 55 TH"
                extrainfo="550.00€"
                picture={<KitIcon icon={<AntDesignOutlined />} />}
            />
            <KitCard
                vertical
                title="Tondeuse à gazon"
                description="Tondeuse thermique Auto tractée 70 VL 55 TH"
                extrainfo="550.00€"
                picture={<KitIcon icon={<AntDesignOutlined />} />}
            />
        </KitSpace>
    );
};

export default App;
