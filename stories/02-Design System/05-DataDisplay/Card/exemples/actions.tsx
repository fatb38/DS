import {EditOutlined, EllipsisOutlined, SettingOutlined} from '@ant-design/icons';
import {KitCard} from '@kit/DataDisplay';
import {KitSpace} from '@kit/Layout';
import React from 'react';

const App = () => {
    return (
        <KitSpace direction="vertical">
            <KitCard
                contentTitle="Promos mai"
                contentDescription="Les promotions de mai démarrent bientôt. Pensez à télécharger vos PLV."
                actions={[<SettingOutlined key="setting" onClick={() => console.log('click button settings')} />]}
            />
            <KitCard
                contentTitle="Promos mai"
                contentDescription="Les promotions de mai démarrent bientôt. Pensez à télécharger vos PLV."
                actions={[
                    <SettingOutlined key="setting" onClick={() => console.log('click button settings')} />,
                    <EditOutlined key="edit" onClick={() => console.log('click button edit')} />
                ]}
            />
            <KitCard
                contentTitle="Promos mai"
                contentDescription="Les promotions de mai démarrent bientôt. Pensez à télécharger vos PLV."
                actions={[
                    <SettingOutlined key="setting" onClick={() => console.log('click button settings')} />,
                    <EditOutlined key="edit" onClick={() => console.log('click button edit')} />,
                    <EllipsisOutlined key="ellipsis" onClick={() => console.log('click button ellipsis')} />
                ]}
            />
        </KitSpace>
    );
};

export default App;
