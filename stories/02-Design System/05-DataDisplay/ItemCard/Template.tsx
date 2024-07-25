import {useState} from 'react';
import {IEditorTemplate} from '../../../types';
import {KitItemCard} from '@kit/DataDisplay';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowsUpDownLeftRight, faFolder, faGripLines, faPencil, faTrashCan} from '@fortawesome/free-solid-svg-icons';
import {IKitItemCard} from '@kit/DataDisplay/ItemCard/types';
import {KitButton, KitTypography} from '@kit/General';
import {KitSpace} from '@kit/Layout';

export const Template = ({
    title = 'Fromage Boursin ail et fines herbes - Format 150g',
    description = 'Retrouvez le goût de Boursin® dans une texture délicieusement onctueuse et légère.',
    imageSrc = 'public/images/boursin.jpeg',
    ...args
}) => <KitItemCard title={title} description={description} imageSrc={imageSrc} {...args} />;

export const EditorTemplate: IEditorTemplate = () => {
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

    const tagDisabledGroup: IKitItemCard['tagGroup'] = {
        ...tagGroup,
        othersTagDisabled: true
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
        <KitButton type="tertiary" disabled iconSize="l" icon={<FontAwesomeIcon icon={faGripLines} />} />
    );

    const actions: IKitItemCard['actions'] = [
        {
            key: '1',
            label: 'Drag the content',
            icon: <FontAwesomeIcon icon={faArrowsUpDownLeftRight} />,
            onClick: () => console.log('Click on drag action')
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
            <KitSpace direction="horizontal">
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
                <KitItemCard
                    title="Fromage Boursin ail et fines herbes - Format 150g"
                    description="Retrouvez le goût de Boursin® dans une texture délicieusement onctueuse et légère."
                    imageSrc="public/images/boursin.jpeg"
                    imageAlt="Boursin ail et fines herbes - Format 150g"
                    tagGroup={tagDisabledGroup}
                    breadcrumbItems={breadcrumbItems}
                    extra={extraContentDisabled}
                    activateLabel="Activé"
                    activated={activated}
                    onActivate={() => setActivated(prev => !prev)}
                    draggableHandler={draggableHandlerDisabled}
                    selected={selected}
                    onSelect={() => setSelected(prev => !prev)}
                    actions={actions}
                    disabled
                />
            </KitSpace>
            <KitSpace direction="vertical">
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
                <KitItemCard
                    display="list"
                    title="Fromage Boursin ail et fines herbes - Format 150g"
                    description="Retrouvez le goût de Boursin® dans une texture délicieusement onctueuse et légère."
                    imageSrc="public/images/boursin.jpeg"
                    imageAlt="Boursin ail et fines herbes - Format 150g"
                    tagGroup={tagDisabledGroup}
                    breadcrumbItems={breadcrumbItems}
                    extra={extraContentDisabled}
                    activateLabel="Activé"
                    activated={activated}
                    onActivate={() => setActivated(prev => !prev)}
                    draggableHandler={draggableHandlerDisabled}
                    selected={selected}
                    onSelect={() => setSelected(prev => !prev)}
                    actions={actions}
                    disabled
                />
            </KitSpace>
        </KitSpace>
    );
};
EditorTemplate.path = 'components.ItemCard';
EditorTemplate.title = 'ItemCard';
