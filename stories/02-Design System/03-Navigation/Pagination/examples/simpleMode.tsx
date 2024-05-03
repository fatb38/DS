import React from 'react';
import {KitPagination} from '@kit/Navigation';
import {KitSpace} from '@kit/Layout';

const App = () => (
        <KitSpace direction="vertical">
            <KitPagination simple defaultCurrent={2} total={50} />
            <KitPagination disabled simple defaultCurrent={2} total={50} />
        </KitSpace>
    );

export default App;
