import React, {FC} from 'react';
import {KitIcon, KitTypography} from '@kit/General';
import {KitCard} from '@kit/DataDisplay';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import KitLink from '@kit/General/Typography/Link.tsx';
import {faEllipsis, faGear, faPencil} from '@fortawesome/free-solid-svg-icons';

export const CompleteCardTest: FC = () => (
    <div>
        <KitTypography.Title level="h3">Complete card</KitTypography.Title>
        <KitCard
            title="Card title"
            onContentTitleClick={() => console.log('Redirect')}
            extra={<KitLink href="#">More</KitLink>}
            contentTitle="Content Title"
            contentDescription="Les promotions de mai démarrent bientôt. Pensez à télécharger vos PLV."
            cover={<img alt="example" src="public/images/free-copyright.jpeg" />}
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
                    icon={<FontAwesomeIcon icon={faEllipsis} />}
                    key="ellipsis"
                    onClick={() => console.log('click button ellipsis')}
                />
            ]}
        />
    </div>
);
