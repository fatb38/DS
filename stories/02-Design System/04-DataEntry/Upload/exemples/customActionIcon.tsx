import React from 'react';
import {KitUpload} from '@kit/DataEntry';
import {UploadProps} from 'antd';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-regular-svg-icons';

const defaultFileList: UploadProps['defaultFileList'] = [
    {
        uid: '1',
        name: 'xxx.png',
        status: 'done',
        response: 'Server Error 500', // custom error message to show
        url: 'http://www.baidu.com/xxx.png'
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
        response: 'Server Error 500', // custom error message to show
        url: 'http://www.baidu.com/zzz.png'
    }
];

const onChange = ({file, fileList}) => {
    if (file.status !== 'uploading') {
        console.log(file, fileList);
    }
};

const showUploadList = {
    showDownloadIcon: true,
    downloadIcon: 'Download',
    showRemoveIcon: true,
    removeIcon: <FontAwesomeIcon icon={faStar} onClick={e => console.log(e, 'custom removeIcon event')} />
};

const App = () => {
    return (
        <KitUpload
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            fileList={defaultFileList}
            onChange={onChange}
            showUploadList={showUploadList}
        />
    );
};

export default App;
