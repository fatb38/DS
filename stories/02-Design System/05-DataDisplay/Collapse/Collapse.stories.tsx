import type {Meta, StoryObj} from '@storybook/react';
import {KitCollapse} from '@kit/DataDisplay';
import {argTypes} from './data';
import React from 'react';
import {Template} from './Template';
import {BasicCollapseTest} from './test-components/BasicCollapseTest.tsx';
import {SizeCollapseTest} from './test-components/SizeCollapseTest.tsx';
import {CustomHeaderCollapseTest} from './test-components/CustomHeaderCollapseTest.tsx';

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

export const ChromaticTest: Story = {
    render: () => (
        <div style={{display: 'flex', gap: '50px'}}>
            <div style={{width: '600px'}}>
                <SizeCollapseTest />
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
                </div>
                <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
                    <KitCollapse items={items} />
                    <KitCollapse collapsible="disabled" items={items} />
                </div>
                <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
                    <KitCollapse size="large" items={items} />
                    <KitCollapse collapsible="disabled" size="large" items={items} />
                </div>
            </div>
        </div>
    )
};

export const CustomHeader: Story = {
    render: () => {
        const items = [
            {
                key: '1',
                label: (
                    <KitCollapse.Header
                        imageSrc="/public/images/catalog.jpg"
                        title="Title 2"
                        description="This is a description 2"
                        tagContent={'sprint #6'}
                        onSwitchChange={checked => console.log(checked)}
                    />
                ),
                children: <p>{text}</p>,
                isActive: true,
                extra: (
                    <KitCollapse.HeaderExtra
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
                <KitCollapse collapsible="disabled" items={items} />
            </div>
        );
    },

    parameters: {
        chromatic: {disableSnapshot: false}
    }
};
