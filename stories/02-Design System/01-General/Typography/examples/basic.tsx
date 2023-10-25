import React from 'react';
import {KitTypography, KitSpace} from '@kit/index';

const App = () => {
    return (
        <KitSpace direction="vertical">
            <KitTypography.Title>h1. Aristid Design</KitTypography.Title>
            <KitTypography.Title level="h2">h2. Aristid Design</KitTypography.Title>
            <KitTypography.Title level="h3">h3. Aristid Design</KitTypography.Title>
            <KitTypography.Title level="h4">h4. Aristid Design</KitTypography.Title>
        </KitSpace>
    );
};

export default App;
