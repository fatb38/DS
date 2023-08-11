import React from 'react';
import { KitButton } from "@kit/General/";
import { KitSpace } from "@kit/Layout/";

const App= ({}) => {
    return (
        <div className="space-align-container">
            <div className="space-align-block">
            <KitSpace align="center">
                center
                <KitButton type="primary">Primary</KitButton>
                <span className="mock-block">Block</span>
            </KitSpace>
            </div>
            <div className="space-align-block">
            <KitSpace align="start">
                start
                <KitButton type="primary">Primary</KitButton>
                <span className="mock-block">Block</span>
            </KitSpace>
            </div>
            <div className="space-align-block">
            <KitSpace align="end">
                end
                <KitButton type="primary">Primary</KitButton>
                <span className="mock-block">Block</span>
            </KitSpace>
            </div>
            <div className="space-align-block">
            <KitSpace align="baseline">
                baseline
                <KitButton type="primary">Primary</KitButton>
                <span className="mock-block">Block</span>
            </KitSpace>
            </div>
        </div>
    );
};

export default App;