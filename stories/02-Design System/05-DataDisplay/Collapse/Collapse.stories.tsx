import type {Meta, StoryObj} from '@storybook/react';
import {KitCollapse} from '@kit/DataDisplay';
import {argTypes} from './data';
import React from 'react';
import {Template} from './Template';
import {BasicCollapseTest} from './test-components/BasicCollapseTest.tsx';
import {SizeCollapseTest} from './test-components/SizeCollapseTest.tsx';
import {CustomHeaderCollapseTest} from './test-components/CustomHeaderCollapseTest.tsx';

const meta: Meta<typeof KitCollapse> = {
    component: KitCollapse,
    title: 'Design System/DataDisplay/Collapse',
    argTypes: argTypes
};

export default meta;
type Story = StoryObj<typeof KitCollapse>;

export const Api: Story = {
    render: Template,
    parameters: {
        chromatic: {disableSnapshot: true}
    }
};

export const ChromaticTest: Story = {
    render: () => (
        <div style={{display: 'flex', gap: '50px'}}>
            <div style={{width: '600px'}}>
                <SizeCollapseTest />
            </div>
            <div style={{width: '600px'}}>
                <BasicCollapseTest />
                <CustomHeaderCollapseTest />
            </div>
        </div>
    )
};
