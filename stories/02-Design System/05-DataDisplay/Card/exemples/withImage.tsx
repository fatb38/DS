import React from 'react';
import {KitCard} from '@kit/DataDisplay';
import {KitSpace} from '@kit/Layout';
import {KitTypography} from '@kit/General';

const App = () => {
    return (
        <KitSpace direction="vertical">
            <KitTypography.Text>sideSpacing = false</KitTypography.Text>

            <KitCard
                title="Card title"
                sideSpacing={false}
                cover={<img alt="example" src="/public/images/free-copyright.jpeg" />}
            />

            <KitTypography.Text>sideSpacing = true</KitTypography.Text>

            <KitCard title="Card title" cover={<img alt="example" src="/public/images/free-copyright.jpeg" />} />
        </KitSpace>
    );
};

export default App;
