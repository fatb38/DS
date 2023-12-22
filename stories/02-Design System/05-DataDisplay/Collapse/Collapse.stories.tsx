import type {Meta, StoryObj} from '@storybook/react';
import {KitCollapse} from '@kit/DataDisplay';
import {argTypes} from './data';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faClock} from '@fortawesome/free-regular-svg-icons';
import {faMinus, faPlus} from '@fortawesome/free-solid-svg-icons';
import {Template} from './Template';

const meta: Meta<typeof KitCollapse> = {
    component: KitCollapse,
    title: 'Design System/DataDisplay/Collapse',
    argTypes: argTypes
};

export default meta;
type Story = StoryObj<typeof KitCollapse>;

export const Api: Story = {
    render: Template,
    parameters: {
        chromatic: {disableSnapshot: true}
    }
};

const text = `
        A dog is a type of domesticated animal.
        Known for its loyalty and faithfulness,
        it can be found as a welcome guest in many households across the world.
    `;

export const Basic: Story = {
    render: () => {
        const items = [
            {
                key: '1',
                label: 'This is panel header 1',
                children: <p>{text}</p>
            },
            {
                key: '2',
                label: 'This is panel header 2',
                children: <p>{text}</p>
            },
            {
                key: '3',
                label: 'This is panel header 3',
                children: <p>{text}</p>
            }
        ];

        return (
            <div style={{width: '100%'}}>
                <KitCollapse items={items} defaultActiveKey={1} />
            </div>
        );
    },
    parameters: {
        chromatic: {disableSnapshot: false}
    }
};

export const Size: Story = {
    render: () => {
        const items = [
            {
                key: '1',
                label: 'This is panel header 1',
                children: <p>{text}</p>
            }
        ];
        return (
            <div style={{width: '100%', display: 'flex', flexDirection: 'column', gap: '40px'}}>
                <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
                    <KitCollapse size="small" items={items} />
                    <KitCollapse collapsible="disabled" size="small" items={items} />
                    <KitCollapse defaultActiveKey="1" collapsible="disabled" size="small" items={items} />
                </div>
                <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
                    <KitCollapse items={items} />
                    <KitCollapse defaultActiveKey="1" collapsible="disabled" items={items} />
                </div>
                <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
                    <KitCollapse size="large" items={items} />
                    <KitCollapse defaultActiveKey="1" collapsible="disabled" size="large" items={items} />
                </div>
            </div>
        );
    },

    parameters: {
        chromatic: {disableSnapshot: false}
    }
};

export const CustomHeader: Story = {
    render: () => {
        const items = [
            {
                key: '1',
                label: (
                    <KitCollapse.Header
                        icon={<FontAwesomeIcon icon={faClock} />}
                        imageSrc="/public/images/catalog.jpg"
                        title="Title 2"
                        description="This is a description 2"
                        tagContent={'sprint #6'}
                    />
                ),
                children: <p>{text}</p>,
                isActive: true,
                extra: (
                    <KitCollapse.HeaderExtra
                        onSelectChange={e => console.log('onSelectChange :', e)}
                        actions={[
                            {
                                icon: <FontAwesomeIcon icon={faPlus} />,
                                label: 'Add',
                                onClick: () => console.log('onClick: Add')
                            },
                            {
                                icon: <FontAwesomeIcon icon={faMinus} />,
                                label: 'Subtract',
                                onClick: () => console.log('onClick: Subtract')
                            }
                        ]}
                    />
                )
            }
        ];

        return (
            <div style={{width: '100%', display: 'flex', flexDirection: 'column', gap: '20px'}}>
                <KitCollapse items={items} />
                <KitCollapse items={items} activeKey="1" />
            </div>
        );
    },

    parameters: {
        chromatic: {disableSnapshot: false}
    }
};
