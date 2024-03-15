import React from 'react';
import {KitPageHeader} from '@kit/Navigation';

const App = () => {
    return <KitPageHeader onPlusClick={() => console.log('click on plus')} />;
};

export default App;
