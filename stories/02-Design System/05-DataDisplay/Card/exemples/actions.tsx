import {EditOutlined, EllipsisOutlined, SettingOutlined} from '@ant-design/icons';
import {KitCard} from '@kit/DataDisplay';
import {KitSpace} from '@kit/Layout';
import React from 'react';
import {KitIcon} from '@kit/General';

const App = () => {
    return (
        <KitSpace direction="vertical">
            <KitCard
                contentTitle="Promos mai"
                contentDescription="Les promotions de mai démarrent bientôt. Pensez à télécharger vos PLV."
                actions={[
                    <KitIcon
                        icon={<SettingOutlined />}
                        key="setting"
                        onClick={() => console.log('click button settings')}
                    />
                ]}
            />
            <KitCard
                contentTitle="Promos mai"
                contentDescription="Les promotions de mai démarrent bientôt. Pensez à télécharger vos PLV."
                actions={[
                    <KitIcon
                        icon={<SettingOutlined />}
                        key="setting"
                        onClick={() => console.log('click button settings')}
                    />,
                    <KitIcon icon={<EditOutlined />} key="edit" onClick={() => console.log('click button edit')} />
                ]}
            />
            <KitCard
                contentTitle="Promos mai"
                contentDescription="Les promotions de mai démarrent bientôt. Pensez à télécharger vos PLV."
                actions={[
                    <KitIcon
                        icon={<SettingOutlined />}
                        key="setting"
                        onClick={() => console.log('click button settings')}
                    />,
                    <KitIcon icon={<EditOutlined />} key="edit" onClick={() => console.log('click button edit')} />,
                    <KitIcon
                        icon={<EllipsisOutlined />}
                        key="ellipsis"
                        onClick={() => console.log('click button ellipsis')}
                    />
                ]}
            />
        </KitSpace>
    );
};

export default App;
