import {faEllipsisVertical, faGear, faPencil} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {KitCard} from '@kit/DataDisplay';
import {KitSpace} from '@kit/Layout';
import React from 'react';

const App = () => {
    return (
        <KitSpace direction="vertical">
            <KitCard
                contentTitle="Promos mai"
                contentDescription="Les promotions de mai démarrent bientôt. Pensez à télécharger vos PLV."
                actions={[
                    <FontAwesomeIcon icon={faGear} key="setting" onClick={() => console.log('click button settings')} />
                ]}
            />
            <KitCard
                contentTitle="Promos mai"
                contentDescription="Les promotions de mai démarrent bientôt. Pensez à télécharger vos PLV."
                actions={[
                    <FontAwesomeIcon
                        icon={faGear}
                        key="setting"
                        onClick={() => console.log('click button settings')}
                    />,
                    <FontAwesomeIcon icon={faPencil} key="edit" onClick={() => console.log('click button edit')} />
                ]}
            />
            <KitCard
                contentTitle="Promos mai"
                contentDescription="Les promotions de mai démarrent bientôt. Pensez à télécharger vos PLV."
                actions={[
                    <FontAwesomeIcon
                        icon={faGear}
                        key="setting"
                        onClick={() => console.log('click button settings')}
                    />,
                    <FontAwesomeIcon icon={faPencil} key="edit" onClick={() => console.log('click button edit')} />,
                    <FontAwesomeIcon
                        icon={faEllipsisVertical}
                        key="ellipsis"
                        onClick={() => console.log('click button ellipsis')}
                    />
                ]}
            />
        </KitSpace>
    );
};

export default App;
