import {KitTable} from '@kit/DataDisplay/';
import {KitTableColumnsType} from '@kit/DataDisplay/Table/types';
import {KitSpace} from '@kit/Layout/';
import {KitCheckbox} from '@kit/DataEntry';
import {useState} from 'react';
import {CheckboxOptionType} from '@kit/DataEntry/Checkbox/types';

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
        address: '10 Downing Street'
    },
    {
        key: '2',
        name: 'John',
        age: 42,
        address: '10 Downing Street'
    }
];

const columns: KitTableColumnsType<DataType> = [
    {title: 'Column 1', dataIndex: 'address', key: '1'},
    {title: 'Column 2', dataIndex: 'address', key: '2'},
    {title: 'Column 3', dataIndex: 'address', key: '3'},
    {title: 'Column 4', dataIndex: 'address', key: '4'},
    {title: 'Column 5', dataIndex: 'address', key: '5'},
    {title: 'Column 6', dataIndex: 'address', key: '6'},
    {title: 'Column 7', dataIndex: 'address', key: '7'},
    {title: 'Column 8', dataIndex: 'address', key: '8'}
];

const defaultCheckedList = columns.map(item => item.key);

const App = () => {
    const [checkedList, setCheckedList] = useState(defaultCheckedList);

    const options = columns.map(({key, title}) => ({
        label: title,
        value: key
    }));

    const newColumns = columns.map(item => ({
        ...item,
        hidden: !checkedList.includes(item.key)
    }));

    return (
        <KitSpace size="l" direction="vertical">
            <KitCheckbox.Group
                value={checkedList as string[]}
                options={options as CheckboxOptionType[]}
                onChange={value => {
                    setCheckedList(value as string[]);
                }}
            />
            <KitTable dataSource={dataSource} columns={newColumns} pagination={false} />
        </KitSpace>
    );
};

export default App;
