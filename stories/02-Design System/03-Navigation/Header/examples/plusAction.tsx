import React from 'react';
import {KitHeader} from '@kit/Navigation';

const App = () => {
    return <KitHeader onPlusClick={() => console.log('click on plus')} />;
};

export default App;
