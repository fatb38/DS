import React from 'react';
import {KitButton, KitSpace} from '@kit/index';
import {SearchOutlined} from '@ant-design/icons';

const App = ({}) => {
    return (
        <KitSpace direction="vertical">
            <KitSpace>
                <KitButton type="primary">Primary</KitButton>
                <KitButton type="primary" disabled>
                    Primary(disabled)
                </KitButton>
                <KitButton danger type="primary">
                    Danger Text
                </KitButton>
                <KitButton danger type="primary" disabled>
                    Danger Text(disabled)
                </KitButton>
            </KitSpace>
            <KitSpace>
                <KitButton>Default</KitButton>
                <KitButton disabled>Default(disabled)</KitButton>
                <KitButton danger>Danger Default</KitButton>
                <KitButton danger disabled>
                    Danger Default(disabled)
                </KitButton>
            </KitSpace>
            <KitSpace>
                <KitButton type="link">Link</KitButton>
                <KitButton type="link" disabled>
                    Link(disabled)
                </KitButton>
                <KitButton type="link" danger>
                    Danger Link
                </KitButton>
                <KitButton type="link" danger disabled>
                    Danger Link(disabled)
                </KitButton>
            </KitSpace>
            <KitSpace>
                <KitButton type="segmented" icon={<SearchOutlined />} />
                <KitButton type="segmented" icon={<SearchOutlined />} disabled />
                <KitButton type="segmented" icon={<SearchOutlined />} danger />
                <KitButton type="segmented" icon={<SearchOutlined />} danger disabled />
            </KitSpace>
        </KitSpace>
    );
};

export default App;
