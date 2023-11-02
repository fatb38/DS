import type {Meta, StoryObj} from '@storybook/react';
import {KitUpload} from '@kit/DataEntry';
import {argTypes, Template} from './data';
import React from 'react';
import {UploadProps} from 'antd';
import KitDragger from '@kit/DataEntry/Upload/Dragger';

const meta: Meta<typeof KitUpload> = {
    component: KitUpload,
    title: 'Design System/DataEntry/Upload',
    argTypes: argTypes
};

export default meta;
type Story = StoryObj<typeof KitUpload>;

export const Api: Story = {
    render: Template,
    parameters: {
        chromatic: {disableSnapshot: true}
    }
};

export const TypeText: Story = {
    render: () => {
        const defaultFileList: UploadProps['defaultFileList'] = [
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
        ];
        return (
            <div style={{width: '400px'}}>
                <KitUpload defaultFileList={defaultFileList} listType="text" />{' '}
            </div>
        );
    },
    parameters: {
        chromatic: {disableSnapshot: false}
    }
};

export const Picture: Story = {
    render: () => {
        const defaultFileList: UploadProps['defaultFileList'] = [
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
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
            },
            {
                uid: '-2',
                name: 'zzz.png',
                status: 'error'
            }
        ];
        return (
            <div style={{width: '400px'}}>
                <KitUpload defaultFileList={defaultFileList} listType="picture" />
            </div>
        );
    },
    parameters: {
        chromatic: {disableSnapshot: false}
    }
};

export const PictureWall: Story = {
    render: () => {
        const defaultFileList: UploadProps['defaultFileList'] = [
            {
                uid: '-1',
                name: 'image.png',
                status: 'done',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
            },
            {
                uid: '-xxx',
                percent: 50,
                name: 'image.png',
                status: 'uploading',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
            },
            {
                uid: '-3',
                name: 'image.png',
                status: 'error'
            }
        ];
        return <KitUpload listType="picture-card" fileList={defaultFileList}></KitUpload>;
    },
    parameters: {
        chromatic: {disableSnapshot: false}
    }
};

export const Dragger: Story = {
    render: () => <KitDragger style={{width: '500px'}} multiple />,
    parameters: {
        chromatic: {disableSnapshot: false}
    }
};
