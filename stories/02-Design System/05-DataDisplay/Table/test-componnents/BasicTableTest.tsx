import {FunctionComponent} from 'react';
import {KitTypography} from '@kit/General';
import {KitTable} from '@kit/DataDisplay';
import {columns, dataSource} from './data';

export const BasicTableTest: FunctionComponent = () => (
    <div style={{width: '700px'}}>
        <KitTypography.Title level="h3">Basic Table</KitTypography.Title>
        <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
            <KitTable columns={columns} dataSource={dataSource} />
        </div>
    </div>
);
