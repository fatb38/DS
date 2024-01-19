import React, {FC} from 'react';
import {UploadProps} from 'antd';
import {KitUpload} from '@kit/DataEntry';
import {KitTypography} from '@kit/General';

export const TypeTextUploadTest: FC = () => {
    const defaultFileList: UploadProps['defaultFileList'] = [
        {
            uid: '1',
            name: 'xxx.png',
            status: 'uploading',
            url: 'https://www.baidu.com/xxx.png',
            percent: 33
        },
        {
            uid: '2',
            name: 'yyy.png',
            status: 'done',
            url: 'https://www.baidu.com/yyy.png'
        },
        {
            uid: '3',
            name: 'zzz.png',
            status: 'error',
            response: 'Server Error 500',
            url: 'https://www.baidu.com/zzz.png'
        }
    ];
    return (
        <div>
            <KitTypography.Title level="h3">Type text upload</KitTypography.Title>
            <div style={{width: '400px'}}>
                <KitUpload defaultFileList={defaultFileList} listType="text" />{' '}
            </div>
        </div>
    );
};
