import {KitTable, KitTag} from '@kit/DataDisplay/';
import {KitTableColumnsType} from '@kit/DataDisplay/Table/types';
import {KitSpace} from '@kit/Layout/';
import {KitButton, KitTypography} from '@kit/General';
import {Key, useEffect, useState} from 'react';
import {AntFlex} from '@kit/Ant';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrash} from '@fortawesome/free-solid-svg-icons';

type DataType = {
    key: React.Key;
    name: string;
    age: number;
    address: string;
    tags: string[];
};

const dataSource: DataType[] = [
    {
        key: '1',
        name: 'Mike',
        age: 51,
        address: '10 Downing Street',
        tags: ['nice', 'developer']
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
                {tags.map(tag => {
                    return (
                        <KitTag color={'blue'} key={tag}>
                            {tag.toUpperCase()}
                        </KitTag>
                    );
                })}
            </div>
        )
    },
    {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
            <KitSpace>
                <KitButton type="secondary">Open</KitButton>
                <KitButton type="primary">Call {record.name}</KitButton>
            </KitSpace>
        )
    }
];

const App = () => {
    const [selectedRowKeys, setSelectedRowKeys] = useState<Key[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLoading(false);
            setSelectedRowKeys([]);
        }, 1_000);

        return () => clearTimeout(timeoutId);
    }, [loading]);

    const onSelectChange = (newSelectedRowKeys: Key[]) => {
        console.log('selectedRowKeys changed: ', newSelectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
    };

    const onDelete = () => {
        setLoading(true);
    };

    const tableTitle = () => (
        <AntFlex justify="space-between">
            <KitTypography.Text weight="medium" size="large" disabled>
                ({selectedRowKeys.length} selected)
            </KitTypography.Text>
            <KitButton onClick={onDelete} icon={<FontAwesomeIcon icon={faTrash} />} loading={loading} danger>
                Delete
            </KitButton>
        </AntFlex>
    );

    return (
        <KitSpace size="s">
            <KitTable
                dataSource={dataSource}
                columns={columns}
                pagination={false}
                rowSelection={{selectedRowKeys, onChange: onSelectChange}}
                title={tableTitle}
            />
        </KitSpace>
    );
};

export default App;
