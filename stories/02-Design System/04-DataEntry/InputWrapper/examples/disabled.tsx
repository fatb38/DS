import React from 'react';
import {KitSpace} from '@kit/Layout/';
import {KitInputWrapper} from '@kit/DataEntry/';
import {KitTypography} from '@kit/General';

const App = () => (
        <KitSpace direction="vertical" size={24}>
            <KitInputWrapper bordered label="label" helper="helper" disabled>
                <KitTypography.Text>Bordered Component to wrap</KitTypography.Text>
            </KitInputWrapper>
            <KitInputWrapper label="label" helper="helper" disabled>
                <KitTypography.Text>Component to wrap</KitTypography.Text>
            </KitInputWrapper>
        </KitSpace>
    );

export default App;
