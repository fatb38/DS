import React from 'react';
import {KitUpload} from '@kit/DataEntry';

const {LIST_IGNORE} = KitUpload;

const beforeUpload = file => {
    const isPNG = file.type === 'image/png';
    if (!isPNG) {
        console.error(`${file.name} is not a png file`);
    }
    return isPNG || !LIST_IGNORE;
};

const onChange = info => {
    console.log(info.fileList);
};

const App = () => {
    return <KitUpload onChange={onChange} beforeUpload={beforeUpload} />;
};

export default App;
