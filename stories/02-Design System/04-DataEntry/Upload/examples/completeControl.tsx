import React, {useState} from 'react';
import {KitUpload} from '@kit/DataEntry';
import {UploadFile, UploadProps} from 'antd';
import {UploadChangeParam} from 'antd/es/upload';

const App = () => {
    const [fileList, setFileList] = useState<UploadFile[]>([
        {
            uid: '-1',
            name: 'xxx.png',
            status: 'done',
            url: 'http://www.baidu.com/xxx.png'
        }
    ]);

    const handleChange: UploadProps['onChange'] = (info: UploadChangeParam) => {
        let newFileList: UploadFile[] = [...info.fileList];

        // 1. Limit the number of uploaded files
        // Only to show two recent uploaded files, and old ones will be replaced by the new
        newFileList = newFileList.slice(-2);

        // 2. Read from response and show file link
        newFileList = newFileList.map(file => {
            if (file.response) {
                // Component will show file.url as link
                // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                file.url = file.response.url as string;
            }
            return file;
        });

        setFileList(newFileList);
    };

    return <KitUpload fileList={fileList} onChange={handleChange} multiple />;
};

export default App;
