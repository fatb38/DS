import React from 'react';
import {KitBreadcrumb, KitHeader} from '@kit/Navigation';
import {actions, items, searchProps} from '../commons.tsx';

const App = () => {
    return (
        <KitHeader
            title="Campagne 1 - soldes rentrée"
            search={searchProps}
            breadcrumb={<KitBreadcrumb items={items} />}
            actions={actions}
            onPlusClick={() => console.log('click on plus')}
        />
    );
};

export default App;
