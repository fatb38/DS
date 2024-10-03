import {FunctionComponent} from 'react';
import {KitTypography} from '@kit/General';
import {KitRichText} from '@kit/DataEntry';

export const DisabledRichTextTest: FunctionComponent = () => (
    <div>
        <KitTypography.Title level="h3">Disabled richText</KitTypography.Title>
        <div style={{display: 'flex', gap: '10px'}}>
            <KitRichText placeholder="Placeholder..." disabled />
            <KitRichText placeholder="Placeholder..." defaultValue="<p>Default Value</p>" disabled />
        </div>
    </div>
);
