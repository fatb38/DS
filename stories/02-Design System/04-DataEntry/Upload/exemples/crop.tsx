import React, {useState} from 'react';
import {KitUpload} from '@kit/DataEntry/Upload';
import {UploadFile, UploadProps} from 'antd';
import {RcFile} from 'antd/es/upload';
import ImgCrop from 'antd-img-crop';

const App = () => {
    const [fileList, setFileList] = useState<UploadFile[]>([
        {
            uid: '-1',
            name: 'image.png',
            status: 'done',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
        }
    ]);

    const onChange: UploadProps['onChange'] = ({fileList: newFileList}) => {
        setFileList(newFileList);
    };

    const onPreview = async (file: UploadFile) => {
        let src = file.url as string;
        if (!src) {
            src = await new Promise(resolve => {
                const reader = new FileReader();
                reader.readAsDataURL(file.originFileObj as RcFile);
                reader.onload = () => resolve(reader.result as string);
            });
        }
        const image = new Image();
        image.src = src;
        const imgWindow = window.open(src);
        imgWindow?.document.write(image.outerHTML);
    };
    return (
        <ImgCrop rotationSlider>
            <KitUpload listType="picture-card" fileList={fileList} onChange={onChange} onPreview={onPreview} />
        </ImgCrop>
    );
};

export default App;
