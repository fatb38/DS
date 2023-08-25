import React from 'react';
import {KitPagination} from '@kit/Navigation';
import {KitSpace} from '@kit/Layout';

const showTotal = total => `Total ${total} items`;

const App = () => {
    return (
        <KitSpace direction="vertical" style={{height: '230px'}}>
            <KitPagination size="small" total={50} />
            <KitPagination size="small" total={50} showSizeChanger showQuickJumper />
            <KitPagination size="small" total={50} showTotal={showTotal} />
            <KitPagination size="small" total={50} disabled showTotal={showTotal} showSizeChanger showQuickJumper />
        </KitSpace>
    );
};

export default App;
