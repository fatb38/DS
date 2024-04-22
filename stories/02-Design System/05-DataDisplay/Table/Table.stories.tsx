import type {Meta, StoryObj} from '@storybook/react';
import {KitTable} from '@kit/DataDisplay';
import {argTypes} from './data.ts';
import {Template} from './Template.tsx';
import {BasicTableTest} from './test-componnents/BasicTableTest.tsx';
import {SelectionTableTest} from './test-componnents/SelectionTableTest.tsx';
import {SorterTableTest} from './test-componnents/SorterTableTest.tsx';
import {ColSpanTableTest} from './test-componnents/ColSpanTableTest.tsx';

const meta: Meta<typeof KitTable> = {
    component: KitTable,
    title: 'Design System/DataDisplay/Table',
    argTypes: argTypes
};

export default meta;
type Story = StoryObj<typeof KitTable>;

export const Api: Story = {
    render: Template,
    parameters: {
        chromatic: {disableSnapshot: true}
    }
};

export const ChromaticTest: Story = {
    render: () => (
        <div style={{display: 'flex', gap: '20px'}}>
            <div>
                <BasicTableTest />
                <SelectionTableTest />
            </div>
            <div>
                <SorterTableTest />
                <ColSpanTableTest />
            </div>
        </div>
    )
};
