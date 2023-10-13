import React, {useState} from 'react';
import {KitCard} from '@kit/DataDisplay';
import {KitSpace} from '@kit/Layout';
import {KitSwitch} from '@kit/DataEntry';
import {KitTypography} from '@kit/General';
import KitLink from '@kit/General/Typography/Link';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEllipsis, faGear, faPencil} from '@fortawesome/free-solid-svg-icons';

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
                    <FontAwesomeIcon
                        icon={faGear}
                        key="setting"
                        onClick={() => console.log('click button settings')}
                    />,
                    <FontAwesomeIcon icon={faPencil} key="edit" onClick={() => console.log('click button edit')} />,
                    <FontAwesomeIcon
                        icon={faEllipsis}
                        key="ellipsis"
                        onClick={() => console.log('click button ellipsis')}
                    />
                ]}
            />
        </KitSpace>
    );
};

export default App;
