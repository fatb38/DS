import React from 'react';
import {KitUpload} from '@kit/DataEntry';
import {UploadProps} from 'antd';

const beforeUpload: UploadProps['beforeUpload'] = file => new Promise(resolve => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            const img = document.createElement('img');
            img.src = reader.result as string;
            img.onload = () => {
                const canvas = document.createElement('canvas');
                canvas.width = img.naturalWidth;
                canvas.height = img.naturalHeight;
                const ctx = canvas.getContext('2d')!;
                ctx.drawImage(img, 0, 0);
                ctx.fillStyle = 'red';
                ctx.textBaseline = 'middle';
                ctx.font = '33px Arial';
                ctx.fillText('Ant Design', 20, 20);
                canvas.toBlob(result => {
                    if (result !== null) {
                        return resolve(result);
                    }
                });
            };
        };
    });

const App = () => <KitUpload listType="picture" beforeUpload={beforeUpload} />;

export default App;
