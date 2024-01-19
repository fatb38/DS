import React, {FC} from 'react';
import {UploadProps} from 'antd';
import {KitUpload} from '@kit/DataEntry';
import {KitTypography} from '@kit/General';

export const PictureWallUploadTest: FC = () => {
    const defaultFileList: UploadProps['defaultFileList'] = [
        {
            uid: '-1',
            name: 'image.png',
            status: 'done',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
        },
        {
            uid: '-xxx',
            percent: 50,
            name: 'image.png',
            status: 'uploading',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
        },
        {
            uid: '-3',
            name: 'image.png',
            status: 'error'
        }
    ];
    return (
        <div>
            <KitTypography.Title level="h3">Picture wall upload</KitTypography.Title>
            <div style={{width: '600px'}}>
                <KitUpload listType="picture-card" fileList={defaultFileList}></KitUpload>
            </div>
        </div>
    );
};
