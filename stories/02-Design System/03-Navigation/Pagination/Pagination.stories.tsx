import type {Meta, StoryObj} from '@storybook/react';
import {KitPagination} from '@kit/Navigation';
import {argTypes} from './data';
import React from 'react';
import {Template} from './Template';

const meta: Meta<typeof KitPagination> = {
    component: KitPagination,
    title: 'Design System/Navigation/Pagination',
    argTypes: argTypes
};

export default meta;
type Story = StoryObj<typeof KitPagination>;

export const Api: Story = {
    render: Template,
    parameters: {
        chromatic: {disableSnapshot: true}
    }
};

export const Basic: Story = {
    render: () => (
        <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
            <KitPagination
                defaultCurrent={1}
                total={100}
                showSizeChanger
                showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
                showQuickJumper
            />
            <KitPagination
                disabled
                defaultCurrent={1}
                total={100}
                showSizeChanger
                showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
                showQuickJumper
            />
            <KitPagination
                defaultCurrent={1}
                total={100}
                showSizeChanger
                showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
                size="small"
                showQuickJumper
            />
            <KitPagination
                disabled
                defaultCurrent={1}
                total={100}
                showSizeChanger
                showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
                size="small"
                showQuickJumper
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
                showQuickJumper
            />
            <KitPagination
                disabled
                defaultCurrent={1}
                total={100}
                bordered
                showSizeChanger
                showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
                showQuickJumper
            />
            <KitPagination
                defaultCurrent={1}
                total={100}
                bordered
                showSizeChanger
                showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
                size="small"
                showQuickJumper
            />
            <KitPagination
                disabled
                defaultCurrent={1}
                total={100}
                bordered
                showSizeChanger
                showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
                size="small"
                showQuickJumper
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
            <KitPagination
                simple
                defaultCurrent={2}
                total={100}
                showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
                size="small"
            />
            <KitPagination
                disabled
                simple
                defaultCurrent={2}
                total={100}
                showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
                size="small"
            />
        </div>
    ),
    parameters: {
        chromatic: {disableSnapshot: false}
    }
};
