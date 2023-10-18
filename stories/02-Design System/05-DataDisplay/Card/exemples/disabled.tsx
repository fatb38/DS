import React, {useState} from 'react';
import {KitCard} from '@kit/DataDisplay';
import {KitSpace} from '@kit/Layout';
import {KitSwitch} from '@kit/DataEntry';
import {KitIcon, KitTypography} from '@kit/General';
import KitLink from '@kit/General/Typography/Link';
import {EditOutlined, EllipsisOutlined, SettingOutlined} from '@ant-design/icons';

const App = () => {
    const [isDisabled, setDisabled] = useState(true);

    return (
        <KitSpace direction="vertical">
            <KitTypography.Text>
                Disabled: <KitSwitch defaultChecked onChange={setDisabled} />
            </KitTypography.Text>

            <KitCard
                disabled={isDisabled}
                title="Card title"
                onContentTitleClick={() => console.log('Redirect')}
                extra={<KitLink href="#">More</KitLink>}
                contentTitle="Content Title"
                contentDescription="Les promotions de mai démarrent bientôt. Pensez à télécharger vos PLV."
                cover={<img alt="example" src="public/images/free-copyright.jpeg" />}
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
