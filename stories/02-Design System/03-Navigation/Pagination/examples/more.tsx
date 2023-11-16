import React from 'react';
import {KitPagination} from '@kit/Navigation';

const App = () => {
    return <KitPagination style={{height: '200px'}} defaultCurrent={6} total={500} />;
};

export default App;
