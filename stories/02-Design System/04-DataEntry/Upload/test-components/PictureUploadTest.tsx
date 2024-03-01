import React, {FunctionComponent} from 'react';
import {UploadProps} from 'antd';
import {KitUpload} from '@kit/DataEntry';
import {KitTypography} from '@kit/General';

export const PictureUploadTest: FunctionComponent = () => {
    const defaultFileList: UploadProps['defaultFileList'] = [
        {
            uid: '0',
            name: 'xxx.png',
            status: 'uploading',
            percent: 33
        },
        {
            uid: '-1',
            name: 'yyy.png',
            status: 'done',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
        },
        {
            uid: '-2',
            name: 'zzz.png',
            status: 'error'
        }
    ];
    return (
        <div>
            <KitTypography.Title level="h3">Picture upload</KitTypography.Title>
            <div style={{width: '400px'}}>
                <KitUpload defaultFileList={defaultFileList} listType="picture" />
            </div>
        </div>
    );
};
