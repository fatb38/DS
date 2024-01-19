import type {Meta, StoryObj} from '@storybook/react';
import {KitBreadcrumb, KitHeader} from '@kit/Navigation';
import {argTypes} from './data';
import React from 'react';
import {Template} from './Template';
import {actions, items, searchProps} from './commons.tsx';

const meta: Meta<typeof KitHeader> = {
    component: KitHeader,
    title: 'Design System/Navigation/Header',
    argTypes: argTypes
};

export default meta;
type Story = StoryObj<typeof KitHeader>;

export const Api: Story = {
    render: Template,
    parameters: {
        chromatic: {disableSnapshot: true}
    }
};

export const ChromaticTest: Story = {
    render: () => (
        <KitHeader
            title="Campagne 1 - soldes rentrée"
            search={searchProps}
            breadcrumb={<KitBreadcrumb items={items} />}
            actions={actions}
            onPlusClick={() => console.log('click on plus')}
        />
    )
};
