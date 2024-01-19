import React from 'react';
import {KitLegacyCard} from '@kit/DataDisplay';
import {KitSpace} from '@kit/Layout';

const App = () => {
    return (
        <KitSpace direction="vertical">
            <KitLegacyCard
                onContentTitleClick={() => console.log('Redirect')}
                contentTitle="Content Title"
                contentDescription="Les promotions de mai démarrent bientôt. Pensez à télécharger vos PLV."
            />
            <KitLegacyCard
                onContentTitleClick={() => console.log('Redirect')}
                contentDescription="Les promotions de mai démarrent bientôt. Pensez à télécharger vos PLV."
            />
        </KitSpace>
    );
};

export default App;
