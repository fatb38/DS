import {KitTable} from '@kit/DataDisplay/';
import {KitTableColumnsType} from '@kit/DataDisplay/Table/types';
import {KitSpace} from '@kit/Layout/';

type DataType = {
    key: React.Key;
    name: string;
    age: number;
    salary: number;
    address: string;
};

const dataSource: DataType[] = [
    {
        key: '1',
        name: 'Mike',
        age: 51,
        salary: 1_800,
        address: '10 Downing Street'
    },
    {
        key: '2',
        name: 'John',
        age: 42,
        salary: 2_500,
        address: '10 Downing Street'
    },
    {
        key: '3',
        name: 'Jesus',
        age: 60,
        salary: 5_000,
        address: '10 Downing Street'
    }
];

const columns: KitTableColumnsType<DataType> = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name'
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age'
    },
    {
        title: 'Salary',
        dataIndex: 'salary',
        key: 'salary'
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address'
    }
];

const App = () => (
    <KitSpace size="l">
        <KitTable
            dataSource={dataSource}
            columns={columns}
            pagination={false}
            title={() => 'header'}
            footer={() => 'footer'}
        />
    </KitSpace>
);

export default App;
