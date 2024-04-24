import React from 'react';
import {KitError} from '@kit/DataDisplay';

const App = () => (
    <KitError title={'Page not found'} description={'This page does not seem to exist or no longer exists.'} />
);

export default App;
