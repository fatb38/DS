import React from 'react';
import {KitUpload} from '@kit/DataEntry';
import {RcFile} from 'antd/es/upload';
import {UploadChangeParam} from 'antd/lib/upload';

const {LIST_IGNORE} = KitUpload;

const beforeUpload = (file: RcFile) => {
    const isPNG = file.type === 'image/png';
    if (!isPNG) {
        console.error(`${file.name} is not a png file`);
    }
    return isPNG || !LIST_IGNORE;
};

const onChange = (info: UploadChangeParam) => {
    console.log(info.fileList);
};

const App = () => {
    return <KitUpload onChange={onChange} beforeUpload={beforeUpload} />;
};

export default App;
