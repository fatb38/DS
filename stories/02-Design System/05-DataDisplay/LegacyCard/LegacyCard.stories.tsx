import type {Meta, StoryObj} from '@storybook/react';
import {argTypes} from './data';
import {KitLegacyCard} from '@kit/DataDisplay';
import {KitIcon} from '@kit/General';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEllipsis, faGear, faPencil} from '@fortawesome/free-solid-svg-icons';
import KitLink from '@kit/General/Typography/Link';
import React from 'react';
import {Template} from './Template';

const meta: Meta<typeof KitLegacyCard> = {
    component: KitLegacyCard,
    //title: 'Design System/DataDisplay/LegacyCard',
    argTypes: argTypes
};

export default meta;
type Story = StoryObj<typeof KitLegacyCard>;

export const Api: Story = {
    render: Template,
    parameters: {
        chromatic: {disableSnapshot: true}
    }
};

export const Complete: Story = {
    render: () => (
        <KitLegacyCard
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
    ),
    parameters: {
        chromatic: {disableSnapshot: false}
    }
};

export const Disabled: Story = {
    render: () => (
        <KitLegacyCard
            disabled={true}
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
    ),
    parameters: {
        chromatic: {disableSnapshot: false}
    }
};

export const NoImage: Story = {
    render: () => (
        <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
            <KitLegacyCard
                separator={true}
                title="Card title"
                contentTitle="Content Title"
                contentDescription="Les promotions de mai démarrent bientôt. Pensez à télécharger vos PLV."
            />
            <KitLegacyCard
                onContentTitleClick={() => console.log('Redirect')}
                separator={true}
                title="Card title"
                contentTitle="Content Title"
                contentDescription="Les promotions de mai démarrent bientôt. Pensez à télécharger vos PLV."
            />
        </div>
    ),
    parameters: {
        chromatic: {disableSnapshot: false}
    }
};
