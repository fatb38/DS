import React from 'react';
import {KitSpace} from '@kit/Layout/';
import {KitInputWrapper} from '@kit/DataEntry/';
import {KitButton, KitTypography} from '@kit/General';

const App = () => (
    <KitSpace direction="vertical" size={24}>
        <KitInputWrapper
            label="actions"
            actions={[<KitButton type="tertiary">action</KitButton>, <KitButton type="tertiary">action 2</KitButton>]}
        >
            <KitTypography.Text>Component to wrap with actions</KitTypography.Text>
        </KitInputWrapper>
        <KitInputWrapper
            actions={[<KitButton type="tertiary">action</KitButton>, <KitButton type="tertiary">action 2</KitButton>]}
        >
            <KitTypography.Text>Component to wrap with actions</KitTypography.Text>
        </KitInputWrapper>
        <KitInputWrapper
            disabled
            actions={[<KitButton type="tertiary">action</KitButton>, <KitButton type="tertiary">action 2</KitButton>]}
        >
            <KitTypography.Text>Disabled Component to wrap with actions</KitTypography.Text>
        </KitInputWrapper>
    </KitSpace>
);

export default App;
