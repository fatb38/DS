import {faArrowsUpDownLeftRight, faPencil, faTrashCan} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {KitCard} from '@kit/DataDisplay';
import {IKitTagConfig} from '@kit/DataDisplay/Tag/types';
import {useState} from 'react';
import {IKitActionButton} from '@kit/DataDisplay/types';

const App = () => {
    const [selected, setSelected] = useState(false);
    const [activated, setActivated] = useState(false);

    const tags: IKitTagConfig[] = [
        {idCardProps: {description: 'Multimédia'}, disabled: true},
        {idCardProps: {description: 'Promo 2021'}, disabled: true},
        {idCardProps: {description: 'Alimentation'}, disabled: true},
        {idCardProps: {description: 'Fromage'}, disabled: true}
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
            disabled={true}
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

export default App;
