import React from 'react';
import {KitBadge} from '@kit/DataDisplay/';
import {KitSpace} from '@kit/Layout/';
import {KitButton} from '@kit/General';

const App = () => {
    return (
        <KitSpace direction="vertical">
            <KitSpace direction="vertical">
                <KitBadge dot status="success">
                    Success
                </KitBadge>
                <KitBadge dot status="error">
                    Error
                </KitBadge>
                <KitBadge dot status="default">
                    Default
                </KitBadge>
                <KitBadge dot status="processing">
                    Processing
                </KitBadge>
                <KitBadge dot status="warning">
                    Warning
                </KitBadge>
            </KitSpace>
            <br />
            <KitSpace>
                <KitBadge dot status="success">
                    <KitButton type="link">Link</KitButton>
                </KitBadge>
                <KitBadge dot status="error">
                    <KitButton type="link">Link</KitButton>
                </KitBadge>
                <KitBadge dot status="default">
                    <KitButton type="link">Link</KitButton>
                </KitBadge>
                <KitBadge dot status="processing">
                    <KitButton type="link">Link</KitButton>
                </KitBadge>
                <KitBadge dot status="warning">
                    <KitButton type="link">Link</KitButton>
                </KitBadge>
            </KitSpace>
        </KitSpace>
    );
};

export default App;
