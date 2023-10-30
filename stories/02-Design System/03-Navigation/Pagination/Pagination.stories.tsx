import type {Meta, StoryObj} from '@storybook/react';
import {KitPagination} from '@kit/Navigation';
import {argTypes, Template} from './data';
import React from 'react';

const meta: Meta<typeof KitPagination> = {
    component: KitPagination,
    title: 'Design System/Navigation/Pagination',
    argTypes: argTypes
};

export default meta;
type Story = StoryObj<typeof KitPagination>;

export const Api: Story = {
    render: Template
};

export const Basic: Story = {
    render: () => (
        <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
            <KitPagination
                defaultCurrent={1}
                total={100}
                showSizeChanger
                showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
            />
            <KitPagination
                disabled
                defaultCurrent={1}
                total={100}
                showSizeChanger
                showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
            />
        </div>
    ),
    parameters: {
        chromatic: {disableSnapshot: false}
    }
};

export const Bordered: Story = {
    render: () => (
        <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
            <KitPagination
                defaultCurrent={1}
                total={100}
                bordered
                showSizeChanger
                showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
            />
            <KitPagination
                disabled
                defaultCurrent={1}
                total={100}
                bordered
                showSizeChanger
                showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
            />
        </div>
    ),
    parameters: {
        chromatic: {disableSnapshot: false}
    }
};

export const Simple: Story = {
    render: () => (
        <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
            <KitPagination
                simple
                defaultCurrent={2}
                total={100}
                showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
            />
            <KitPagination
                disabled
                simple
                defaultCurrent={2}
                total={100}
                showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
            />
        </div>
    ),
    parameters: {
        chromatic: {disableSnapshot: false}
    }
};
