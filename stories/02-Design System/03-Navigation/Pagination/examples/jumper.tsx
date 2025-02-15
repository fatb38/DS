import {KitPagination} from '@kit/Navigation';
import {KitSpace} from '@kit/Layout';

const onChange = (pageNumber: number) => {
    console.log('Page: ', pageNumber);
};

const App = () => (
    <KitSpace direction="vertical" style={{height: '200px'}}>
        <KitPagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange} />
        <KitPagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange} disabled />
    </KitSpace>
);

export default App;
