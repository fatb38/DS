import React from 'react';
import {KitBadge} from '@kit/DataDisplay/';
import {KitSpace} from '@kit/Layout/';
import {KitTypography} from '@kit/General';

const App = () => (
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
                    <KitTypography.Link>Link</KitTypography.Link>
                </KitBadge>
                <KitBadge dot status="error">
                    <KitTypography.Link>Link</KitTypography.Link>
                </KitBadge>
                <KitBadge dot status="default">
                    <KitTypography.Link>Link</KitTypography.Link>
                </KitBadge>
                <KitBadge dot status="processing">
                    <KitTypography.Link>Link</KitTypography.Link>
                </KitBadge>
                <KitBadge dot status="warning">
                    <KitTypography.Link>Link</KitTypography.Link>
                </KitBadge>
            </KitSpace>
        </KitSpace>
    );

export default App;
