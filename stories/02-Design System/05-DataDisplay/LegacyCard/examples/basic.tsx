import React from 'react';
import {KitLegacyCard} from '@kit/DataDisplay';

const App = () => {
    return (
        <KitLegacyCard
            title="Card Title"
            contentTitle="Promos mai"
            contentDescription="Les promotions de mai démarrent bientôt. Pensez à télécharger vos PLV."
            cover={<img alt="example" src="public/images/free-copyright.jpeg" />}
        />
    );
};

export default App;
