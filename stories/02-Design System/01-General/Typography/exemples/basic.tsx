import React from 'react';
import { KitTypography } from "@kit/General/";
import { KitSpace } from "@kit/Layout/";

const App= ({}) => {
    return (
        <KitSpace direction="vertical">
            <KitTypography.Title>h1. Aristid Design</KitTypography.Title>
            <KitTypography.Title level={2}>h2. Aristid Design</KitTypography.Title>
            <KitTypography.Title level={3}>h3. Aristid Design</KitTypography.Title>
            <KitTypography.Title level={4}>h4. Aristid Design</KitTypography.Title>
            <KitTypography.Title level={5}>h5. Aristid Design</KitTypography.Title>
            <KitTypography.Title level={6}>h6. Aristid Design</KitTypography.Title>
            <KitTypography.Title level={7}>h7. Aristid Design</KitTypography.Title>
        </KitSpace>
    );
};

export default App;