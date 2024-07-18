import type {Meta, StoryObj} from '@storybook/react';

import {argTypes} from './data';
import {Template} from './Template';
import {KitTypography} from '@kit/General';
import {KitTag} from '@kit/DataDisplay';
import {IKitTagConfig} from '@kit/DataDisplay/Tag/types';

const meta: Meta<typeof KitTag> = {
    component: KitTag,
    title: 'Design System/DataDisplay/Tag',
    argTypes: argTypes
};

export default meta;
type Story = StoryObj<typeof KitTag>;

export const Api: Story = {
    render: Template,
    parameters: {
        chromatic: {disableSnapshot: true}
    }
};

const tags: IKitTagConfig[] = [
    {type: 'primary', idCardProps: {description: 'Multimédia'}},
    {type: 'secondary', idCardProps: {description: 'Promo 2021'}},
    {idCardProps: {description: 'Alimentation'}},
    {idCardProps: {description: 'Fromage'}}
];

export const ChromaticTest: Story = {
    render: () => (
        <>
            <KitTypography.Title level="h3">Basic tag</KitTypography.Title>
            <div style={{display: 'flex', gap: '10px'}}>
                <KitTag idCardProps={{description: 'Tag 1'}} />
                <KitTag idCardProps={{description: 'Tag 2'}} onClose={() => console.log()} />
                <KitTag
                    idCardProps={{description: 'Tag with avatar', avatarProps: {label: 'Tag with avatar'}}}
                    onClose={() => console.log()}
                />
            </div>
            <KitTypography.Title level="h3">Type</KitTypography.Title>
            <div style={{display: 'flex', gap: '10px'}}>
                <KitTag type="primary" idCardProps={{description: 'Tag primary'}} onClose={() => console.log()} />
                <KitTag type="secondary" idCardProps={{description: 'Tag secondary'}} onClose={() => console.log()} />
                <KitTag type="neutral" idCardProps={{description: 'Tag neutral'}} onClose={() => console.log()} />
                <KitTag type="error" idCardProps={{description: 'Tag error'}} onClose={() => console.log()} />
                <KitTag type="success" idCardProps={{description: 'Tag success'}} onClose={() => console.log()} />
            </div>
            <KitTypography.Title level="h3">Disabled</KitTypography.Title>
            <div style={{display: 'flex', gap: '10px'}}>
                <KitTag
                    type="primary"
                    idCardProps={{description: 'Tag primary'}}
                    disabled
                    onClose={() => console.log()}
                />
                <KitTag
                    type="secondary"
                    idCardProps={{description: 'Tag secondary'}}
                    disabled
                    onClose={() => console.log()}
                />
                <KitTag
                    type="neutral"
                    idCardProps={{description: 'Tag neutral'}}
                    disabled
                    onClose={() => console.log()}
                />
                <KitTag type="error" idCardProps={{description: 'Tag error'}} disabled onClose={() => console.log()} />
                <KitTag
                    type="success"
                    idCardProps={{description: 'Tag success'}}
                    disabled
                    onClose={() => console.log()}
                />
            </div>
            <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                <KitTypography.Title level="h3">Group Tag</KitTypography.Title>
                <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                    <KitTag.Group tags={tags} style={{width: '500px'}} />
                    <KitTag.Group tags={tags} style={{width: '200px'}} />
                </div>
            </div>
        </>
    )
};
