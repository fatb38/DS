import {KitTable, KitTooltip} from '@kit/DataDisplay/';
import {KitTableColumnsType} from '@kit/DataDisplay/Table/types';
import {KitSpace} from '@kit/Layout/';

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
        title: 'Address and tooltip',
        dataIndex: 'address',
        key: 'address 1',
        ellipsis: {
            showTitle: false
        },
        render: (adress: string) => (
            <KitTooltip placement="topLeft" title={adress}>
                {adress}
            </KitTooltip>
        )
    },
    {
        title: 'Long Column Long Column Long Column',
        dataIndex: 'address',
        key: 'address 2',
        ellipsis: {
            showTitle: false
        },
        render: (adress: string) => (
            <KitTooltip placement="topLeft" title={adress}>
                {adress}
            </KitTooltip>
        )
    },
    {
        title: 'Long Column Long Column',
        dataIndex: 'address',
        key: 'address 3',
        ellipsis: {
            showTitle: false
        },
        render: (address: string) => (
            <KitTooltip placement="topLeft" title={address}>
                {address}
            </KitTooltip>
        )
    }
];

const App = () => (
    <KitSpace size="l" style={{width: '900px'}}>
        <KitTable dataSource={dataSource} columns={columns} pagination={false} />
    </KitSpace>
);

export default App;
