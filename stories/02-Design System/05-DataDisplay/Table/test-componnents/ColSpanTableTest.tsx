import {FunctionComponent} from 'react';
import {KitTypography} from '@kit/General';
import {KitTable} from '@kit/DataDisplay';
import {DataType, columns, dataSource} from './data';
import {KitTableColumnsType} from '@kit/DataDisplay/Table/types';

const sharedOnCell = (_: DataType, index?: number) => {
    if (index === 1) {
        return {colSpan: 0};
    }

    return {};
};

const columnsWithColSpan: KitTableColumnsType<DataType> = columns.map(column => {
    if (column.key === 'name') {
        return {
            ...column,
            onCell: (_, index) => ({
                colSpan: index === 1 ? 5 : 1
            })
        };
    }

    return {
        ...column,
        onCell: sharedOnCell
    };
});

columnsWithColSpan.unshift({
    title: 'RowHead',
    dataIndex: 'key',
    rowScope: 'row'
});

export const ColSpanTableTest: FunctionComponent = () => (
    <div style={{width: '700px'}}>
        <KitTypography.Title level="h3">Table with ColSpan</KitTypography.Title>
        <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
            <KitTable columns={columnsWithColSpan} dataSource={dataSource} />
        </div>
    </div>
);
