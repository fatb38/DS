import {FunctionComponent} from 'react';
import {KitTypography} from '@kit/General';
import {KitRichText} from '@kit/DataEntry';

export const LabelAndHelperRichTextTest: FunctionComponent = () => (
    <div>
        <KitTypography.Title level="h3">Label and Helper</KitTypography.Title>
        <div style={{display: 'flex', gap: '10px'}}>
            <KitRichText placeholder="Placeholder..." label="Label" helper="Helper" showCount maxLength={100} />
            <KitRichText
                placeholder="Placeholder..."
                label="Label"
                helper="Helper"
                showCount
                maxLength={100}
                disabled
            />
        </div>
        <KitTypography.Title level="h3">Label and Helper (with status)</KitTypography.Title>
        <div style={{display: 'flex', gap: '10px'}}>
            <KitRichText
                placeholder="Placeholder..."
                label="Label"
                helper="Helper"
                showCount
                maxLength={100}
                status="warning"
            />
            <KitRichText
                placeholder="Placeholder..."
                label="Label"
                helper="Helper"
                showCount
                maxLength={100}
                status="error"
            />
        </div>
    </div>
);
