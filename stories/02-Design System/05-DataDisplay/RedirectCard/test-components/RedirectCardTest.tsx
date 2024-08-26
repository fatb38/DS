import {FunctionComponent} from 'react';
import {KitTypography} from '@kit/General';
import {KitSpace} from '@kit/Layout';
import {KitRedirectCard} from '@kit/DataDisplay';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheese, faFileDownload, faPencil, faTrashCan} from '@fortawesome/free-solid-svg-icons';
import {IKitRedirectCard} from '@kit/DataDisplay/RedirectCard/types';

const actions: IKitRedirectCard['actions'] = [
    {
        key: '1',
        label: 'Download image',
        icon: <FontAwesomeIcon icon={faFileDownload} />,
        onClick: () => console.log('Click on download image')
    },
    {
        key: '2',
        label: 'Edit the content',
        icon: <FontAwesomeIcon icon={faPencil} />,
        onClick: () => console.log('Click on edit action')
    },
    {
        key: '3',
        label: 'Delete this item',
        icon: <FontAwesomeIcon icon={faTrashCan} />,
        onClick: () => console.log('Click on delete action')
    }
];

export const RedirectCardTest: FunctionComponent = () => (
    <div>
        <KitTypography.Title level="h3">RedirectCard</KitTypography.Title>

        <KitSpace direction="horizontal">
            <KitRedirectCard
                title="This is a title"
                description="This is a short description"
                icon={<FontAwesomeIcon icon={faCheese} />}
            />
            <KitRedirectCard
                title="This is a title"
                description="This is a short description"
                icon={<FontAwesomeIcon icon={faCheese} />}
                actions={actions}
            />
            <KitRedirectCard
                title="This is a title"
                description="This is a short description"
                coverSrc="public/images/free-copyright.jpeg"
                actions={actions}
            />
        </KitSpace>

        <KitTypography.Title level="h3">RedirectCard disabled</KitTypography.Title>

        <KitSpace direction="horizontal">
            <KitRedirectCard
                title="This is a title"
                description="This is a short description"
                icon={<FontAwesomeIcon icon={faCheese} />}
                disabled
            />
            <KitRedirectCard
                title="This is a title"
                description="This is a short description"
                icon={<FontAwesomeIcon icon={faCheese} />}
                actions={actions}
                disabled
            />
            <KitRedirectCard
                title="This is a title"
                description="This is a short description"
                coverSrc="public/images/free-copyright.jpeg"
                actions={actions}
                disabled
            />
        </KitSpace>
    </div>
);
