import React from 'react';
import {KitUpload} from '@kit/DataEntry';

const previewFile = (file: File | Blob) => {
    console.log('Your upload file:', file);
    // Your process logic. Here we just mock to the same file
    return (
        fetch('https://next.json-generator.com/api/json/get/4ytyBoLK8', {
            method: 'POST',
            body: file
        })
            .then(res => res.json())
            // eslint-disable-next-line @typescript-eslint/no-unsafe-return
            .then(({thumbnail}) => thumbnail)
    );
};

const App = () => <KitUpload previewFile={previewFile} listType="picture" />;

export default App;
