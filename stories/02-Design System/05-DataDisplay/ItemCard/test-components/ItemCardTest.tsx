import {FunctionComponent} from 'react';
import {KitButton, KitTypography} from '@kit/General';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFileDownload, faFolder, faGripLines, faPencil, faTrashCan} from '@fortawesome/free-solid-svg-icons';
import {KitItemCard} from '@kit/DataDisplay';
import {IKitItemCard} from '@kit/DataDisplay/ItemCard/types';
import {KitSpace} from '@kit/Layout';

export const ItemCardTest: FunctionComponent = () => {
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

    const extraContentDisabled: IKitItemCard['extra'] = (
        <KitTypography.Text color="primary" disabled strong>
            2,55€
        </KitTypography.Text>
    );

    const draggableHandler: IKitItemCard['draggableHandler'] = (
        <KitButton type="tertiary" iconSize="l" icon={<FontAwesomeIcon icon={faGripLines} />} />
    );

    const draggableHandlerDisabled: IKitItemCard['draggableHandler'] = (
        <KitButton type="tertiary" iconSize="l" disabled icon={<FontAwesomeIcon icon={faGripLines} />} />
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
        <KitSpace direction="vertical">
            <KitSpace direction="vertical">
                <KitTypography.Title level="h3">ItemCard with no image</KitTypography.Title>
                <KitItemCard
                    title="Fromage Boursin ail et fines herbes - Format 150g"
                    description="Retrouvez le goût de Boursin® dans une texture délicieusement onctueuse et légère."
                    tagGroup={tagGroup}
                    breadcrumbItems={breadcrumbItems}
                    extra={extraContent}
                    activateLabel="Activé"
                    onActivate={() => {}}
                    draggableHandler={draggableHandler}
                    onSelect={() => {}}
                    actions={actions}
                />
                <KitItemCard
                    display="list"
                    title="Fromage Boursin ail et fines herbes - Format 150g"
                    description="Retrouvez le goût de Boursin® dans une texture délicieusement onctueuse et légère."
                    tagGroup={tagGroup}
                    breadcrumbItems={breadcrumbItems}
                    extra={extraContent}
                    activateLabel="Activé"
                    onActivate={() => {}}
                    draggableHandler={draggableHandler}
                    onSelect={() => {}}
                    actions={actions}
                />
            </KitSpace>
            <KitSpace direction="vertical">
                <KitTypography.Title level="h3">ItemCard with all properties</KitTypography.Title>
                <KitItemCard
                    title="Fromage Boursin ail et fines herbes - Format 150g"
                    description="Retrouvez le goût de Boursin® dans une texture délicieusement onctueuse et légère."
                    imageSrc="public/images/boursin.jpeg"
                    imageAlt="Boursin ail et fines herbes - Format 150g"
                    tagGroup={tagGroup}
                    breadcrumbItems={breadcrumbItems}
                    extra={extraContent}
                    activateLabel="Activé"
                    onActivate={() => {}}
                    draggableHandler={draggableHandler}
                    onSelect={() => {}}
                    actions={actions}
                />
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
                    onActivate={() => {}}
                    draggableHandler={draggableHandler}
                    onSelect={() => {}}
                    actions={actions}
                />
            </KitSpace>
            <KitSpace direction="vertical">
                <KitTypography.Title level="h3">ItemCard disabled</KitTypography.Title>
                <KitItemCard
                    title="Fromage Boursin ail et fines herbes - Format 150g"
                    description="Retrouvez le goût de Boursin® dans une texture délicieusement onctueuse et légère."
                    imageSrc="public/images/boursin.jpeg"
                    imageAlt="Boursin ail et fines herbes - Format 150g"
                    tagGroup={tagGroup}
                    breadcrumbItems={breadcrumbItems}
                    extra={extraContentDisabled}
                    activateLabel="Activé"
                    onActivate={() => {}}
                    draggableHandler={draggableHandlerDisabled}
                    onSelect={() => {}}
                    actions={actions}
                    disabled
                />
                <KitItemCard
                    display="list"
                    title="Fromage Boursin ail et fines herbes - Format 150g"
                    description="Retrouvez le goût de Boursin® dans une texture délicieusement onctueuse et légère."
                    imageSrc="public/images/boursin.jpeg"
                    imageAlt="Boursin ail et fines herbes - Format 150g"
                    tagGroup={tagGroup}
                    breadcrumbItems={breadcrumbItems}
                    extra={extraContentDisabled}
                    activateLabel="Activé"
                    onActivate={() => {}}
                    draggableHandler={draggableHandlerDisabled}
                    onSelect={() => {}}
                    actions={actions}
                    disabled
                />
            </KitSpace>
        </KitSpace>
    );
};
