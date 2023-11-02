import type {Meta, StoryObj} from '@storybook/react';
import {KitInput} from '@kit/DataEntry';
import {argTypes, Template} from './data';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-regular-svg-icons';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';

const meta: Meta<typeof KitInput> = {
    component: KitInput,
    title: 'Design System/DataEntry/Input',
    argTypes: argTypes
};

export default meta;
type Story = StoryObj<typeof KitInput>;

export const Api: Story = {
    render: Template,
    parameters: {
        chromatic: {disableSnapshot: true}
    }
};

export const Basic: Story = {
    render: () => (
        <div style={{display: 'flex', gap: '10px'}}>
            <KitInput placeholder="Default" />
            <KitInput placeholder="Disabled" disabled />
        </div>
    ),
    parameters: {
        chromatic: {disableSnapshot: false}
    }
};

export const Password: Story = {
    render: () => (
        <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
            <div style={{display: 'flex', gap: '10px'}}>
                <KitInput.Password />
                <KitInput.Password prefix={<FontAwesomeIcon icon={faUser} />} />
            </div>
            <div style={{display: 'flex', gap: '10px'}}>
                <KitInput.Password disabled={true} />
                <KitInput.Password prefix={<FontAwesomeIcon icon={faUser} />} disabled={true} />
            </div>
        </div>
    ),
    parameters: {
        chromatic: {disableSnapshot: false}
    }
};

export const TextArea: Story = {
    render: () => (
        <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
            <div style={{display: 'flex', gap: '10px'}}>
                <KitInput.TextArea placeholder="Default" />
                <KitInput.TextArea placeholder="Disabled" disabled={true} />
            </div>
            <div style={{display: 'flex', gap: '10px'}}>
                <KitInput.TextArea placeholder="Rows is 1" rows={1} />
                <KitInput.TextArea placeholder="Rows is 5" rows={5} />
                <KitInput.TextArea placeholder="MaxLength is 6" maxLength={6} />
            </div>
        </div>
    ),
    parameters: {
        chromatic: {disableSnapshot: false}
    }
};

export const Couting: Story = {
    render: () => (
        <div style={{display: 'flex', flexDirection: 'column', gap: '40px'}}>
            <div style={{display: 'flex', gap: '10px'}}>
                <KitInput placeholder="Input" defaultValue="Default" showCount maxLength={20} />
                <KitInput placeholder="Input" defaultValue="Default" showCount maxLength={20} disabled={true} />
            </div>

            <div style={{display: 'flex', gap: '10px'}}>
                <KitInput.TextArea placeholder="TextArea" defaultValue="Default" showCount maxLength={120} />
                <KitInput.TextArea
                    placeholder="TextArea"
                    defaultValue="Default"
                    showCount
                    maxLength={120}
                    disabled={true}
                />
            </div>

            <div style={{display: 'flex', gap: '10px'}}>
                <KitInput.Password defaultValue="Default" showCount maxLength={10} />
                <KitInput.Password defaultValue="Default" showCount maxLength={10} disabled={true} />
            </div>
        </div>
    ),
    parameters: {
        chromatic: {disableSnapshot: false}
    }
};
export const PreffixSuffix: Story = {
    render: () => (
        <div style={{display: 'flex', gap: '10px'}}>
            <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                <KitInput placeholder="Prefix & default" prefix={<FontAwesomeIcon icon={faUser} />} />
                <KitInput placeholder="Prefix & disabled" prefix={<FontAwesomeIcon icon={faUser} />} disabled={true} />
            </div>
            <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                <KitInput placeholder="Suffix & default" suffix={<FontAwesomeIcon icon={faUser} />} />
                <KitInput placeholder="Suffix & disabled" suffix={<FontAwesomeIcon icon={faUser} />} disabled={true} />
            </div>
            <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                <KitInput
                    placeholder="Prefix & Suffix & default"
                    prefix={<FontAwesomeIcon icon={faMagnifyingGlass} />}
                    suffix={<FontAwesomeIcon icon={faUser} />}
                />
                <KitInput
                    placeholder="Prefix & Suffix & disabled"
                    prefix={<FontAwesomeIcon icon={faMagnifyingGlass} />}
                    suffix={<FontAwesomeIcon icon={faUser} />}
                    disabled={true}
                />
            </div>
        </div>
    ),
    parameters: {
        chromatic: {disableSnapshot: false}
    }
};

export const LabelHelperStatus: Story = {
    render: () => (
        <div style={{display: 'flex', gap: '30px'}}>
            <div style={{width: '200px', display: 'flex', flexDirection: 'column', gap: '10px'}}>
                <KitInput placeholder="Prefix & default" helper="Helper" label="Label" allowClear={false} />
                <KitInput
                    placeholder="Prefix & default"
                    prefix={<FontAwesomeIcon icon={faUser} />}
                    helper="Helper"
                    label="Label"
                />
                <KitInput
                    placeholder="Prefix & default"
                    prefix={<FontAwesomeIcon icon={faUser} />}
                    helper="Helper"
                    label="Label"
                    disabled
                />
                <KitInput
                    placeholder="Prefix & default"
                    prefix={<FontAwesomeIcon icon={faUser} />}
                    helper="Helper"
                    label="Label"
                    status="warning"
                />
                <KitInput
                    placeholder="Prefix & default"
                    prefix={<FontAwesomeIcon icon={faUser} />}
                    helper="Helper"
                    label="Label"
                    status="error"
                />
            </div>
            <div style={{width: '200px', display: 'flex', flexDirection: 'column', gap: '10px'}}>
                <KitInput.Password placeholder="Prefix & default" helper="Helper" label="Label" allowClear={false} />
                <KitInput.Password
                    placeholder="Prefix & default"
                    prefix={<FontAwesomeIcon icon={faUser} />}
                    helper="Helper"
                    label="Label"
                />
                <KitInput.Password
                    placeholder="Prefix & default"
                    prefix={<FontAwesomeIcon icon={faUser} />}
                    helper="Helper"
                    label="Label"
                    disabled
                />
                <KitInput.Password
                    placeholder="Prefix & default"
                    prefix={<FontAwesomeIcon icon={faUser} />}
                    helper="Helper"
                    label="Label"
                    status="warning"
                    showCount
                />
                <KitInput.Password
                    placeholder="Prefix & default"
                    prefix={<FontAwesomeIcon icon={faUser} />}
                    helper="Helper"
                    label="Label"
                    status="error"
                    showCount
                />
            </div>
            <div style={{width: '200px', display: 'flex', flexDirection: 'column', gap: '10px'}}>
                <KitInput.TextArea
                    placeholder="Prefix & default"
                    helper="Helper"
                    label="Label"
                    allowClear={false}
                    showCount
                />
                <KitInput.TextArea placeholder="Prefix & default" helper="Helper" label="Label" showCount />
                <KitInput.TextArea placeholder="Prefix & default" helper="Helper" label="Label" disabled showCount />
                <KitInput.TextArea
                    placeholder="Prefix & default"
                    helper="Helper"
                    label="Label"
                    status="warning"
                    showCount
                />
                <KitInput.TextArea
                    placeholder="Prefix & default"
                    helper="Helper"
                    label="Label"
                    status="error"
                    showCount
                />
            </div>
        </div>
    ),
    parameters: {
        chromatic: {disableSnapshot: false}
    }
};
