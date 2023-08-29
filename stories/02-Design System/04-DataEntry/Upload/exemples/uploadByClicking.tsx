import React from 'react';
import {KitUpload} from '@kit/DataEntry/Upload';

const onChange = info => {
    if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
        console.log(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
        console.error(`${info.file.name} file upload failed.`);
    }
};

const App = () => {
    return <KitUpload onChange={onChange} />;
};

export default App;
