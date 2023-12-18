import React from 'react';
import {KitUpload} from '@kit/DataEntry';
import {UploadProps} from 'antd';
import {UploadChangeParam} from 'antd/es/upload';

const onChange = (info: UploadChangeParam) => {
    if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
        console.log(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
        console.error(`${info.file.name} file upload failed.`);
    }
};

const progress: UploadProps['progress'] = {
    strokeColor: {
        '0%': '#108ee9',
        '100%': '#87d068'
    },
    size: 'small',
    format: percent => percent && `${parseFloat(percent.toFixed(2))}%`
};

const defaultFileList: UploadProps['defaultFileList'] = [
    {
        uid: '1',
        name: 'xxx.png',
        status: 'uploading',
        url: 'http://www.baidu.com/xxx.png',
        percent: 33
    },
    {
        uid: '2',
        name: 'www.png',
        status: 'done',
        url: 'http://www.baidu.com/xxx.png'
    }
];

const App = () => {
    return <KitUpload onChange={onChange} progress={progress} defaultFileList={defaultFileList} />;
};

export default App;
