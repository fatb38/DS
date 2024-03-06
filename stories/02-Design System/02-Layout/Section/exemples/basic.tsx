import {KitTypography} from '@kit/General';
import {KitSection} from '@kit/Layout';
import React from 'react';

const App = () => {
    return (
        <KitSection style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70px'}}>
            <KitTypography.Text>This a is section</KitTypography.Text>
        </KitSection>
    );
};

export default App;
