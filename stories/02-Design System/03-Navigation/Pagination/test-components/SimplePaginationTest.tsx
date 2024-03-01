import React, {FunctionComponent} from 'react';
import {KitPagination} from '@kit/Navigation';
import {KitTypography} from '@kit/General';

export const SimplePaginationTest: FunctionComponent = () => (
    <>
        <KitTypography.Title level="h3">Simple pagination</KitTypography.Title>
        <div style={{display: 'flex', flexDirection: 'column', gap: '24px', marginTop: '24px'}}>
            <KitPagination
                simple
                defaultCurrent={2}
                total={100}
                showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
            />
            <KitPagination
                disabled
                simple
                defaultCurrent={2}
                total={100}
                showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
            />
            <KitPagination
                simple
                defaultCurrent={2}
                total={100}
                showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
                size="small"
            />
            <KitPagination
                disabled
                simple
                defaultCurrent={2}
                total={100}
                showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
                size="small"
            />
        </div>
    </>
);
