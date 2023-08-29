import React from 'react';
import {KitUpload} from '@kit/DataEntry/Upload';

const previewFile = file => {
    console.log('Your upload file:', file);
    // Your process logic. Here we just mock to the same file
    return fetch('https://next.json-generator.com/api/json/get/4ytyBoLK8', {
        method: 'POST',
        body: file
    })
        .then(res => res.json())
        .then(({thumbnail}) => thumbnail);
};

const App = () => {
    return <KitUpload previewFile={previewFile} action="//jsonplaceholder.typicode.com/posts/" listType="picture" />;
};

export default App;
