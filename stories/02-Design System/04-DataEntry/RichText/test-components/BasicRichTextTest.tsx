import {FunctionComponent} from 'react';
import {KitTypography} from '@kit/General';
import {KitRichText} from '@kit/DataEntry';

export const BasicRichTextTest: FunctionComponent = () => (
    <div>
        <KitTypography.Title level="h3">Basic richText</KitTypography.Title>
        <div style={{display: 'flex', gap: '10px'}}>
            <KitRichText placeholder="Placeholder..." />
            <KitRichText placeholder="Placeholder..." defaultValue="<p>Default Value</p>" />
        </div>
    </div>
);
