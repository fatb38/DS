import React from 'react';
import {KitUpload} from '@kit/DataEntry';
import {IEditorTemplate} from '../../../types';
import {KitSpace} from '@kit/Layout';
import {UploadProps} from 'antd';
import KitDragger from '@kit/DataEntry/Upload/Dragger';
import {IKitUpload} from '@kit/DataEntry/Upload/types';

export const Template = (args: IKitUpload) => {
    const {listType, ...props} = args;
    return <KitUpload listType={listType} {...props}></KitUpload>;
};

export const EditorTemplate: IEditorTemplate = () => {
    const defaultFileList: UploadProps['defaultFileList'] = [
        {
            uid: '1',
            name: 'xxx.png',
            status: 'uploading',
            url: 'public/images/portrait.png',
            percent: 33
        },
        {
            uid: '2',
            name: 'yyy.png',
            status: 'done',
            url: 'public/images/portrait.png'
        },
        {
            uid: '3',
            name: 'zzz.png',
            status: 'error',
            response: 'Server Error 500',
            url: 'public/images/portrait.png'
        }
    ];

    return (
        <KitSpace direction="vertical" size="l" style={{width: '500px'}}>
            <KitUpload defaultFileList={defaultFileList} listType="text" />
            <KitUpload listType="picture-card" fileList={defaultFileList}></KitUpload>
            <KitUpload listType="picture" fileList={defaultFileList}></KitUpload>
            <KitDragger multiple />
        </KitSpace>
    );
};
EditorTemplate.path = 'components.Upload';
EditorTemplate.title = 'Upload';
