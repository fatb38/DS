import {KitTableColumnsType} from '@kit/DataDisplay/Table/types';
import {KitButton} from '@kit/General';
import {KitTag} from '@kit/DataDisplay';
import {KitSpace} from '@kit/Layout';

export type DataType = {
    key: React.Key;
    name: string;
    age: number;
    address: string;
    tags: string[];
};

export const dataSource: DataType[] = [
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
        address: '15 Downing Street',
        tags: ['nice', 'ui/ux designer']
    },
    {
        key: '3',
        name: 'Jesus',
        age: 60,
        address: '33 Downing Street',
        tags: ['nice', 'developer']
    }
];

export const columns: KitTableColumnsType<DataType> = [
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
                    <KitTag type="primary" key={tag} idCardProps={{description: tag.toUpperCase()}} />
                ))}
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
