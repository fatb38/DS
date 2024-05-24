import React from 'react';
import {KitPagination} from '@kit/Navigation';
import {KitSpace} from '@kit/Layout';

const App = () => (
        <KitSpace direction="vertical" style={{height: '230px'}}>
            <KitPagination
                total={85}
                showTotal={total => `Total ${total} items`}
                defaultPageSize={20}
                defaultCurrent={1}
            />
            <KitPagination
                total={85}
                showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
                defaultPageSize={20}
                defaultCurrent={1}
            />
        </KitSpace>
    );

export default App;
