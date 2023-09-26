import {EditOutlined, EllipsisOutlined, SettingOutlined} from '@ant-design/icons';
import {KitCard} from '@kit/DataDisplay/Card';
import KitLink from '@kit/General/Typography/Link';
import React from 'react';

const App = () => {
    return (
        <KitCard
            title="Card Title"
            contentTitle="Promos mai"
            contentDescription="Les promotions de mai démarrent bientôt. Pensez à télécharger vos PLV."
            extra={<KitLink href="#">More</KitLink>}
            cover={<img alt="example" src={window.location.origin + '/public/images/free-copyright.jpeg'} />}
            actions={[
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />
            ]}
        />
    );
};

export default App;
