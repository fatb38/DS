import {faCheese, faFileDownload, faPencil, faTrashCan} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {KitRedirectCard} from '@kit/DataDisplay';
import {IKitRedirectCard} from '@kit/DataDisplay/RedirectCard/types';
import {KitSpace} from '@kit/Layout';

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

const App = () => (
    <KitSpace size="l">
        <KitRedirectCard
            title="This is a title"
            description="This is a short description"
            icon={<FontAwesomeIcon icon={faCheese} />}
            actions={actions}
        />
        <KitRedirectCard
            title="This is a title"
            description="This is a short description"
            icon={<img src="public/images/pim-logo.svg" alt="Pim logo" />}
            actions={actions}
        />
        <KitRedirectCard
            title="This is a title"
            description="This is a short description"
            coverSrc="public/images/free-copyright.jpeg"
            actions={actions}
        />
    </KitSpace>
);

export default App;
