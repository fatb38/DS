import React, {FC} from 'react';
import {KitTypography} from '@kit/General';
import {KitCard} from '@kit/DataDisplay';

export const NoImageCardTest: FC = () => (
    <div>
        <KitTypography.Title level="h3">No image card</KitTypography.Title>
        <div style={{display: 'flex', gap: '20px'}}>
            <KitCard
                separator
                title="Card title"
                contentTitle="Content Title"
                contentDescription="Les promotions de mai démarrent bientôt. Pensez à télécharger vos PLV."
            />
            <KitCard
                onContentTitleClick={() => console.log('Redirect')}
                separator
                title="Card title"
                contentTitle="Content Title"
                contentDescription="Les promotions de mai démarrent bientôt. Pensez à télécharger vos PLV."
            />
        </div>
    </div>
);
