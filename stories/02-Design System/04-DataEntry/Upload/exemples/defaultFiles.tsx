import React from 'react';
import {KitUpload} from '@kit/DataEntry/Upload';

const App = () => {
    const onChange = ({file, fileList}) => {
        if (file.status !== 'uploading') {
            console.log(file, fileList);
        }
    };

    return (
        <KitUpload
            defaultFileList={[
                {
                    uid: '1',
                    name: 'xxx.png',
                    status: 'uploading',
                    url: 'http://www.baidu.com/xxx.png',
                    percent: 33
                },
                {
                    uid: '2',
                    name: 'yyy.png',
                    status: 'done',
                    url: 'http://www.baidu.com/yyy.png'
                },
                {
                    uid: '3',
                    name: 'zzz.png',
                    status: 'error',
                    response: 'Server Error 500',
                    url: 'http://www.baidu.com/zzz.png'
                }
            ]}
            listType="text"
            onChange={onChange}
        />
    );
};

export default App;
