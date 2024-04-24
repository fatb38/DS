import {IKitTable, KitTableColumnsType} from '@kit/DataDisplay/Table/types';
import {KitTable} from '@kit/DataDisplay/';
import {KitSpace} from '@kit/Layout/';
import {KitRadio} from '@kit/DataEntry';
import {useState} from 'react';

type TablePagination<T extends object> = NonNullable<Exclude<IKitTable<T>['pagination'], boolean>>;
type TablePaginationPosition = NonNullable<TablePagination<never>['position']>[number];

const topOptions = [
    {label: 'topLeft', value: 'topLeft'},
    {label: 'topCenter', value: 'topCenter'},
    {label: 'topRight', value: 'topRight'},
    {label: 'none', value: 'none'}
];

const bottomOptions = [
    {label: 'bottomLeft', value: 'bottomLeft'},
    {label: 'bottomCenter', value: 'bottomCenter'},
    {label: 'bottomRight', value: 'bottomRight'},
    {label: 'none', value: 'none'}
];

type DataType = {
    key: React.Key;
    name: string;
    age: number;
    address: string;
};

const dataSource: DataType[] = [
    {
        key: '1',
        name: 'Mike',
        age: 51,
        address: 'New York No. 1 Lake Park, New York No. 1 Lake Park'
    },
    {
        key: '2',
        name: 'John',
        age: 42,
        address: 'New York No. 2 Lake Park, New York No. 2 Lake Park'
    },
    {
        key: '3',
        name: 'Jesus',
        age: 60,
        address: 'New York No. 3 Lake Park, New York No. 3 Lake Park'
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
        title: 'Address',
        dataIndex: 'address',
        key: 'address 1',
        ellipsis: true
    },
    {
        title: 'Long Column Long Column Long Column',
        dataIndex: 'address',
        key: 'address 2',
        ellipsis: true
    },
    {
        title: 'Long Column Long Column',
        dataIndex: 'address',
        key: 'address 3',
        ellipsis: true
    }
];

const App = () => {
    const [top, setTop] = useState<TablePaginationPosition>('topLeft');
    const [bottom, setBottom] = useState<TablePaginationPosition>('bottomRight');

    return (
        <KitSpace size="l" direction="vertical" style={{width: '900px'}}>
            <KitRadio.Group
                options={topOptions}
                value={top}
                onChange={e => setTop(e.target.value as TablePaginationPosition)}
            />
            <KitRadio.Group
                options={bottomOptions}
                value={bottom}
                onChange={e => setBottom(e.target.value as TablePaginationPosition)}
            />
            <KitTable dataSource={dataSource} columns={columns} pagination={{position: [top, bottom]}} />
        </KitSpace>
    );
};

export default App;
