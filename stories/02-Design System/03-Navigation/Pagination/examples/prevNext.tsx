import React, {ReactNode} from 'react';
import {KitPagination} from '@kit/Navigation';

const itemRender = (
    _: number,
    type: 'page' | 'prev' | 'next' | 'jump-prev' | 'jump-next',
    originalElement: ReactNode
) => {
    if (type === 'prev') {
        return <a>Previous</a>;
    }
    if (type === 'next') {
        return <a>Next</a>;
    }
    return originalElement;
};

const App = () => <KitPagination style={{height: '200px'}} total={500} itemRender={itemRender} />;

export default App;
