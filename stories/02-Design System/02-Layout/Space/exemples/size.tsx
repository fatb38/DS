import React, {useState} from 'react';
import {KitSpace, KitButton, KitRadio} from '@kit/index';
import {KitSpacing} from '@theme/types/general/spacing';

const App = () => {
    const [size, setSize] = useState('m');

    return (
        <>
            <KitRadio.Group value={size} onChange={e => setSize(e.target.value)}>
                <KitRadio value="none">None</KitRadio>
                <KitRadio value="xxs">xxs</KitRadio>
                <KitRadio value="xs">xs</KitRadio>
                <KitRadio value="s">s</KitRadio>
                <KitRadio value="m">m</KitRadio>
                <KitRadio value="l">l</KitRadio>
                <KitRadio value="xl">xl</KitRadio>
                <KitRadio value="xxl">xxl</KitRadio>
                <KitRadio value="huge">huge</KitRadio>
                <KitRadio value="veryHuge">veryHuge</KitRadio>
            </KitRadio.Group>
            <br />
            <br />
            <KitSpace size={size as keyof KitSpacing}>
                <KitButton type="primary">Primary</KitButton>
                <KitButton>Default</KitButton>
                <KitButton type="link">Link</KitButton>
            </KitSpace>
        </>
    );
};

export default App;
