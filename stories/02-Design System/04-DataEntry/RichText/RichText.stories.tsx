import type {Meta, StoryObj} from '@storybook/react';
import {KitRichText} from '@kit/DataEntry';
import {argTypes} from './data';
import {Template} from './Template';
import {
    BasicRichTextTest,
    CharacterCountRichTextTest,
    DisabledRichTextTest,
    LabelAndHelperRichTextTest,
    ReadOnlyRichTextTest
} from './test-components';

const meta: Meta<typeof KitRichText> = {
    component: KitRichText,
    title: 'Design System/DataEntry/RichText',
    argTypes: argTypes
};

export default meta;
type Story = StoryObj<typeof KitRichText>;

export const Api: Story = {
    render: Template,
    parameters: {
        chromatic: {disableSnapshot: true}
    }
};

export const ChromaticTest: Story = {
    render: () => (
        <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
            <BasicRichTextTest />
            <DisabledRichTextTest />
            <CharacterCountRichTextTest />
            <LabelAndHelperRichTextTest />
            <ReadOnlyRichTextTest />
        </div>
    )
};
