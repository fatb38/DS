import type {Meta, StoryObj} from '@storybook/react';
import {KitUpload} from '@kit/DataEntry';
import {argTypes} from './data';
import React from 'react';
import KitDragger from '@kit/DataEntry/Upload/Dragger';
import {Template} from './Template';
import {KitTypography} from '@kit/General';
import {TypeTextUploadTest} from './test-components/TypeTextUploadTest.tsx';
import {PictureUploadTest} from './test-components/PictureUploadTest.tsx';
import {PictureWallUploadTest} from './test-components/PictureWallUploadTest.tsx';

const meta: Meta<typeof KitUpload> = {
    component: KitUpload,
    title: 'Design System/DataEntry/Upload',
    argTypes: argTypes
};

export default meta;
type Story = StoryObj<typeof KitUpload>;

export const Api: Story = {
    render: Template,
    parameters: {
        chromatic: {disableSnapshot: true}
    }
};

export const ChromaticTest: Story = {
    render: () => (
        <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
            <TypeTextUploadTest />
            <PictureUploadTest />
            <PictureWallUploadTest />
            <div>
                <KitTypography.Title level="h3">Drag upload</KitTypography.Title>
                <KitDragger style={{width: '500px'}} multiple />
            </div>
        </div>
    )
};
