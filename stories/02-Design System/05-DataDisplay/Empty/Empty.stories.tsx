import type {Meta, StoryObj} from '@storybook/react';
import React from 'react';
import {Template} from './Template';
import {argTypes} from './data';
import {KitEmpty} from '@kit/DataDisplay';
import {KitButton, KitTypography} from '@kit/General';
import {AntFlex} from '@kit/Ant';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAdd} from '@fortawesome/free-solid-svg-icons';

const meta: Meta<typeof KitEmpty> = {
    component: KitEmpty,
    title: 'Design System/DataDisplay/Empty',
    argTypes: argTypes
};

export default meta;
type Story = StoryObj<typeof KitEmpty>;

export const Api: Story = {
    render: Template,
    parameters: {
        chromatic: {disableSnapshot: true}
    }
};

export const ChromaticTest: Story = {
    render: () => (
        <>
            <KitTypography.Title level="h3">Default Empty</KitTypography.Title>
            <KitEmpty />
            <KitTypography.Title level="h3">Other Empty assets</KitTypography.Title>
            <AntFlex justify="center">
                <KitEmpty image={KitEmpty.ASSET_FOLDER} />
                <KitEmpty image={KitEmpty.ASSET_LIST} />
                <KitEmpty image={KitEmpty.ASSET_MODAL} />
                <KitEmpty image={KitEmpty.ASSET_PAGE} />
            </AntFlex>
            <KitTypography.Title level="h3">Empty with title, description and button</KitTypography.Title>
            <KitEmpty
                image={KitEmpty.ASSET_FOLDER}
                title="No Folder Found"
                description="No folder has been found. Please create a new one by clicking the button below."
                button={
                    <KitButton type="primary" icon={<FontAwesomeIcon icon={faAdd} />}>
                        Create a folder
                    </KitButton>
                }
            />
        </>
    )
};
