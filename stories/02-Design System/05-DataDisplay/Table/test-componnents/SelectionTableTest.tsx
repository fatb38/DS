import {FunctionComponent} from 'react';
import {KitTypography} from '@kit/General';
import {KitTable} from '@kit/DataDisplay';
import {columns, dataSource} from './data';

export const SelectionTableTest: FunctionComponent = () => (
    <div style={{width: '700px'}}>
        <KitTypography.Title level="h3">Table with selection</KitTypography.Title>
        <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
            <KitTable
                columns={columns}
                dataSource={dataSource}
                rowSelection={{type: 'checkbox', selectedRowKeys: [dataSource[0].key, dataSource[1].key]}}
            />
            <KitTable
                columns={columns}
                dataSource={dataSource}
                rowSelection={{type: 'radio', selectedRowKeys: [dataSource[0].key]}}
            />
        </div>
    </div>
);
