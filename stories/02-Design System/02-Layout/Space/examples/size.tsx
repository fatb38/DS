import React, {useState} from 'react';
import {KitSpace, KitButton, KitRadio, KitTypography} from '@kit/index';
import {IKitSpace, KitSpaceSize} from '@kit/Layout/Space/types';
import {RadioChangeEvent} from 'antd';

const App = () => {
    const [size, setSize] = useState<IKitSpace['size']>('m');

    return (
        <>
            <KitRadio.Group value={size} onChange={(e: RadioChangeEvent) => setSize(e.target.value as KitSpaceSize)}>
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
            <KitSpace size={size}>
                <KitButton type="primary">Primary</KitButton>
                <KitButton>Default</KitButton>
                <KitTypography.Link>Link</KitTypography.Link>
            </KitSpace>
        </>
    );
};

export default App;
