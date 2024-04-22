import {KitTable, KitTag} from '@kit/DataDisplay/';
import {KitSpace} from '@kit/Layout/';
import {IEditorTemplate} from '../../../types';
import {IKitTable, KitTableColumnsType} from '@kit/DataDisplay/Table/types';
import {KitButton} from '@kit/General';

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
        key: 'age',
        sorter: (a, b) => a.age - b.age
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

export const Template = (args: IKitTable) => {
    return <KitTable {...args} dataSource={dataSource} columns={columns} />;
};

export const EditorTemplate: IEditorTemplate = () => {
    return <KitTable dataSource={dataSource} columns={columns} />;
};
EditorTemplate.path = 'components.Table';
EditorTemplate.title = 'Table';
