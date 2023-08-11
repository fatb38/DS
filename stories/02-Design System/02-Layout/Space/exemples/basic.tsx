import React from 'react';
import { KitButton } from "@kit/General/";
import { KitSpace } from "@kit/Layout/";

const App= ({}) => {
    return (
        <KitSpace>
            <KitButton type="primary">Button</KitButton>
            <KitButton type="primary">Button 2</KitButton>
            <KitButton type="primary">Button 3</KitButton>
        </KitSpace>
    );
};

export default App;