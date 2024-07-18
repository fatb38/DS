import {useState} from 'react';
import {IEditorTemplate} from '../../../types';
import {KitCard} from '@kit/DataDisplay';
import {IKitTagConfig} from '@kit/DataDisplay/Tag/types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowsUpDownLeftRight, faPencil, faTrashCan} from '@fortawesome/free-solid-svg-icons';
import {IKitActionButton} from '@kit/DataDisplay/types';

export const Template = ({title = 'This is a title', ...args}) => <KitCard title={title} {...args} />;

export const EditorTemplate: IEditorTemplate = () => {
    const [selected, setSelected] = useState(false);
    const [activated, setActivated] = useState(false);

    const tags: IKitTagConfig[] = [
        {idCardProps: {description: 'Multimédia'}},
        {idCardProps: {description: 'Promo 2021'}},
        {idCardProps: {description: 'Alimentation'}},
        {idCardProps: {description: 'Fromage'}}
    ];

    const actions: IKitActionButton[] = [
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
        <KitCard
            actions={actions}
            activated={activated}
            brandingBar={true}
            description="Retrouvez le goût de Boursin® dans une texture délicieusement onctueuse et légère."
            onActivate={() => setActivated(prev => !prev)}
            onSelect={() => setSelected(prev => !prev)}
            previewSrc="public/images/boursin.jpeg"
            extra="4,99€"
            selected={selected}
            tags={tags}
            title="Fromage Boursin ail et fines herbes - Format 150g"
        />
    );
};
EditorTemplate.path = 'components.Card';
EditorTemplate.title = 'Card';
