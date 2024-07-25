import {faFileDownload, faFolder, faGripLines, faPencil, faTrashCan} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {KitItemCard} from '@kit/DataDisplay';
import {useState} from 'react';
import {KitSpace} from '@kit/Layout';
import {KitButton, KitTypography} from '@kit/General';
import {IKitItemCard} from '@kit/DataDisplay/ItemCard/types';

const App = () => {
    const [selected, setSelected] = useState(false);
    const [activated, setActivated] = useState(false);

    const tagGroup: IKitItemCard['tagGroup'] = {
        tags: [
            {idCardProps: {description: 'Fromage'}, type: 'primary'},
            {idCardProps: {description: 'Fromage frais'}, type: 'primary'},
            {idCardProps: {description: 'Ail et fines herbes'}, type: 'primary'},
            {idCardProps: {description: 'Boursin'}, type: 'primary'}
        ],
        othersTagType: 'primary'
    };

    const breadcrumbItems: IKitItemCard['breadcrumbItems'] = [
        {
            title: (
                <span>
                    <FontAwesomeIcon icon={faFolder} /> Produit laitier
                </span>
            )
        },
        {
            title: 'Fromage'
        },
        {
            title: 'Fromage frais'
        },
        {
            title: 'Boursin'
        }
    ];

    const extraContent: IKitItemCard['extra'] = (
        <KitTypography.Text color="primary" strong>
            2,55€
        </KitTypography.Text>
    );

    const draggableHandler: IKitItemCard['draggableHandler'] = (
        <KitButton type="tertiary" iconSize="l" icon={<FontAwesomeIcon icon={faGripLines} />} />
    );

    const actions: IKitItemCard['actions'] = [
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

    return (
        <KitSpace direction="vertical" size="l">
            <KitSpace direction="vertical">
                <KitTypography.Text strong>ItemCard (card)</KitTypography.Text>
                <KitItemCard
                    title="Fromage Boursin ail et fines herbes - Format 150g"
                    description="Retrouvez le goût de Boursin® dans une texture délicieusement onctueuse et légère."
                    imageSrc="public/images/boursin.jpeg"
                    imageAlt="Boursin ail et fines herbes - Format 150g"
                    tagGroup={tagGroup}
                    breadcrumbItems={breadcrumbItems}
                    extra={extraContent}
                    activateLabel="Activé"
                    activated={activated}
                    onActivate={() => setActivated(prev => !prev)}
                    draggableHandler={draggableHandler}
                    selected={selected}
                    onSelect={() => setSelected(prev => !prev)}
                    actions={actions}
                />
            </KitSpace>
            <KitSpace direction="vertical">
                <KitTypography.Text strong>ItemCard (list)</KitTypography.Text>
                <KitItemCard
                    display="list"
                    title="Fromage Boursin ail et fines herbes - Format 150g"
                    description="Retrouvez le goût de Boursin® dans une texture délicieusement onctueuse et légère."
                    imageSrc="public/images/boursin.jpeg"
                    imageAlt="Boursin ail et fines herbes - Format 150g"
                    tagGroup={tagGroup}
                    breadcrumbItems={breadcrumbItems}
                    extra={extraContent}
                    activateLabel="Activé"
                    activated={activated}
                    onActivate={() => setActivated(prev => !prev)}
                    draggableHandler={draggableHandler}
                    selected={selected}
                    onSelect={() => setSelected(prev => !prev)}
                    actions={actions}
                />
            </KitSpace>
        </KitSpace>
    );
};

export default App;
