import React from 'react';
import {KitLegacyCard} from '@kit/DataDisplay';

const App = () => {
    return (
        <KitLegacyCard
            title="Card title"
            cover={<img alt="example" src={'public/images/free-copyright.jpeg'} />}
            contentTitle="Content Title"
            contentDescription="Les promotions de mai démarrent bientôt. Pensez à télécharger vos PLV."
        />
    );
};

export default App;
