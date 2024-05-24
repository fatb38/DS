import React from 'react';
import {KitUpload} from '@kit/DataEntry';
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

const App = () => <KitUpload onChange={onChange} />;

export default App;
