import React from 'react';
import {KitSlider} from '@kit/DataEntry/';

const App = () => {
    return <KitSlider style={{width: '300px'}} defaultValue={30} tooltip={{open: true}} />;
};

export default App;
