import React from 'react';
import {KitSpace, KitButton, KitTooltip} from '@kit/index';
import {DownloadOutlined} from '@ant-design/icons';

const App = ({}) => {
    return (
        <KitSpace.Compact block>
            <KitButton type="primary">Button 1</KitButton>
            <KitButton type="primary">Button 2</KitButton>
            <KitButton type="primary">Button 3</KitButton>
            <KitButton type="primary">Button 4</KitButton>
            <KitTooltip title="Tooltip">
                <KitButton type="primary" disabled>
                    <DownloadOutlined />
                </KitButton>
            </KitTooltip>
            <KitTooltip title="Tooltip">
                <KitButton type="primary">
                    <DownloadOutlined />
                </KitButton>
            </KitTooltip>
        </KitSpace.Compact>
    );
};

export default App;
