import {KitTable} from '@kit/DataDisplay/';
import {KitTableColumnsType} from '@kit/DataDisplay/Table/types';
import {KitButton} from '@kit/General';

type DataType = {
    key: React.Key;
    name: string;
    age: number;
    address: string;
};

const dataSource: DataType[] = [];

for (let i = 0; i < 20; i++) {
    dataSource.push({
        key: i,
        name: `Edward King ${i}`,
        age: 32,
        address: `London, Park Lane no. ${i}`
    });
}

const columns: KitTableColumnsType<DataType> = [
    {
        title: 'Full Name',
        width: 100,
        dataIndex: 'name',
        key: 'name',
        fixed: 'left'
    },
    {
        title: 'Age',
        width: 100,
        dataIndex: 'age',
        key: 'age',
        fixed: 'left'
    },
    {
        title: 'Column 1',
        dataIndex: 'address',
        key: '1',
        width: 150
    },
    {
        title: 'Column 2',
        dataIndex: 'address',
        key: '2',
        width: 150
    },
    {
        title: 'Column 3',
        dataIndex: 'address',
        key: '3',
        width: 150
    },
    {
        title: 'Column 4',
        dataIndex: 'address',
        key: '4',
        width: 150
    },
    {
        title: 'Column 5',
        dataIndex: 'address',
        key: '5',
        width: 150
    },
    {
        title: 'Column 6',
        dataIndex: 'address',
        key: '6',
        width: 150
    },
    {
        title: 'Column 7',
        dataIndex: 'address',
        key: '7',
        width: 150
    },
    {title: 'Column 8', dataIndex: 'address', key: '8'},
    {
        title: 'Action',
        key: 'operation',
        fixed: 'right',
        width: 100,
        render: () => <KitButton type="primary">Action</KitButton>
    }
];

const App = () => (
    <div style={{backgroundColor: '#F4F7FF'}}>
        <KitTable
            dataSource={dataSource}
            columns={columns}
            cellsBackgroundColor="#F4F7FF"
            pagination={{pageSize: 10}}
            scroll={{x: 1500, y: 300}}
        />
    </div>
);

export default App;
