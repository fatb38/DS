import type {Meta, StoryObj} from '@storybook/react';
import {KitTabs} from '@kit/DataDisplay';
import {argTypes, Template} from './data';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAppleAlt, faRobot} from '@fortawesome/free-solid-svg-icons';

const meta: Meta<typeof KitTabs> = {
    component: KitTabs,
    title: 'Design System/DataDisplay/Tabs',
    argTypes: argTypes
};

export default meta;
type Story = StoryObj<typeof KitTabs>;

export const Api: Story = {
    render: Template,
    parameters: {
        chromatic: {disableSnapshot: true}
    }
};

export const Basic: Story = {
    render: () => {
        const items = [
            {
                key: '1',
                label: `Tab 1`,
                children: `Content of Tab Pane 1`
            },
            {
                key: '2',
                label: `Tab 2`,
                disabled: true
            },
            {
                key: '3',
                label: `Tab 3`
            }
        ];
        return (
            <div style={{display: 'flex', flexDirection: 'column', gap: '60px'}}>
                <KitTabs defaultActiveKey="1" items={items} />
                <KitTabs defaultActiveKey="1" items={items} centered />
                <KitTabs defaultActiveKey="1" items={items} type="card" />
                <KitTabs defaultActiveKey="1" items={items} type="card" centered />
                <KitTabs
                    defaultActiveKey="2"
                    items={[faAppleAlt, faRobot].map((Icon, i) => {
                        const id = String(i + 1);

                        return {
                            label: (
                                <span>
                                    <FontAwesomeIcon icon={Icon} style={{marginRight: '6px'}} />
                                    Tab {id}
                                </span>
                            ),
                            key: id,
                            children: `Tab ${id}`
                        };
                    })}
                />
            </div>
        );
    },

    parameters: {
        chromatic: {disableSnapshot: false}
    }
};

export const Size: Story = {
    render: () => {
        return (
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <KitTabs
                    defaultActiveKey="1"
                    size="small"
                    style={{marginBottom: 32}}
                    items={new Array(3).fill(null).map((_, i) => {
                        const id = String(i + 1);
                        return {
                            label: `Tab ${id}`,
                            key: id,
                            children: `Content of tab ${id}`
                        };
                    })}
                />
                <KitTabs
                    defaultActiveKey="1"
                    style={{marginBottom: 32}}
                    items={new Array(3).fill(null).map((_, i) => {
                        const id = String(i + 1);
                        return {
                            label: `Tab ${id}`,
                            key: id,
                            children: `Content of tab ${id}`
                        };
                    })}
                />
                <KitTabs
                    defaultActiveKey="1"
                    size="large"
                    style={{marginBottom: 32}}
                    items={new Array(3).fill(null).map((_, i) => {
                        const id = String(i + 1);
                        return {
                            label: `Tab ${id}`,
                            key: id,
                            children: `Content of tab ${id}`
                        };
                    })}
                />
                <KitTabs
                    type="card"
                    defaultActiveKey="1"
                    size="small"
                    style={{marginBottom: 32}}
                    items={new Array(3).fill(null).map((_, i) => {
                        const id = String(i + 1);
                        return {
                            label: `Tab ${id}`,
                            key: id,
                            children: `Content of tab ${id}`
                        };
                    })}
                />
                <KitTabs
                    type="card"
                    defaultActiveKey="1"
                    style={{marginBottom: 32}}
                    items={new Array(3).fill(null).map((_, i) => {
                        const id = String(i + 1);
                        return {
                            label: `Tab ${id}`,
                            key: id,
                            children: `Content of tab ${id}`
                        };
                    })}
                />
                <KitTabs
                    type="card"
                    defaultActiveKey="1"
                    size="large"
                    style={{marginBottom: 32}}
                    items={new Array(3).fill(null).map((_, i) => {
                        const id = String(i + 1);
                        return {
                            label: `Tab ${id}`,
                            key: id,
                            children: `Content of tab ${id}`
                        };
                    })}
                />
            </div>
        );
    },

    parameters: {
        chromatic: {disableSnapshot: false}
    }
};

export const Position: Story = {
    render: () => {
        return (
            <div style={{display: 'flex', flexDirection: 'column', gap: '40px'}}>
                <KitTabs
                    tabPosition="top"
                    items={new Array(3).fill(null).map((_, i) => {
                        const id = String(i + 1);
                        return {
                            label: `Tab ${id}`,
                            key: id,
                            children: `Content of Tab ${id}`
                        };
                    })}
                />
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <KitTabs
                        tabPosition="left"
                        items={new Array(3).fill(null).map((_, i) => {
                            const id = String(i + 1);
                            return {
                                label: `Tab ${id}`,
                                key: id,
                                children: `Content of Tab ${id}`
                            };
                        })}
                    />
                    <KitTabs
                        tabPosition="right"
                        items={new Array(3).fill(null).map((_, i) => {
                            const id = String(i + 1);
                            return {
                                label: `Tab ${id}`,
                                key: id,
                                children: `Content of Tab ${id}`
                            };
                        })}
                    />
                </div>
                <KitTabs
                    tabPosition="bottom"
                    items={new Array(3).fill(null).map((_, i) => {
                        const id = String(i + 1);
                        return {
                            label: `Tab ${id}`,
                            key: id,
                            children: `Content of Tab ${id}`
                        };
                    })}
                />
            </div>
        );
    },

    parameters: {
        chromatic: {disableSnapshot: false}
    }
};
