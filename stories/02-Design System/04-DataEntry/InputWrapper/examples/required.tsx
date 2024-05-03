import React from 'react';
import {KitSpace} from '@kit/Layout/';
import {KitInputWrapper} from '@kit/DataEntry/';
import {KitTypography} from '@kit/General';

const App = () => (
        <KitSpace direction="vertical" size={24}>
            <KitInputWrapper bordered label="required" helper="helper" required>
                <KitTypography.Text>Required Component to wrap</KitTypography.Text>
            </KitInputWrapper>
            <KitInputWrapper bordered disabled label="required" helper="helper" required>
                <KitTypography.Text>Disabled Required Component to wrap</KitTypography.Text>
            </KitInputWrapper>
            <KitInputWrapper bordered helper="helper" required>
                <KitTypography.Text>Required Component to wrap withour label</KitTypography.Text>
            </KitInputWrapper>
        </KitSpace>
    );

export default App;
