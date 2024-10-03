import {FunctionComponent} from 'react';
import {KitTypography} from '@kit/General';
import {KitRichText} from '@kit/DataEntry';

const value = '<p>Text with <strong>bold</strong> and <u>underline</u> characters</p>';

export const ReadOnlyRichTextTest: FunctionComponent = () => (
    <div>
        <KitTypography.Title level="h3">Readonly</KitTypography.Title>
        <div style={{display: 'flex', gap: '10px'}}>
            <KitRichText label="Label" value={value} readonly />
        </div>
        <KitTypography.Title level="h3">Readonly (with status)</KitTypography.Title>
        <div style={{display: 'flex', gap: '10px'}}>
            <KitRichText label="Label" value={value} status="warning" readonly />
            <KitRichText label="Label" value={value} status="error" readonly />
        </div>
    </div>
);
