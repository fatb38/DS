import type {Meta, StoryObj} from '@storybook/react';
import {KitBreadcrumb, KitPageHeader} from '@kit/Navigation';
import {argTypes} from './data.ts';
import {Template} from './Template.tsx';
import {actions, items, searchProps} from './commons.tsx';
import React from 'react';

const meta: Meta<typeof KitPageHeader> = {
    component: KitPageHeader,
    title: 'Design System/Navigation/PageHeader',
    argTypes: argTypes
};

export default meta;
type Story = StoryObj<typeof KitPageHeader>;

export const Api: Story = {
    render: Template,
    parameters: {
        chromatic: {disableSnapshot: true}
    }
};

export const ChromaticTest: Story = {
    render: () => (
        <KitPageHeader
            title="Campagne 1 - soldes rentrée"
            search={searchProps}
            breadcrumb={<KitBreadcrumb items={items} />}
            actions={actions}
            onPlusClick={() => console.log('click on plus')}
        />
    )
};
