import React from 'react';
import {KitPagination} from '@kit/Navigation';

const itemRender = (_, type, originalElement) => {
    if (type === 'prev') {
        return <a>Previous</a>;
    }
    if (type === 'next') {
        return <a>Next</a>;
    }
    return originalElement;
};

const App = () => {
    return <KitPagination style={{height: '200px'}} total={500} itemRender={itemRender} />;
};

export default App;
