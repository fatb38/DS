import React from 'react';
import {KIT_LIST_IGNORE, KitUpload} from '@kit/DataEntry/Upload';

const beforeUpload = file => {
    const isPNG = file.type === 'image/png';
    if (!isPNG) {
        console.error(`${file.name} is not a png file`);
    }
    return isPNG || KIT_LIST_IGNORE;
};

const onChange = info => {
    console.log(info.fileList);
};

const App = () => {
    return <KitUpload onChange={onChange} beforeUpload={beforeUpload} />;
};

export default App;
