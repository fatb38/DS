import React, {FC} from 'react';
import {KitTypography} from '@kit/General';
import {KitInput} from '@kit/DataEntry';

export const CountingInputTest: FC = () => (
    <div>
        <KitTypography.Title level="h3">Character counting input</KitTypography.Title>
        <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
            <div style={{display: 'flex', gap: '10px'}}>
                <KitInput placeholder="Input" defaultValue="Default" showCount maxLength={20} />
                <KitInput placeholder="Input" defaultValue="Default" showCount maxLength={20} disabled />
            </div>

            <div style={{display: 'flex', gap: '10px'}}>
                <KitInput.Password defaultValue="Default" showCount maxLength={10} />
                <KitInput.Password defaultValue="Default" showCount maxLength={10} disabled />
            </div>

            <div style={{display: 'flex', gap: '10px', marginBottom: '15px'}}>
                <KitInput.TextArea placeholder="TextArea" defaultValue="Default" showCount maxLength={120} />
                <KitInput.TextArea placeholder="TextArea" defaultValue="Default" showCount maxLength={120} disabled />
            </div>
        </div>
    </div>
);
