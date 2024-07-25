import type {Meta, StoryObj} from '@storybook/react';
import {Template} from './Template';
import {argTypes} from './data';
import {KitRedirectCard} from '@kit/DataDisplay';
import {RedirectCardTest} from './test-components/RedirectCardTest';

const meta: Meta<typeof KitRedirectCard> = {
    component: KitRedirectCard,
    title: 'Design System/DataDisplay/RedirectCard',
    argTypes: argTypes
};

export default meta;
type Story = StoryObj<typeof KitRedirectCard>;

export const Api: Story = {
    render: Template,
    parameters: {
        chromatic: {disableSnapshot: true}
    }
};

export const ChromaticTest: Story = {
    render: () => <RedirectCardTest />
};
