import React, {useState} from 'react';
import {KitUpload} from '@kit/DataEntry';
import {UploadFile} from 'antd';
import {RcFile} from 'antd/es/upload';
import {KitButton} from '@kit/General';

const App = () => {
    const [fileList, setFileList] = useState<UploadFile[]>([]);
    const [uploading, setUploading] = useState(false);

    const handleUpload = () => {
        const formData = new FormData();
        fileList.forEach(file => {
            formData.append('files[]', file as RcFile);
        });
        setUploading(true);
        // You can use any AJAX library you like
        fetch('https://www.mocky.io/v2/5cc8019d300000980a055e76', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(() => {
                setFileList([]);
                console.log('upload successfully.');
            })
            .catch(() => {
                console.error('upload failed.');
            })
            .finally(() => {
                setUploading(false);
            });
    };
    const onRemove = file => {
        const index = fileList.indexOf(file);
        const newFileList = fileList.slice();
        newFileList.splice(index, 1);
        setFileList(newFileList);
    };

    const beforeUpload = file => {
        setFileList([...fileList, file]);

        return false;
    };

    return (
        <>
            <KitUpload onRemove={onRemove} beforeUpload={beforeUpload} fileList={fileList} />
            <KitButton
                type="primary"
                onClick={handleUpload}
                disabled={fileList.length === 0}
                loading={uploading}
                style={{marginTop: 16}}
            >
                {uploading ? 'Uploading' : 'Start Upload'}
            </KitButton>
        </>
    );
};

export default App;
