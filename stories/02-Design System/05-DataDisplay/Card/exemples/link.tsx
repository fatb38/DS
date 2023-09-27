import React from 'react';
import {KitCard} from '@kit/DataDisplay';
import {KitSpace} from '@kit/Layout';

const App = () => {
    return (
        <KitSpace direction="vertical">
            <KitCard
                onContentTitleClick={() => console.log('Redirect')}
                contentTitle="Content Title"
                contentDescription="Les promotions de mai démarrent bientôt. Pensez à télécharger vos PLV."
            />
            <KitCard
                onContentTitleClick={() => console.log('Redirect')}
                contentDescription="Les promotions de mai démarrent bientôt. Pensez à télécharger vos PLV."
            />
        </KitSpace>
    );
};

export default App;
