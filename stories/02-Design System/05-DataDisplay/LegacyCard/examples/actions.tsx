import {faEllipsisVertical, faGear, faPencil} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {KitLegacyCard} from '@kit/DataDisplay';
import {KitSpace} from '@kit/Layout';
import React from 'react';
import {KitIcon} from '@kit/General';

const App = () => {
    return (
        <KitSpace direction="vertical">
            <KitLegacyCard
                contentTitle="Promos mai"
                contentDescription="Les promotions de mai démarrent bientôt. Pensez à télécharger vos PLV."
                actions={[
                    <KitIcon
                        icon={<FontAwesomeIcon icon={faGear} />}
                        key="setting"
                        onClick={() => console.log('click button settings')}
                    />
                ]}
            />
            <KitLegacyCard
                contentTitle="Promos mai"
                contentDescription="Les promotions de mai démarrent bientôt. Pensez à télécharger vos PLV."
                actions={[
                    <KitIcon
                        icon={<FontAwesomeIcon icon={faGear} />}
                        key="setting"
                        onClick={() => console.log('click button settings')}
                    />,
                    <KitIcon
                        icon={<FontAwesomeIcon icon={faPencil} />}
                        key="edit"
                        onClick={() => console.log('click button edit')}
                    />
                ]}
            />
            <KitLegacyCard
                contentTitle="Promos mai"
                contentDescription="Les promotions de mai démarrent bientôt. Pensez à télécharger vos PLV."
                actions={[
                    <KitIcon
                        icon={<FontAwesomeIcon icon={faGear} />}
                        key="setting"
                        onClick={() => console.log('click button settings')}
                    />,
                    <KitIcon
                        icon={<FontAwesomeIcon icon={faPencil} />}
                        key="edit"
                        onClick={() => console.log('click button edit')}
                    />,
                    <KitIcon
                        icon={<FontAwesomeIcon icon={faEllipsisVertical} />}
                        key="ellipsis"
                        onClick={() => console.log('click button ellipsis')}
                    />
                ]}
            />
        </KitSpace>
    );
};

export default App;
