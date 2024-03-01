import React, {FunctionComponent} from 'react';
import {KitTypography} from '@kit/General';
import {KitInput} from '@kit/DataEntry';

export const TextAreaInputTest: FunctionComponent = () => (
    <div>
        <KitTypography.Title level="h3">Text Area input</KitTypography.Title>
        <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
            <div style={{display: 'flex', gap: '10px'}}>
                <KitInput.TextArea placeholder="Default" />
                <KitInput.TextArea placeholder="Disabled" disabled />
                <KitInput.TextArea placeholder="Rows is 1" rows={1} />
            </div>
            <div style={{display: 'flex', gap: '10px'}}>
                <KitInput.TextArea placeholder="Rows is 5" rows={5} />
                <KitInput.TextArea placeholder="MaxLength is 6" maxLength={6} />
            </div>
        </div>
    </div>
);
