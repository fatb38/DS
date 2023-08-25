import React from 'react';
import {KitHeader} from '@kit/Navigation';

const searchProps = {
    allowClear: true,
    placeholder: 'Rechercher un PAC, une opération, un livrable'
};

const App = () => {
    return <KitHeader search={searchProps} />;
};

export default App;
