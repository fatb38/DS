import {KitBreadcrumb, KitPageHeader} from '@kit/Navigation';
import {actions, items, searchProps} from '../commons.tsx';

const App = () => (
    <KitPageHeader
        title="Campagne 1 - soldes rentrée"
        search={searchProps}
        breadcrumb={<KitBreadcrumb items={items} />}
        actions={actions}
        onPlusClick={() => console.log('click on plus')}
    />
);

export default App;
