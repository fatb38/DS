import type {Meta, StoryObj} from '@storybook/react';
import {KitDatePicker} from '@kit/DataEntry';
import {argTypes} from './data';
import React from 'react';
import dayjs from 'dayjs';
import {Template} from './Template';
import {KitTypography} from '@kit/General';

const meta: Meta<typeof KitDatePicker> = {
    component: KitDatePicker,
    title: 'Design System/DataEntry/DatePicker',
    argTypes: argTypes
};

export default meta;
type Story = StoryObj<typeof KitDatePicker>;

export const Api: Story = {
    render: Template,
    parameters: {
        chromatic: {disableSnapshot: true}
    }
};

export const ChromaticTestBasic: Story = {
    render: () => (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'start', gap: '10px'}}>
            <KitTypography.Title level="h3">Basic datepicker</KitTypography.Title>
            <KitDatePicker autoFocus value={dayjs('2023-06-06', 'YYYY-MM-DD')} />
            <KitDatePicker open value={dayjs('2023-06-06', 'YYYY-MM-DD')} style={{marginBottom: '360px'}} />
            <KitDatePicker.RangePicker
                open
                value={[dayjs('2023-06-06', 'YYYY-MM-DD'), dayjs('2023-06-07', 'YYYY-MM-DD')]}
            />
        </div>
    )
};

export const ChromaticTestTime: Story = {
    render: () => (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'start', gap: '10px'}}>
            <KitTypography.Title level="h3">Time datepicker</KitTypography.Title>
            <KitDatePicker autoFocus picker="time" />
            <KitDatePicker open picker="time" style={{marginBottom: '280px'}} />
            <KitDatePicker.RangePicker picker="time" open />
        </div>
    )
};

export const ChromaticTestWeek: Story = {
    render: () => (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'start', gap: '10px'}}>
            <KitTypography.Title level="h3">Week datepicker</KitTypography.Title>
            <KitDatePicker autoFocus picker="week" />
            <KitDatePicker
                open
                picker="week"
                value={dayjs('2023-06-06', 'YYYY-MM-DD')}
                style={{marginBottom: '320px'}}
            />
            <KitDatePicker.RangePicker
                value={[dayjs('2023-06-06', 'YYYY-MM-DD'), dayjs('2023-06-07', 'YYYY-MM-DD')]}
                picker="week"
                open
            />
        </div>
    )
};

export const ChromaticTestMonth: Story = {
    render: () => (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'start', gap: '10px'}}>
            <KitTypography.Title level="h3">Month datepicker</KitTypography.Title>
            <KitDatePicker picker="month" autoFocus />
            <KitDatePicker open picker="month" style={{marginBottom: '320px'}} />
            <KitDatePicker.RangePicker picker="month" open />
        </div>
    )
};

export const ChromaticTestQuarter: Story = {
    render: () => (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'start', gap: '10px'}}>
            <KitTypography.Title level="h3">Quarter datepicker</KitTypography.Title>
            <KitDatePicker picker="quarter" autoFocus />
            <KitDatePicker open picker="quarter" style={{marginBottom: '120px'}} />
            <KitDatePicker.RangePicker picker="quarter" open />
        </div>
    )
};

export const ChromaticTestYear: Story = {
    render: () => (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'start', gap: '10px'}}>
            <KitTypography.Title level="h3">Year datepicker</KitTypography.Title>
            <KitDatePicker picker="year" autoFocus />
            <KitDatePicker open picker="year" style={{marginBottom: '320px'}} />
            <KitDatePicker.RangePicker picker="year" open />
        </div>
    )
};

export const ChromaticTestDisabled: Story = {
    render: () => (
        <div style={{width: '400px', display: 'flex', flexDirection: 'column', gap: '10px'}}>
            <KitDatePicker disabled />
            <KitDatePicker defaultValue={dayjs('2023-06-06', 'YYYY-MM-DD')} disabled />
            <KitDatePicker.RangePicker disabled />
            <KitDatePicker.RangePicker
                defaultValue={[dayjs('2023-06-06', 'YYYY-MM-DD'), dayjs('2023-06-06', 'YYYY-MM-DD')]}
                disabled
            />
            <KitDatePicker.RangePicker
                defaultValue={[dayjs('2023-06-06', 'YYYY-MM-DD'), dayjs('2023-06-06', 'YYYY-MM-DD')]}
                disabled={[false, true]}
                open
            />
        </div>
    )
};

export const ChromaticTestLabelHelperStatus: Story = {
    render: () => (
        <div style={{display: 'flex', gap: '10px'}}>
            <div style={{width: '200px', display: 'flex', flexDirection: 'column', gap: '10px'}}>
                <KitDatePicker helper="Helper" label="Label" allowClear={false} />
                <KitDatePicker helper="Helper" label="Label" />
                <KitDatePicker helper="Helper" label="Label" disabled />
                <KitDatePicker helper="Helper" label="Label" status="warning" />
                <KitDatePicker helper="Helper" label="Label" status="error" />
            </div>
            <div style={{width: '200px', display: 'flex', flexDirection: 'column', gap: '10px'}}>
                <KitDatePicker.RangePicker helper="Helper" label="Label" allowClear={false} />
                <KitDatePicker.RangePicker helper="Helper" label="Label" />
                <KitDatePicker.RangePicker helper="Helper" label="Label" disabled />
                <KitDatePicker.RangePicker helper="Helper" label="Label" status="warning" />
                <KitDatePicker.RangePicker helper="Helper" label="Label" status="error" />
            </div>
        </div>
    )
};
