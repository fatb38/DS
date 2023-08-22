import React from 'react';
import {KitSelect} from '@kit/DataEntry/';
import {KitSpace} from '@kit/Layout/';
import {FileOutlined} from '@ant-design/icons';

const App = ({}) => {
    const iconOptions = [
        {
            label: 'Folder 3',
            options: [
                {
                    value: 'file-3-1',
                    icon: <FileOutlined />,
                    label: 'File 3.1'
                },
                {
                    value: 'file-3-2',
                    icon: <FileOutlined />,
                    label: 'File 3.2'
                }
            ]
        },
        {
            label: 'Folder 4',
            options: [
                {
                    value: 'file-4-1',
                    icon: <FileOutlined />,
                    label: 'File 4.1'
                },
                {
                    value: 'file-4-2',
                    icon: <FileOutlined />,
                    label: 'File 4.2'
                },
                {
                    value: 'file-4-3',
                    icon: <FileOutlined />,
                    label: 'File 4.3'
                }
            ]
        }
    ];

    const style = {width: 320};

    return (
        <KitSpace>
            <KitSelect
                placeholder="Select a file"
                style={style}
                options={iconOptions}
                defaultActiveFirstOption={false}
            />
        </KitSpace>
    );
};

export default App;
