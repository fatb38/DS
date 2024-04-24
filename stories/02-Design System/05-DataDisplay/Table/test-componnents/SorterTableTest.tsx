import {FunctionComponent} from 'react';
import {KitTypography} from '@kit/General';
import {KitTable} from '@kit/DataDisplay';
import {DataType, columns, dataSource} from './data';

const columnsWithSorter = columns.map(column => {
    if (column.key === 'age') {
        return {
            ...column,
            sorter: (a: DataType, b: DataType) => a.age - b.age,
            defaultSortOrder: 'descend' as const
        };
    }

    if (column.key === 'address') {
        return {
            ...column,
            sorter: (a: DataType, b: DataType) => a.address.localeCompare(b.address)
        };
    }

    return column;
});

export const SorterTableTest: FunctionComponent = () => (
    <div style={{width: '700px'}}>
        <KitTypography.Title level="h3">Table with sorter</KitTypography.Title>
        <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
            <KitTable columns={columnsWithSorter} dataSource={dataSource} />
        </div>
    </div>
);
