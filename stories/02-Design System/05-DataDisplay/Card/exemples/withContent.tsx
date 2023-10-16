import React from 'react';
import {KitCard} from '@kit/DataDisplay';

const App = () => {
    return (
        <KitCard
            title="Card title"
            cover={<img alt="example" src={'public/images/free-copyright.jpeg'} />}
            contentTitle="Content Title"
            contentDescription="Les promotions de mai démarrent bientôt. Pensez à télécharger vos PLV."
        />
    );
};

export default App;
