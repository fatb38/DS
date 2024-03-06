import React from 'react';
import {KitSpace} from '@kit/Layout/';
import {KitInputWrapper} from '@kit/DataEntry/';
import {KitButton, KitTypography} from '@kit/General';

const App = () => {
    return (
        <KitSpace direction="vertical" size={24}>
            <KitInputWrapper
                label="actions"
                actions={[<KitButton type="text">action</KitButton>, <KitButton type="text">action 2</KitButton>]}
            >
                <KitTypography.Text>Component to wrap with actions</KitTypography.Text>
            </KitInputWrapper>
            <KitInputWrapper
                actions={[<KitButton type="text">action</KitButton>, <KitButton type="text">action 2</KitButton>]}
            >
                <KitTypography.Text>Component to wrap with actions</KitTypography.Text>
            </KitInputWrapper>
            <KitInputWrapper
                disabled
                actions={[<KitButton type="text">action</KitButton>, <KitButton type="text">action 2</KitButton>]}
            >
                <KitTypography.Text>Disabled Component to wrap with actions</KitTypography.Text>
            </KitInputWrapper>
        </KitSpace>
    );
};

export default App;
