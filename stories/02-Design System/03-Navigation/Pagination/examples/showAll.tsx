import {KitPagination} from '@kit/Navigation';

const App = () => (
    <KitPagination
        style={{height: '200px'}}
        total={85}
        showSizeChanger
        showQuickJumper
        showTotal={total => `Total ${total} items`}
    />
);

export default App;
