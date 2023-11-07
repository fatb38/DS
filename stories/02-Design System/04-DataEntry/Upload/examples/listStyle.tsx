import React from 'react';
import {KitUpload} from '@kit/DataEntry';

const App = () => {
    return (
        <KitUpload
            defaultFileList={[
                {
                    uid: '0',
                    name: 'xxx.png',
                    status: 'uploading',
                    percent: 33
                },
                {
                    uid: '-1',
                    name: 'yyy.png',
                    status: 'done',
                    url: 'public/images/portrait.png',
                    thumbUrl: 'public/images/portrait.png',
                },
                {
                    uid: '-2',
                    name: 'zzz.png',
                    status: 'error'
                }
            ]}
            listType="picture"
        />
    );
};

export default App;
