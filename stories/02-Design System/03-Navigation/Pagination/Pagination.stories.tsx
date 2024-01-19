import type {Meta, StoryObj} from '@storybook/react';
import {KitPagination} from '@kit/Navigation';
import {argTypes} from './data';
import React from 'react';
import {Template} from './Template';
import {BasicPaginationTest} from './test-components/BasicPaginationTest.tsx';
import {BorderedPaginationTest} from './test-components/BorderedPaginationTest.tsx';
import {KitDivider} from '@kit/Layout';
import {SimplePaginationTest} from './test-components/SimplePaginationTest.tsx';

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

export const ChromaticTest: Story = {
    render: () => (
        <>
            <BasicPaginationTest />
            <KitDivider />
            <BorderedPaginationTest />
            <KitDivider />
            <SimplePaginationTest />
        </>
    )
};
