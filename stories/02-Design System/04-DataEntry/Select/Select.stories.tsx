import type {Meta, StoryObj} from '@storybook/react';
import {KitSelect} from '@kit/DataEntry';
import {argTypes, Template} from './data';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFile} from '@fortawesome/free-regular-svg-icons';
import {colorsPalette} from '@theme/aristid/general/colors';

const meta: Meta<typeof KitSelect> = {
    component: KitSelect,
    title: 'Design System/DataEntry/Select',
    argTypes: argTypes
};

export default meta;
type Story = StoryObj<typeof KitSelect>;

export const Api: Story = {
    render: Template,
    parameters: {
        chromatic: {disableSnapshot: true}
    }
};

const colorOptions = [
    {
        value: 'not-allowed',
        color: colorsPalette.secondary.red.red400,
        label: 'Not allowed'
    },
    {
        value: 'denied',
        color: colorsPalette.secondary.yellow.yellow400,
        label: 'Denied'
    },
    {
        value: 'todo',
        color: colorsPalette.primary.primary400,
        label: 'Todo by agency'
    },
    {
        value: 'ok',
        color: colorsPalette.secondary.green.green400,
        label: 'Ok done by agency'
    }
];

const iconOptions = [
    {
        value: 'file-1',
        icon: <FontAwesomeIcon icon={faFile} />,
        label: 'File 1'
    },
    {
        value: 'file-2',
        icon: <FontAwesomeIcon icon={faFile} />,
        label: 'File 2'
    },
    {
        value: 'file-3-1',
        icon: <FontAwesomeIcon icon={faFile} />,
        label: 'File 3.1'
    },
    {
        value: 'file-3-2',
        icon: <FontAwesomeIcon icon={faFile} />,
        label: 'File 3.2'
    }
];

export const Disabled: Story = {
    render: () => {
        const colorDisabledOptions = [
            {
                value: 'not-allowed',
                color: colorsPalette.secondary.red.red400,
                label: 'Not allowed',
                disabled: true
            },
            {
                value: 'denied',
                color: colorsPalette.secondary.yellow.yellow400,
                label: 'Denied',
                disabled: true
            },
            {
                value: 'todo',
                color: colorsPalette.primary.primary400,
                label: 'Todo by agency'
            },
            {
                value: 'ok',
                color: colorsPalette.secondary.green.green400,
                label: 'Ok done by agency'
            }
        ];
        return (
            <div style={{display: 'flex', gap: '20px'}}>
                <KitSelect
                    placeholder="Select a status"
                    style={{width: '320px'}}
                    options={colorDisabledOptions}
                    defaultActiveFirstOption={false}
                    open
                />
                <KitSelect placeholder="Select a status" style={{width: '320px'}} disabled options={colorOptions} />
            </div>
        );
    },
    parameters: {
        chromatic: {disableSnapshot: false}
    }
};

export const LabelOnly: Story = {
    render: () => {
        return (
            <div style={{height: '95vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                <div style={{display: 'flex', gap: '20px'}}>
                    <KitSelect
                        placeholder="Select a status"
                        style={{width: '320px'}}
                        labelOnly
                        defaultActiveFirstOption={false}
                        options={colorOptions}
                        open
                    />
                    <KitSelect
                        placeholder="Select a file"
                        defaultValue="file-2"
                        style={{width: '320px'}}
                        labelOnly
                        defaultActiveFirstOption={false}
                        options={iconOptions}
                        open
                    />
                </div>
                <div style={{display: 'flex', gap: '20px'}}>
                    <KitSelect
                        placeholder="Select a status"
                        style={{width: '320px'}}
                        labelOnly
                        defaultActiveFirstOption={false}
                        options={colorOptions}
                        open
                    />
                    <KitSelect
                        placeholder="Select a file"
                        defaultValue="file-2"
                        style={{width: '320px'}}
                        labelOnly
                        defaultActiveFirstOption={false}
                        options={iconOptions}
                        open
                    />
                </div>
            </div>
        );
    },
    parameters: {
        chromatic: {disableSnapshot: false}
    }
};
export const ColorAndIcons: Story = {
    render: () => {
        return (
            <div style={{height: '95vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                <div style={{display: 'flex', gap: '20px'}}>
                    <KitSelect
                        defaultValue="not-allowed"
                        style={{width: '320px'}}
                        defaultActiveFirstOption={false}
                        options={colorOptions}
                        open
                    />
                    <KitSelect
                        defaultValue="file-2"
                        style={{width: '320px'}}
                        defaultActiveFirstOption={false}
                        options={iconOptions}
                        open
                    />
                </div>
                <div style={{display: 'flex', gap: '20px'}}>
                    <KitSelect
                        defaultValue="not-allowed"
                        style={{width: '320px'}}
                        defaultActiveFirstOption={false}
                        options={colorOptions}
                        open
                    />
                    <KitSelect
                        defaultValue="file-2"
                        style={{width: '320px'}}
                        defaultActiveFirstOption={false}
                        options={iconOptions}
                        open
                    />
                </div>
            </div>
        );
    },
    parameters: {
        chromatic: {disableSnapshot: false}
    }
};

export const Group: Story = {
    render: () => {
        const groupOptions = [
            {
                label: 'Folder 3',
                options: [
                    {
                        value: 'file-3-1',
                        icon: <FontAwesomeIcon icon={faFile} />,
                        label: 'File 3.1'
                    },
                    {
                        value: 'file-3-2',
                        icon: <FontAwesomeIcon icon={faFile} />,
                        label: 'File 3.2'
                    }
                ]
            },
            {
                label: 'Folder 4',
                options: [
                    {
                        value: 'file-4-1',
                        icon: <FontAwesomeIcon icon={faFile} />,
                        label: 'File 4.1'
                    },
                    {
                        value: 'file-4-2',
                        icon: <FontAwesomeIcon icon={faFile} />,
                        label: 'File 4.2'
                    },
                    {
                        value: 'file-4-3',
                        icon: <FontAwesomeIcon icon={faFile} />,
                        label: 'File 4.3'
                    }
                ]
            }
        ];
        return (
            <KitSelect
                placeholder="Select a file"
                style={{width: '320px'}}
                options={groupOptions}
                defaultActiveFirstOption={false}
                open
            />
        );
    },
    parameters: {
        chromatic: {disableSnapshot: false}
    }
};

export const StatusLabelHelper: Story = {
    render: () => {
        return (
            <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
                <KitSelect
                    label="Label"
                    helper="Helper"
                    placeholder="Select a status"
                    style={{width: '320px'}}
                    options={colorOptions}
                    defaultActiveFirstOption={false}
                />
                <KitSelect
                    label="Label"
                    helper="Helper"
                    placeholder="Select a status"
                    disabled
                    style={{width: '320px'}}
                    options={colorOptions}
                    defaultActiveFirstOption={false}
                />
                <KitSelect
                    label="Label"
                    helper="Helper"
                    placeholder="Select a status"
                    style={{width: '320px'}}
                    options={colorOptions}
                    defaultActiveFirstOption={false}
                    status="warning"
                />
                <KitSelect
                    label="Label"
                    helper="Helper"
                    placeholder="Select a status"
                    style={{width: '320px'}}
                    options={colorOptions}
                    defaultActiveFirstOption={false}
                    status="error"
                />
            </div>
        );
    },
    parameters: {
        chromatic: {disableSnapshot: false}
    }
};

export const MultiLines: Story = {
    render: () => {
        return (
            <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
                <KitSelect
                    mode="multiple"
                    placeholder="Select a status"
                    style={{width: '320px'}}
                    defaultActiveFirstOption={false}
                    options={colorOptions}
                    onChange={console.log}
                    defaultValue={['not-allowed', 'denied', 'todo']}
                />
                <KitSelect
                    mode="multiple"
                    placeholder="Select a status"
                    style={{width: '320px'}}
                    oneLineTags
                    defaultActiveFirstOption={false}
                    options={colorOptions}
                    defaultValue={['not-allowed', 'denied', 'todo']}
                />
                <KitSelect
                    mode="tags"
                    placeholder="Select a file"
                    style={{width: '320px'}}
                    defaultActiveFirstOption={false}
                    options={iconOptions}
                    defaultValue={['file-1', 'file-2', 'file-3-1', 'file-3-2']}
                />
                <KitSelect
                    mode="tags"
                    placeholder="Select a file"
                    style={{width: '320px'}}
                    labelOnly
                    oneLineTags
                    defaultActiveFirstOption={false}
                    options={iconOptions}
                    defaultValue={['file-1', 'file-2', 'file-3-1', 'file-3-2']}
                />
            </div>
        );
    },
    parameters: {
        chromatic: {disableSnapshot: false}
    }
};
