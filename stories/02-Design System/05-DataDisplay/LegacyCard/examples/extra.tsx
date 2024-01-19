import React from 'react';
import {KitLegacyCard} from '@kit/DataDisplay';
import KitLink from '@kit/General/Typography/Link';

const App = () => {
    return (
        <KitLegacyCard
            title="Card Title"
            extra={<KitLink href="#">More</KitLink>}
            cover={<img alt="example" src="public/images/free-copyright.jpeg" />}
        />
    );
};

export default App;
