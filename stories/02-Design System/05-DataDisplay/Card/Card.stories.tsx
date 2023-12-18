import type {Meta, StoryObj} from '@storybook/react';
import {argTypes} from './data';
import {KitCard} from '@kit/DataDisplay';
import {KitIcon} from '@kit/General';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEllipsis, faGear, faPencil} from '@fortawesome/free-solid-svg-icons';
import KitLink from '@kit/General/Typography/Link';
import React from 'react';
import {Template} from './Template';

const meta: Meta<typeof KitCard> = {
    component: KitCard,
    title: 'Design System/DataDisplay/Card',
    argTypes: argTypes
};

export default meta;
type Story = StoryObj<typeof KitCard>;

export const Api: Story = {
    render: Template,
    parameters: {
        chromatic: {disableSnapshot: true}
    }
};

export const Complete: Story = {
    render: () => (
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
    ),
    parameters: {
        chromatic: {disableSnapshot: false}
    }
};

export const Disabled: Story = {
    render: () => (
        <KitCard
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
            <KitCard
                separator={true}
                title="Card title"
                contentTitle="Content Title"
                contentDescription="Les promotions de mai démarrent bientôt. Pensez à télécharger vos PLV."
            />
            <KitCard
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
