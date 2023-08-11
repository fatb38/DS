import React, { useState } from 'react';
import { KitButton } from "@kit/General/";
import { KitSpace } from "@kit/Layout/";
import { KitRadio } from '@kit/DataEntry';

const App= ({}) => {
    const [size, setSize] = useState('small');

    return (
        <>
        <KitRadio.Group value={size} onChange={(e) => setSize(e.target.value)}>
            <KitRadio value="small">Small</KitRadio>
            <KitRadio value="middle">Middle</KitRadio>
            <KitRadio value="large">Large</KitRadio>
        </KitRadio.Group>
        <br />
        <br />
        <KitSpace size={size}>
            <KitButton type="primary">Primary</KitButton>
            <KitButton>Default</KitButton>
            <KitButton type="link">Link</KitButton>
        </KitSpace>
        </>
    );
};

export default App;