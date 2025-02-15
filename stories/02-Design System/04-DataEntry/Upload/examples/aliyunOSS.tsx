import React, {useEffect, useState} from 'react';
import {KitUpload} from '@kit/DataEntry';
import {UploadFile, UploadProps} from 'antd';
import {RcFile} from 'antd/es/upload';

interface OSSDataType {
    dir: string;
    expire: string;
    host: string;
    accessId: string;
    policy: string;
    signature: string;
}

interface AliyunOSSUploadProps {
    value?: UploadFile[];
    onChange?: (fileList: UploadFile[]) => void;
}

const AliyunOSSUpload = ({value, onChange}: AliyunOSSUploadProps) => {
    const [OSSData, setOSSData] = useState<OSSDataType>();

    // Mock get OSS api
    // https://help.aliyun.com/document_detail/31988.html
    const mockGetOSSData = () => ({
        dir: 'user-dir/',
        expire: '1577811661',
        host: '//www.mocky.io/v2/5cc8019d300000980a055e76',
        accessId: 'c2hhb2RhaG9uZw==',
        policy: 'eGl4aWhhaGFrdWt1ZGFkYQ==',
        signature: 'ZGFob25nc2hhbw=='
    });

    const init = () => {
        try {
            const result = mockGetOSSData();
            setOSSData(result);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        init();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleChange: UploadProps['onChange'] = ({fileList}) => {
        console.log('Aliyun OSS:', fileList);
        onChange?.([...fileList]);
    };

    const onRemove = (file: UploadFile) => {
        const files = (value || []).filter(v => v.url !== file.url);

        if (onChange) {
            onChange(files);
        }
    };

    const getExtraData: UploadProps['data'] = file => ({
        key: file.url,
        OSSAccessKeyId: OSSData?.accessId,
        policy: OSSData?.policy,
        Signature: OSSData?.signature
    });

    const beforeUpload: UploadProps['beforeUpload'] = (file: RcFile) => {
        if (!OSSData) return false;

        const expire = Number(OSSData.expire) * 1000;

        if (expire < Date.now()) {
            init();
        }

        const suffix = file.name.slice(file.name.lastIndexOf('.'));
        const filename = Date.now() + suffix;

        return {...file, url: OSSData.dir + filename};
    };

    return (
        <KitUpload
            name="file"
            fileList={value}
            action={OSSData?.host}
            onChange={handleChange}
            onRemove={onRemove}
            data={getExtraData}
            beforeUpload={beforeUpload}
        />
    );
};

const App = () => <AliyunOSSUpload />;

export default App;
