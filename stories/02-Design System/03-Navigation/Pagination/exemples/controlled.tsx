import React, {useState} from 'react';
import {KitPagination} from '@kit/Navigation';

const App = () => {
    const [current, setCurrent] = useState(3);
    const onChange = page => {
        console.log(page);
        setCurrent(page);
    };

    return <KitPagination current={current} onChange={onChange} total={50} />;
};

export default App;
