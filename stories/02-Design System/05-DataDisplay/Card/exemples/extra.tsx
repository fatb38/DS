import React from 'react';
import {KitCard} from '@kit/DataDisplay/Card';
import KitLink from '@kit/General/Typography/Link';

const App = () => {
    return (
        <KitCard
            title="Card Title"
            extra={<KitLink href="#">More</KitLink>}
            cover={<img alt="example" src="public/images/free-copyright.jpeg" />}
        />
    );
};

export default App;
