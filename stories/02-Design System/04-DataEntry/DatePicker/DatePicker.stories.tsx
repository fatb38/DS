import type {Meta, StoryObj} from '@storybook/react';
import {KitDatePicker} from '@kit/DataEntry';
import {argTypes} from './data';
import React from 'react';
import dayjs from 'dayjs';
import {within} from '@storybook/testing-library';
import {Template} from './Template';

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

export const BasicDate: Story = {
    render: () => (
        <div style={{width: '400px', display: 'flex', gap: '200px'}}>
            <KitDatePicker open value={dayjs('2023-06-06', 'YYYY-MM-DD')} />
            <KitDatePicker data-testid="focus" value={dayjs('2023-06-06', 'YYYY-MM-DD')} />
        </div>
    ),
    play: ({canvasElement}) => {
        const canvas = within(canvasElement);
        const datePicker = canvas.getByTestId('focus');
        datePicker.focus();
    },
    parameters: {
        chromatic: {disableSnapshot: false}
    }
};
export const BasicDateTime: Story = {
    render: () => (
        <div style={{display: 'flex', gap: '200px'}}>
            <KitDatePicker open picker="time" />
            <KitDatePicker picker="time" data-testid="focus" />
        </div>
    ),
    play: ({canvasElement}) => {
        const canvas = within(canvasElement);
        const datePicker = canvas.getByTestId('focus');
        datePicker.focus();
    },
    parameters: {
        chromatic: {disableSnapshot: false}
    }
};

export const BasicDateWeek: Story = {
    render: () => (
        <div style={{display: 'flex', gap: '200px'}}>
            <KitDatePicker open picker="week" value={dayjs('2023-06-06', 'YYYY-MM-DD')} />
            <KitDatePicker picker="week" data-testid="focus" value={dayjs('2023-06-06', 'YYYY-MM-DD')} />
        </div>
    ),
    play: ({canvasElement}) => {
        const canvas = within(canvasElement);
        const datePicker = canvas.getByTestId('focus');
        datePicker.focus();
    },
    parameters: {
        chromatic: {disableSnapshot: false}
    }
};

export const BasicDateMounth: Story = {
    render: () => (
        <div style={{display: 'flex', gap: '200px'}}>
            <KitDatePicker open picker="month" />
            <KitDatePicker picker="month" data-testid="focus" />
        </div>
    ),
    play: ({canvasElement}) => {
        const canvas = within(canvasElement);
        const datePicker = canvas.getByTestId('focus');
        datePicker.focus();
    },
    parameters: {
        chromatic: {disableSnapshot: false}
    }
};

export const BasicDateQuarter: Story = {
    render: () => (
        <div style={{display: 'flex', gap: '200px'}}>
            <KitDatePicker open picker="quarter" />
            <KitDatePicker picker="quarter" data-testid="focus" />
        </div>
    ),
    play: ({canvasElement}) => {
        const canvas = within(canvasElement);
        const datePicker = canvas.getByTestId('focus');
        datePicker.focus();
    },
    parameters: {
        chromatic: {disableSnapshot: false}
    }
};

export const BasicDateYear: Story = {
    render: () => (
        <div style={{display: 'flex', gap: '200px'}}>
            <KitDatePicker open picker="year" />
            <KitDatePicker picker="year" data-testid="focus" />
        </div>
    ),
    play: ({canvasElement}) => {
        const canvas = within(canvasElement);
        const datePicker = canvas.getByTestId('focus');
        datePicker.focus();
    },
    parameters: {
        chromatic: {disableSnapshot: false}
    }
};

export const BasicRange: Story = {
    render: () => (
        <div style={{display: 'flex', gap: '200px'}}>
            <KitDatePicker.RangePicker
                open
                value={[dayjs('2023-06-06', 'YYYY-MM-DD'), dayjs('2023-06-07', 'YYYY-MM-DD')]}
            />
        </div>
    ),
    parameters: {
        chromatic: {disableSnapshot: false}
    }
};

export const BasicRangeTime: Story = {
    render: () => (
        <div style={{width: '400px', display: 'flex', gap: '400px'}}>
            <KitDatePicker.RangePicker picker="time" open />
        </div>
    ),
    parameters: {
        chromatic: {disableSnapshot: false}
    }
};

export const BasicRangeWeek: Story = {
    render: () => (
        <div style={{width: '400px', display: 'flex', gap: '400px'}}>
            <KitDatePicker.RangePicker
                value={[dayjs('2023-06-06', 'YYYY-MM-DD'), dayjs('2023-06-07', 'YYYY-MM-DD')]}
                picker="week"
                open
            />
        </div>
    ),
    parameters: {
        chromatic: {disableSnapshot: false}
    }
};

export const BasicRangeMounth: Story = {
    render: () => (
        <div style={{width: '400px', display: 'flex', gap: '400px'}}>
            <KitDatePicker.RangePicker picker="month" open />
        </div>
    ),
    parameters: {
        chromatic: {disableSnapshot: false}
    }
};

export const BasicRangeQuarter: Story = {
    render: () => (
        <div style={{width: '400px', display: 'flex', gap: '400px'}}>
            <KitDatePicker.RangePicker picker="quarter" open />
        </div>
    ),
    parameters: {
        chromatic: {disableSnapshot: false}
    }
};

export const BasicRangeYear: Story = {
    render: () => (
        <div style={{width: '400px', display: 'flex', gap: '400px'}}>
            <KitDatePicker.RangePicker picker="year" open />
        </div>
    ),
    parameters: {
        chromatic: {disableSnapshot: false}
    }
};

export const Disabled: Story = {
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
    ),
    parameters: {
        chromatic: {disableSnapshot: false}
    }
};

export const LabelHelperStatus: Story = {
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
    ),
    parameters: {
        chromatic: {disableSnapshot: false}
    }
};
