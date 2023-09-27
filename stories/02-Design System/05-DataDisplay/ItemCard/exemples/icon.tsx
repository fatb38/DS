import React from 'react';
import {KitItemCard} from '@kit/DataDisplay/';
import {KitSpace} from '@kit/Layout';
import {KitIcon} from '@kit/General';
import {AntDesignOutlined} from '@ant-design/icons';

const App = () => {
    return (
        <KitSpace direction="vertical">
            <KitItemCard
                title="Tondeuse à gazon"
                description="Tondeuse thermique Auto tractée 70 VL 55 TH"
                extrainfo="550.00€"
                picture={<KitIcon icon={<AntDesignOutlined />} />}
            />
            <KitItemCard
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
