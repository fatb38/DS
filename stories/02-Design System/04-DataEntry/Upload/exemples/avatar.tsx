import React, {useState} from 'react';
import {KitUpload} from '@kit/DataEntry';
import {UploadProps} from 'antd';
import {RcFile, UploadChangeParam, UploadFile} from 'antd/es/upload';

const getBase64 = (img: RcFile, callback: (url: string) => void) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result as string));
    reader.readAsDataURL(img);
};

const beforeUpload = (file: RcFile) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        console.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        console.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
};

const App = () => {
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState<string>();

    const handleChange: UploadProps['onChange'] = (info: UploadChangeParam<UploadFile>) => {
        if (info.file.status === 'uploading') {
            setLoading(true);
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj as RcFile, url => {
                setLoading(false);
                setImageUrl(url);
            });
        }
    };
    return (
        <KitUpload
            name="avatar"
            listType="picture-card"
            showUploadList={false}
            beforeUpload={beforeUpload}
            onChange={handleChange}
            imageUrl={imageUrl}
            loading={loading}
        />
    );
};

export default App;
