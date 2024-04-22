import {KitTable} from '@kit/DataDisplay/';
import {IKitTable, KitTableColumnsType} from '@kit/DataDisplay/Table/types';
import {KitSpace} from '@kit/Layout/';
import {KitButton} from '@kit/General';
import {useState} from 'react';

type DataType = {
    key: string;
    name: string;
    age: number;
    address: string;
};

const dataSource: DataType[] = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park'
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park'
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sydney No. 1 Lake Park'
    },
    {
        key: '4',
        name: 'Jim Red',
        age: 32,
        address: 'London No. 2 Lake Park'
    }
];

type OnChange = NonNullable<IKitTable<DataType>['onChange']>;
type GetSingle<T> = T extends (infer U)[] ? U : never;
type Sorts = GetSingle<Parameters<OnChange>[1]>;

const App = () => {
    const [sortedInfo, setSortedInfo] = useState<Sorts>({});

    const columns: KitTableColumnsType<DataType> = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            sorter: (a, b) => a.name.length - b.name.length,
            sortOrder: sortedInfo.columnKey === 'name' ? sortedInfo.order : null
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
            sorter: (a, b) => a.age - b.age,
            sortOrder: sortedInfo.columnKey === 'age' ? sortedInfo.order : null
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
            sorter: (a, b) => a.address.length - b.address.length,
            sortOrder: sortedInfo.columnKey === 'address' ? sortedInfo.order : null
        }
    ];

    const handleChange: OnChange = (pagination, sorter) => {
        console.log('Various parameters', pagination, sorter);
        setSortedInfo(sorter as Sorts);
    };

    const setAgeSort = () => {
        setSortedInfo({
            order: 'descend',
            columnKey: 'age'
        });
    };

    const clearSorter = () => {
        setSortedInfo({});
    };

    return (
        <KitSpace size="l" direction="vertical">
            <KitSpace>
                <KitButton onClick={setAgeSort}>Sort age</KitButton>
                <KitButton onClick={clearSorter}>Clearsorters</KitButton>
            </KitSpace>
            <KitTable dataSource={dataSource} columns={columns} pagination={false} onChange={handleChange} />
        </KitSpace>
    );
};

export default App;
