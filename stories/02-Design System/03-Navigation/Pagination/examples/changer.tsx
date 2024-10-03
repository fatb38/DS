import {KitPagination} from '@kit/Navigation';
import {KitSpace} from '@kit/Layout';

const onShowSizeChange = (current: number, pageSize: number) => {
    console.log(current, pageSize);
};

const App = () => (
    <KitSpace direction="vertical" style={{height: '200px'}}>
        <KitPagination
            showSizeChanger
            onShowSizeChange={onShowSizeChange}
            defaultCurrent={30}
            total={50}
            pageSize={10}
        />
        <KitPagination
            showSizeChanger
            onShowSizeChange={onShowSizeChange}
            defaultCurrent={30}
            total={50}
            pageSize={10}
            disabled
        />
    </KitSpace>
);

export default App;
