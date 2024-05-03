import React from 'react';
import {KitPageHeader} from '@kit/Navigation';

const searchProps = {
    allowClear: true,
    placeholder: 'Rechercher un PAC, une opération, un livrable'
};

const App = () => <KitPageHeader search={searchProps} />;

export default App;
