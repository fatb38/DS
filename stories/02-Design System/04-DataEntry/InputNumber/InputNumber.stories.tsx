import type {Meta, StoryObj} from '@storybook/react';
import {KitInputNumber} from '@kit/DataEntry';
import {argTypes} from './data';
import React from 'react';
import {Template} from './Template';
import {KitTypography} from '@kit/General';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAddressBook, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';

const meta: Meta<typeof KitInputNumber> = {
    component: KitInputNumber,
    title: 'Design System/DataEntry/InputNumber',
    argTypes: argTypes
};

export default meta;
type Story = StoryObj<typeof KitInputNumber>;

export const Api: Story = {
    render: Template,
    parameters: {
        chromatic: {disableSnapshot: true}
    }
};

export const ChromaticTest: Story = {
    render: () => (
        <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
            <div>
                <KitTypography.Title level="h3">Basic input number</KitTypography.Title>
                <div style={{display: 'flex', gap: '10px'}}>
                    <KitInputNumber min={1} max={10} placeholder="1" autoFocus />
                    <KitInputNumber min={1} max={10} placeholder="1" />
                    <KitInputNumber min={1} max={10} placeholder="1" disabled />
                </div>
            </div>
            <div>
                <KitTypography.Title level="h3">Input number with Prefix</KitTypography.Title>
                <div style={{display: 'flex', gap: '20px'}}>
                    <KitInputNumber prefix={<FontAwesomeIcon icon={faAddressBook} />} placeholder="2" />
                    <KitInputNumber prefix={<FontAwesomeIcon icon={faMagnifyingGlass} />} placeholder="2" />
                </div>
            </div>
            <div>
                <KitTypography.Title level="h3">Input number with Formatter</KitTypography.Title>
                <div style={{display: 'flex', gap: '20px'}}>
                    <KitInputNumber formatter={value => `${value} €`} defaultValue={2} />
                    <KitInputNumber formatter={value => `$${value}`} defaultValue={18000} />
                </div>
            </div>
            <div>
                <KitTypography.Title level="h3">Label, Helper with status input number</KitTypography.Title>
                <div style={{display: 'flex', gap: '20px'}}>
                    <KitInputNumber placeholder="2" helper="Helper" label="Label" />
                    <KitInputNumber placeholder="2" helper="Helper" label="Label" disabled />
                    <KitInputNumber placeholder="2" helper="Helper" label="Label" status="warning" />
                    <KitInputNumber placeholder="2" helper="Helper" label="Label" status="error" />
                </div>
            </div>
        </div>
    )
};
