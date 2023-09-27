import React from 'react';
import {KitCard} from '@kit/DataDisplay';
import {KitSpace} from '@kit/Layout';

const App = () => {
    return (
        <KitSpace direction="vertical">
            <KitCard
                separator={true}
                title="Card title"
                contentTitle="Content Title"
                contentDescription="Les promotions de mai démarrent bientôt. Pensez à télécharger vos PLV."
            />

            <KitCard
                separator={true}
                title="Card title"
                cover={<img alt="example" src="/public/images/free-copyright.jpeg" />}
            />
        </KitSpace>
    );
};

export default App;
