import {KitTable} from '@kit/DataDisplay/';
import {KitTableColumnsType} from '@kit/DataDisplay/Table/types';
import {KitSpace} from '@kit/Layout/';

type DataType = {
    key: React.Key;
    name: string;
    age: number;
    address: string;
};

const dataSource: DataType[] = [];

for (let i = 0; i < 100; i++) {
    dataSource.push({
        key: i,
        name: `Edward King ${i}`,
        age: 32,
        address: `London, Park Lane no. ${i}`
    });
}

const columns: KitTableColumnsType<DataType> = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        fixed: 'left'
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age'
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address'
    }
];

const App = () => {
    return (
        <KitSpace size="l" direction="vertical" style={{width: '900px'}}>
            <KitTable dataSource={dataSource} columns={columns} pagination={{pageSize: 50}} scroll={{y: 240, x: 800}} />
        </KitSpace>
    );
};

export default App;
