import type {Meta, StoryObj} from '@storybook/react';
import {Template} from './Template';
import {argTypes} from './data';
import {KitLoader} from '@kit/Feedback/Loader';

const meta: Meta<typeof KitLoader> = {
    component: KitLoader,
    title: 'Design System/Feedback/Loader',
    argTypes: argTypes
};

export default meta;
type Story = StoryObj<typeof KitLoader>;

export const Api: Story = {
    render: Template,
    parameters: {
        chromatic: {disableSnapshot: true}
    }
};

export const ChromaticTest: Story = {
    render: () => (
        <div style={{display: 'flex', flexDirection: 'column', gap: '10px', width: '600px', padding: '16px'}}>
            <div style={{padding: '16px'}}>
                <KitLoader type="animated" />
            </div>
            <div style={{padding: '16px'}}>
                <KitLoader type="linear" value={40} />
            </div>
            <div style={{padding: '16px'}}>
                <KitLoader type="linear" infinite />
            </div>
        </div>
    )
};
