import React, {FC} from 'react';
import {KitTypography} from '@kit/General';
import {IKitCardAction} from '@kit/DataDisplay/Card/types';
import {IKitTagConfig} from '@kit/DataDisplay/Tag/types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowsUpDownLeftRight, faPencil, faTrashCan} from '@fortawesome/free-solid-svg-icons';
import {KitCard} from '@kit/DataDisplay';

export const CompleteCardTest: FC = () => {
    const tags: IKitTagConfig[] = [
        {wording: 'Multimédia'},
        {wording: 'Promo 2021'},
        {wording: 'Alimentation'},
        {wording: 'Fromage'}
    ];

    const actions: IKitCardAction[] = [
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
        <div>
            <KitTypography.Title level="h3">Complete card</KitTypography.Title>

            <KitCard
                actions={actions}
                brandingBar={true}
                description="Retrouvez le goût de Boursin® dans une texture délicieusement onctueuse et légère."
                onActivate={() => {}}
                onSelect={() => {}}
                previewSrc="public/images/boursin.jpeg"
                extra="4,99€"
                tags={tags}
                title="Fromage Boursin ail et fines herbes - Format 150g"
            />

            <KitTypography.Title level="h3">Complete card disabled</KitTypography.Title>

            <KitCard
                disabled
                actions={actions}
                brandingBar={true}
                description="Retrouvez le goût de Boursin® dans une texture délicieusement onctueuse et légère."
                onActivate={() => {}}
                onSelect={() => {}}
                previewSrc="public/images/boursin.jpeg"
                extra="4,99€"
                tags={tags}
                title="Fromage Boursin ail et fines herbes - Format 150g"
            />
        </div>
    );
};
