import {KitPagination} from '@kit/Navigation';
import {KitSpace} from '@kit/Layout';

const showTotal = (total: number) => `Total ${total} items`;

const App = () => (
    <KitSpace direction="vertical" style={{height: '230px'}}>
        <KitPagination size="small" total={50} />
        <KitPagination size="small" total={50} showSizeChanger showQuickJumper />
        <KitPagination size="small" total={50} showTotal={showTotal} />
        <KitPagination size="small" total={50} disabled showTotal={showTotal} showSizeChanger showQuickJumper />
    </KitSpace>
);

export default App;
