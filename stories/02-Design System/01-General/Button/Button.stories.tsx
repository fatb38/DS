import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import {KitButton} from '@kit/General/';
import {argTypes} from './data';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFilter, faMagnifyingGlass, faPowerOff, faRotateRight} from '@fortawesome/free-solid-svg-icons';
import {KitSpace} from '@kit/Layout';
import {Template} from './Template';

const meta: Meta<typeof KitButton> = {
    component: KitButton,
    title: 'Design System/General/Button',
    argTypes: argTypes
};

export default meta;
type Story = StoryObj<typeof KitButton>;

export const Api: Story = {
    render: Template,
    parameters: {
        chromatic: {disableSnapshot: true}
    }
};

export const Primary: Story = {
    render: () => (
        <div style={{display: 'inline-flex', gap: '8px'}}>
            <KitButton type="primary">Primary</KitButton>
            <KitButton type="primary" id="hover">
                Hover
            </KitButton>
            <KitButton type="primary" id="focus">
                Focus
            </KitButton>
            <KitButton type="primary" disabled>
                Disabled
            </KitButton>
            <KitButton type="primary" icon={<FontAwesomeIcon icon={faMagnifyingGlass} />} />
            <KitButton type="primary" icon={<FontAwesomeIcon icon={faMagnifyingGlass} />}>
                Search
            </KitButton>
            <KitButton type="primary" loading>
                Loading
            </KitButton>
        </div>
    ),
    parameters: {
        chromatic: {disableSnapshot: false},
        pseudo: {
            hover: '#hover',
            focus: '#focus'
        }
    }
};

export const DefaultButton: Story = {
    render: () => (
        <div style={{display: 'inline-flex', gap: '8px'}}>
            <KitButton type="default">Default</KitButton>
            <KitButton type="default" id="hover">
                Hover
            </KitButton>
            <KitButton type="default" id="focus">
                Focus
            </KitButton>
            <KitButton type="default" disabled>
                Disabled
            </KitButton>
            <KitButton type="default" icon={<FontAwesomeIcon icon={faMagnifyingGlass} />} />
            <KitButton type="default" icon={<FontAwesomeIcon icon={faMagnifyingGlass} />}>
                Search
            </KitButton>
            <KitButton type="default" loading>
                Loading
            </KitButton>
        </div>
    ),
    parameters: {
        chromatic: {disableSnapshot: false},
        pseudo: {
            hover: '#hover',
            focus: '#focus'
        }
    }
};

export const Danger: Story = {
    render: () => (
        <div style={{display: 'flex', gap: '8px'}}>
            <KitButton type="primary" danger>
                Danger
            </KitButton>
            <KitButton type="primary" id="hover" danger>
                Hover
            </KitButton>
            <KitButton type="primary" id="focus" danger>
                Focus
            </KitButton>
            <KitButton type="primary" disabled danger>
                Disabled
            </KitButton>
            <KitButton type="primary" icon={<FontAwesomeIcon icon={faMagnifyingGlass} />} danger />
            <KitButton type="primary" icon={<FontAwesomeIcon icon={faMagnifyingGlass} />} danger>
                Search
            </KitButton>
            <KitButton type="primary" loading danger>
                Loading
            </KitButton>
        </div>
    ),
    parameters: {
        chromatic: {disableSnapshot: false},
        pseudo: {
            hover: '#hover',
            focus: '#focus'
        }
    }
};

export const Text: Story = {
    render: () => (
        <div style={{display: 'inline-flex', gap: '8px'}}>
            <KitButton type="text">Text</KitButton>
            <KitButton type="text" id="hover">
                Hover
            </KitButton>
            <KitButton type="text" id="focus">
                Focus
            </KitButton>
            <KitButton type="text" disabled>
                Disabled
            </KitButton>
            <KitButton type="text" icon={<FontAwesomeIcon icon={faMagnifyingGlass} />} />
            <KitButton type="text" icon={<FontAwesomeIcon icon={faMagnifyingGlass} />}>
                Search
            </KitButton>
            <KitButton type="text" loading>
                Loading
            </KitButton>
        </div>
    ),
    parameters: {
        chromatic: {disableSnapshot: false},
        pseudo: {
            hover: '#hover',
            focus: '#focus'
        }
    }
};

export const Link: Story = {
    render: () => (
        <div style={{display: 'inline-flex', gap: '8px'}}>
            <KitButton type="link">Link</KitButton>
            <KitButton type="link" id="hover">
                Hover
            </KitButton>
            <KitButton type="link" id="focus">
                Focus
            </KitButton>
            <KitButton type="link" id="active">
                Active
            </KitButton>
            <KitButton type="link" disabled>
                Disabled
            </KitButton>
            <KitButton type="link" icon={<FontAwesomeIcon icon={faMagnifyingGlass} />} />
            <KitButton type="link" icon={<FontAwesomeIcon icon={faMagnifyingGlass} />}>
                Search
            </KitButton>
            <KitButton type="link" loading>
                Loading
            </KitButton>
        </div>
    ),
    parameters: {
        chromatic: {disableSnapshot: false},
        pseudo: {
            hover: '#hover',
            focus: '#focus',
            active: '#active'
        }
    }
};

export const Segmented: Story = {
    render: () => (
        <div style={{display: 'flex', gap: '8px', flexDirection: 'column'}}>
            <div style={{display: 'flex', gap: '8px'}}>
                <KitButton type="segmented">Link</KitButton>
                <KitButton type="segmented" id="hover">
                    Hover
                </KitButton>
                <KitButton type="segmented" id="focus">
                    Focus
                </KitButton>
                <KitButton type="segmented" id="active">
                    Active
                </KitButton>
                <KitButton type="segmented" disabled>
                    Disabled
                </KitButton>
                <KitButton type="segmented" icon={<FontAwesomeIcon icon={faMagnifyingGlass} />} />
                <KitButton type="segmented" icon={<FontAwesomeIcon icon={faMagnifyingGlass} />}>
                    Search
                </KitButton>
                <KitButton type="segmented" loading>
                    Loading
                </KitButton>
            </div>
            <div style={{display: 'flex', gap: '8px'}}>
                <KitButton type="segmented" icon={<FontAwesomeIcon icon={faPowerOff} />} segmentedActived />
                <KitButton
                    type="segmented"
                    icon={<FontAwesomeIcon icon={faMagnifyingGlass} />}
                    segmentedActived
                    segmentedChecked
                />
            </div>
            <div style={{display: 'flex', gap: '8px'}}>
                <KitSpace.Compact block>
                    <KitButton type="segmented" icon={<FontAwesomeIcon icon={faPowerOff} />} segmentedActived />
                    <KitButton type="segmented" icon={<FontAwesomeIcon icon={faMagnifyingGlass} />} />
                    <KitButton type="segmented" icon={<FontAwesomeIcon icon={faRotateRight} />} />
                </KitSpace.Compact>
            </div>
            <div style={{display: 'flex', gap: '8px'}}>
                <KitSpace.Compact block>
                    <KitButton type="segmented" icon={<FontAwesomeIcon icon={faPowerOff} />} />
                    <KitButton
                        type="segmented"
                        icon={<FontAwesomeIcon icon={faMagnifyingGlass} />}
                        segmentedActived
                        segmentedChecked
                    />
                    <KitButton type="segmented" icon={<FontAwesomeIcon icon={faRotateRight} />} />
                </KitSpace.Compact>
            </div>
            <div style={{display: 'flex', gap: '8px'}}>
                <KitSpace.Compact block>
                    <KitButton type="segmented" icon={<FontAwesomeIcon icon={faPowerOff} />} />
                    <KitButton type="segmented" icon={<FontAwesomeIcon icon={faMagnifyingGlass} />} />
                    <KitButton
                        type="segmented"
                        icon={<FontAwesomeIcon icon={faRotateRight} />}
                        segmentedActived
                        segmentedChecked
                    />
                </KitSpace.Compact>
            </div>
        </div>
    ),
    parameters: {
        chromatic: {disableSnapshot: false},
        pseudo: {
            hover: '#hover',
            focus: '#focus',
            active: '#active'
        }
    }
};

export const Icon: Story = {
    render: () => (
        <div style={{display: 'inline-flex', gap: '8px'}}>
            <KitButton type="primary" icon={<FontAwesomeIcon icon={faMagnifyingGlass} />} />
            <KitButton type="primary" icon={<FontAwesomeIcon icon={faMagnifyingGlass} />}>
                Primary
            </KitButton>
            <KitButton icon={<FontAwesomeIcon icon={faMagnifyingGlass} />} />
            <KitButton icon={<FontAwesomeIcon icon={faMagnifyingGlass} />}>Default</KitButton>
            <KitButton type="text" icon={<FontAwesomeIcon icon={faMagnifyingGlass} />} />
            <KitButton type="text" icon={<FontAwesomeIcon icon={faMagnifyingGlass} />}>
                Text
            </KitButton>
            <KitButton type="link" icon={<FontAwesomeIcon icon={faMagnifyingGlass} />} />
            <KitButton type="link" icon={<FontAwesomeIcon icon={faMagnifyingGlass} />}>
                Link
            </KitButton>
            <KitButton type="segmented" icon={<FontAwesomeIcon icon={faFilter} />} />
            <KitButton type="segmented" icon={<FontAwesomeIcon icon={faFilter} />}>
                Segmented
            </KitButton>
        </div>
    ),
    parameters: {
        chromatic: {disableSnapshot: false},
        pseudo: {
            hover: '#hover',
            focus: '#focus'
        }
    }
};

export const IconSize: Story = {
    render: () => (
        <div style={{display: 'inline-flex', gap: '8px'}}>
            <KitButton type="segmented" icon={<FontAwesomeIcon icon={faMagnifyingGlass} />} iconSize="xs" />
            <KitButton type="segmented" icon={<FontAwesomeIcon icon={faMagnifyingGlass} />} iconSize="s" />
            <KitButton type="segmented" icon={<FontAwesomeIcon icon={faMagnifyingGlass} />} iconSize="m" />
            <KitButton type="segmented" icon={<FontAwesomeIcon icon={faMagnifyingGlass} />} iconSize="l" />
            <KitButton type="segmented" icon={<FontAwesomeIcon icon={faMagnifyingGlass} />} iconSize="xl" />
        </div>
    ),
    parameters: {
        chromatic: {disableSnapshot: false}
    }
};

export const Colored: Story = {
    render: () => (
        <div style={{display: 'flex', gap: '8px'}}>
            <KitButton type="text" icon={<FontAwesomeIcon icon={faRotateRight} />}>
                Refresh
            </KitButton>
            <KitButton type="text" textColor="grey" icon={<FontAwesomeIcon icon={faRotateRight} />}>
                Refresh
            </KitButton>
            <KitButton type="text" textColor="black" icon={<FontAwesomeIcon icon={faRotateRight} />}>
                Refresh
            </KitButton>
        </div>
    ),
    parameters: {
        chromatic: {disableSnapshot: false}
    }
};
