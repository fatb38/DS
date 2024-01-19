import React from 'react';
import {KitLegacyCard} from '@kit/DataDisplay';
import {KitSpace} from '@kit/Layout';

const App = () => {
    return (
        <KitSpace direction="vertical">
            <KitLegacyCard
                separator={true}
                title="Card title"
                contentTitle="Content Title"
                contentDescription="Les promotions de mai démarrent bientôt. Pensez à télécharger vos PLV."
            />

            <KitLegacyCard
                separator={true}
                title="Card title"
                cover={<img alt="example" src="/public/images/free-copyright.jpeg" />}
            />
        </KitSpace>
    );
};

export default App;
