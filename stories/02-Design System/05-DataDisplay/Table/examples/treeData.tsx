import {KitTable, KitTag} from '@kit/DataDisplay/';
import {IKitTable, KitTableColumnsType} from '@kit/DataDisplay/Table/types';
import {KitSpace} from '@kit/Layout/';
import {KitButton, KitTypography} from '@kit/General';
import {KitSwitch} from '@kit/DataEntry';
import {Key, useState} from 'react';

type DataType = {
    key: Key;
    name: string;
    age: number;
    address: string;
    tags: string[];
    children?: DataType[];
};

const dataSource: DataType[] = [
    {
        key: '1',
        name: 'Mike',
        age: 51,
        address: '10 Downing Street',
        tags: ['nice', 'developer'],
        children: [
            {
                key: '11',
                name: 'Mike',
                age: 51,
                address: '10 Downing Street',
                tags: ['nice', 'developer'],
                children: [
                    {
                        key: '111',
                        name: 'Mike',
                        age: 51,
                        address: '10 Downing Street',
                        tags: ['nice', 'developer']
                    }
                ]
            },
            {
                key: '12',
                name: 'Mike',
                age: 51,
                address: '10 Downing Street',
                tags: ['nice', 'developer'],
                children: [
                    {
                        key: '121',
                        name: 'Mike',
                        age: 51,
                        address: '10 Downing Street',
                        tags: ['nice', 'developer']
                    }
                ]
            }
        ]
    },
    {
        key: '2',
        name: 'John',
        age: 42,
        address: '10 Downing Street',
        tags: ['nice', 'ui/ux designer']
    },
    {
        key: '3',
        name: 'Jesus',
        age: 60,
        address: '10 Downing Street',
        tags: ['nice', 'developer']
    },
    {
        key: '4',
        name: 'Mike',
        age: 51,
        address: '10 Downing Street',
        tags: ['nice', 'developer'],
        children: [
            {
                key: '41',
                name: 'Mike',
                age: 51,
                address: '10 Downing Street',
                tags: ['nice', 'developer'],
                children: [
                    {
                        key: '411',
                        name: 'Mike',
                        age: 51,
                        address: '10 Downing Street',
                        tags: ['nice', 'developer']
                    }
                ]
            },
            {
                key: '42',
                name: 'Mike',
                age: 51,
                address: '10 Downing Street',
                tags: ['nice', 'developer'],
                children: [
                    {
                        key: '121',
                        name: 'Mike',
                        age: 51,
                        address: '10 Downing Street',
                        tags: ['nice', 'developer']
                    }
                ]
            }
        ]
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
        key: 'address'
    },
    {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: (_, {tags}) => (
            <div style={{display: 'inline-flex'}}>
                {tags.map(tag => (
                    <KitTag color="blue" key={tag}>
                        {tag.toUpperCase()}
                    </KitTag>
                ))}
            </div>
        )
    },
    {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
            <KitSpace>
                <KitButton type="secondary">Action</KitButton>
                <KitButton type="primary">Call {record.name}</KitButton>
            </KitSpace>
        )
    }
];

const rowSelection: IKitTable<DataType>['rowSelection'] = {
    type: 'checkbox',
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    onSelect: (record, selected, selectedRows) => {
        console.log(record, selected, selectedRows);
    },
    onSelectAll: (selected, selectedRows, changeRows) => {
        console.log(selected, selectedRows, changeRows);
    }
};

const App = () => {
    const [checkStrictly, setCheckStrictly] = useState(false);

    return (
        <KitSpace size="m" direction="vertical">
            <KitSpace>
                <KitTypography.Text>CheckStrictly:</KitTypography.Text>
                <KitSwitch checked={checkStrictly} onChange={setCheckStrictly} />
            </KitSpace>
            <KitTable
                dataSource={dataSource}
                columns={columns}
                pagination={false}
                rowSelection={{...rowSelection, checkStrictly}}
            />
        </KitSpace>
    );
};

export default App;
