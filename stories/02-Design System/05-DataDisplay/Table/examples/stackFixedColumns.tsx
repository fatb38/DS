import {KitTable} from '@kit/DataDisplay/';
import {KitTableColumnsType} from '@kit/DataDisplay/Table/types';
import {KitButton} from '@kit/General';

type DataType = {
    key: React.Key;
    name: string;
    age: number;
    address: string;
};

const dataSource: DataType[] = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York Park'
    }
];

const columns: KitTableColumnsType<DataType> = [
    {
        title: 'Full Name',
        width: 100,
        dataIndex: 'name',
        fixed: 'left'
    },
    {
        title: 'Age',
        width: 100,
        dataIndex: 'age'
    },
    {title: 'Column 1', dataIndex: 'address', fixed: 'left'},
    {title: 'Column 2', dataIndex: 'address'},
    {title: 'Column 3', dataIndex: 'address'},
    {title: 'Column 4', dataIndex: 'address'},
    {title: 'Column 5', dataIndex: 'address'},
    {title: 'Column 6', dataIndex: 'address'},
    {title: 'Column 7', dataIndex: 'address'},
    {title: 'Column 8', dataIndex: 'address'},
    {
        title: 'Action 1',
        fixed: 'right',
        width: 90,
        render: () => <KitButton type="primary">Action</KitButton>
    },
    {
        title: 'Action 2',
        width: 90,
        render: () => <KitButton type="primary">Action</KitButton>
    },
    {
        title: 'Action 3',
        fixed: 'right',
        width: 90,
        render: () => <KitButton type="primary">Action</KitButton>
    }
];

const App = () => {
    return <KitTable dataSource={dataSource} columns={columns} pagination={false} scroll={{x: 1300}} />;
};

export default App;
