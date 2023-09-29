import React from 'react';
import {KitBadge} from '@kit/DataDisplay/';
import {KitSpace} from '@kit/Layout/';
import {KitButton} from '@kit/General';
import {NotificationOutlined} from '@ant-design/icons';

const App = () => {
    return (
        <KitSpace size="s">
            <KitBadge dot>
                <NotificationOutlined style={{fontSize: 16}} />
            </KitBadge>
            <KitBadge dot>
                <KitButton type="link">Link</KitButton>
            </KitBadge>
        </KitSpace>
    );
};

export default App;
