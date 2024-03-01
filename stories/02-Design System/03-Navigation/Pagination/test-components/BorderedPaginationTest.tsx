import React, {FunctionComponent} from 'react';
import {KitPagination} from '@kit/Navigation';
import {KitTypography} from '@kit/General';

export const BorderedPaginationTest: FunctionComponent = () => (
    <>
        <KitTypography.Title level="h3">Bordered pagination</KitTypography.Title>
        <div style={{display: 'flex', flexDirection: 'column', gap: '24px', marginTop: '24px'}}>
            <KitPagination
                defaultCurrent={1}
                total={100}
                bordered
                showSizeChanger
                showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
                showQuickJumper
            />
            <KitPagination
                disabled
                defaultCurrent={1}
                total={100}
                bordered
                showSizeChanger
                showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
                showQuickJumper
            />
            <KitPagination
                defaultCurrent={1}
                total={100}
                bordered
                showSizeChanger
                showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
                size="small"
                showQuickJumper
            />
            <KitPagination
                disabled
                defaultCurrent={1}
                total={100}
                bordered
                showSizeChanger
                showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
                size="small"
                showQuickJumper
            />
        </div>
    </>
);
