import type {Meta, StoryObj} from '@storybook/react';
import {KitItemList} from '@kit/DataDisplay';
import {argTypes} from './data';
import {Template} from './Template';
import {FullItemList} from './test-components/FullItemList';
import {BasicItemList} from './test-components/BasicItemList';
import {ActionItemList} from './test-components/ActionItemList';
import {SelectableItemList} from './test-components/SelectableList';
import {DisabledItemList} from './test-components/DisabledItemList';
import {IdCardSubstituteItemList} from './test-components/IdCardSubstituteItemList';

const meta: Meta<typeof KitItemList> = {
    component: KitItemList,
    title: 'Design System/DataDisplay/ItemList',
    argTypes: argTypes
};

export default meta;
type Story = StoryObj<typeof KitItemList>;

export const Api: Story = {
    render: Template,
    parameters: {
        chromatic: {disableSnapshot: true}
    }
};

export const ChromaticTest: Story = {
    render: () => (
        <div style={{width: '1000px', display: 'flex', flexDirection: 'column', gap: '20px'}}>
            <div style={{width: '1000px', display: 'flex', flexDirection: 'column', gap: '20px'}}>
                <BasicItemList />
                <IdCardSubstituteItemList />
                <SelectableItemList />
                <ActionItemList />
                <FullItemList />
                <DisabledItemList />
            </div>
            <div style={{width: '600px', display: 'flex', flexDirection: 'column', gap: '20px'}}>
                <FullItemList />
            </div>
        </div>
    )
};
