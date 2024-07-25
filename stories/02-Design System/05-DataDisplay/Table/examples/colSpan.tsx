import {KitTable, KitTag} from '@kit/DataDisplay/';
import {KitTableColumnsType} from '@kit/DataDisplay/Table/types';
import {KitSpace} from '@kit/Layout/';
import {Key} from 'react';

type DataType = {
    key: Key;
    name: string;
    age: number;
    tel: string;
    phone: number;
    address: string;
};

const dataSource: DataType[] = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        tel: '0571-22098909',
        phone: 18889898989,
        address: 'New York No. 1 Lake Park'
    },
    {
        key: '2',
        name: 'Jim Green',
        tel: '0571-22098333',
        phone: 18889898888,
        age: 42,
        address: 'London No. 1 Lake Park'
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        tel: '0575-22098909',
        phone: 18900010002,
        address: 'Sydney No. 1 Lake Park'
    },
    {
        key: '4',
        name: 'Jim Red',
        age: 18,
        tel: '0575-22098909',
        phone: 18900010002,
        address: 'London No. 2 Lake Park'
    },
    {
        key: '5',
        name: 'Jake White',
        age: 18,
        tel: '0575-22098909',
        phone: 18900010002,
        address: 'Dublin No. 2 Lake Park'
    }
];

// In the fifth row, other columns are merged into first column
// by setting it's colSpan to be 0
const sharedOnCell = (_: DataType, index?: number) => {
    if (index === 1) {
        return {colSpan: 0};
    }

    return {};
};

const columns: KitTableColumnsType<DataType> = [
    {
        title: 'RowHead',
        dataIndex: 'key',
        rowScope: 'row'
    },
    {
        title: 'Name',
        dataIndex: 'name',
        render: (text: string) => <KitTag type="primary" idCardProps={{description: text}} />,
        onCell: (_, index) => ({
            colSpan: index === 1 ? 5 : 1
        })
    },
    {
        title: 'Age',
        dataIndex: 'age',
        onCell: sharedOnCell
    },
    {
        title: 'Home phone',
        colSpan: 2,
        dataIndex: 'tel',
        onCell: sharedOnCell
    },
    {
        title: 'Phone',
        colSpan: 0,
        dataIndex: 'phone',
        onCell: sharedOnCell
    },
    {
        title: 'Address',
        dataIndex: 'address',
        onCell: sharedOnCell
    }
];

const App = () => (
    <KitSpace size="l">
        <KitTable dataSource={dataSource} columns={columns} pagination={false} />
    </KitSpace>
);

export default App;
