import {FunctionComponent} from 'react';
import {KitTypography} from '@kit/General';
import {KitRichText} from '@kit/DataEntry';

export const CharacterCountRichTextTest: FunctionComponent = () => (
    <div>
        <KitTypography.Title level="h3">Character count richText</KitTypography.Title>
        <div style={{display: 'flex', gap: '10px'}}>
            <KitRichText placeholder="Placeholder..." showCount />
            <KitRichText placeholder="Placeholder..." defaultValue="<p>Default Value</p>" showCount maxLength={100} />
        </div>
    </div>
);
