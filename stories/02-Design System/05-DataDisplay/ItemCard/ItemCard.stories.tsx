import type {Meta, StoryObj} from '@storybook/react';
import {KitAvatar, KitImage, KitItemCard} from '@kit/DataDisplay';
import {argTypes} from './data';
import React from 'react';
import {KitButton, KitIcon} from '@kit/General';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faDownload} from '@fortawesome/free-solid-svg-icons';
import {faFaceSmile, faFolderOpen} from '@fortawesome/free-regular-svg-icons';
import {Template} from './Template';

const meta: Meta<typeof KitItemCard> = {
    component: KitItemCard,
    title: 'Design System/DataDisplay/ItemCard',
    argTypes: argTypes
};

export default meta;
type Story = StoryObj<typeof KitItemCard>;

export const Api: Story = {
    render: Template,
    parameters: {
        chromatic: {disableSnapshot: true}
    }
};

export const Basic: Story = {
    render: () => {
        return (
            <div style={{display: 'flex', gap: '20px'}}>
                <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
                    <KitItemCard
                        title="Tondeuse à gazon"
                        description="Tondeuse thermique Auto tractée 70 VL 55 TH"
                        extrainfo="550.00€"
                        picture={<KitImage src="public/images/tondeuse.png" />}
                    />
                    <KitItemCard
                        vertical
                        title="Tondeuse à gazon"
                        description="Tondeuse thermique Auto tractée 70 VL 55 TH"
                        extrainfo="550.00€"
                        picture={<KitImage src="public/images/tondeuse.png" />}
                    />
                </div>
                <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
                    <KitItemCard
                        title="Tondeuse à gazon"
                        description="Tondeuse thermique Auto tractée 70 VL 55 TH"
                        extrainfo="550.00€"
                        picture={<KitIcon icon={<FontAwesomeIcon icon={faFaceSmile} />} />}
                    />
                    <KitItemCard
                        vertical
                        title="Tondeuse à gazon"
                        description="Tondeuse thermique Auto tractée 70 VL 55 TH"
                        extrainfo="550.00€"
                        picture={<KitIcon icon={<FontAwesomeIcon icon={faFaceSmile} />} />}
                    />
                </div>
                <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
                    <KitItemCard
                        title="Tondeuse à gazon"
                        description="Tondeuse thermique Auto tractée 70 VL 55 TH"
                        extrainfo="550.00€"
                        picture={<KitAvatar>G</KitAvatar>}
                    />
                    <KitItemCard
                        vertical
                        title="Tondeuse à gazon"
                        description="Tondeuse thermique Auto tractée 70 VL 55 TH"
                        extrainfo="550.00€"
                        picture={<KitAvatar>G</KitAvatar>}
                    />
                </div>
                <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
                    <KitItemCard
                        fullWidthAvatar
                        title="Tondeuse à gazon"
                        description="Tondeuse thermique Auto tractée 70 VL 55 TH"
                        extrainfo="550.00€"
                        picture={<KitAvatar>G</KitAvatar>}
                    />
                    <KitItemCard
                        fullWidthAvatar
                        vertical
                        title="Tondeuse à gazon"
                        description="Tondeuse thermique Auto tractée 70 VL 55 TH"
                        extrainfo="550.00€"
                        picture={<KitAvatar>G</KitAvatar>}
                    />
                </div>
            </div>
        );
    },

    parameters: {
        chromatic: {disableSnapshot: false}
    }
};

export const Disabled: Story = {
    render: () => {
        return (
            <div style={{display: 'flex', gap: '20px'}}>
                <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
                    <KitItemCard
                        title="Tondeuse à gazon"
                        description="Tondeuse thermique Auto tractée 70 VL 55 TH"
                        extrainfo="550.00€"
                        picture={<KitImage src="public/images/tondeuse.png" />}
                        colors={[
                            {label: 'test', color: '#00D9A9'},
                            {label: 'toto', color: '#009876'}
                        ]}
                        onSelectChange={e => {
                            console.log(e);
                        }}
                        onEdit={() => {
                            console.log('onEdit');
                        }}
                        actions={[
                            <KitButton onClick={() => console.log('download action')}>
                                <FontAwesomeIcon icon={faDownload} />
                            </KitButton>,
                            <KitButton onClick={() => console.log('open action')}>
                                <FontAwesomeIcon icon={faFolderOpen} />
                            </KitButton>
                        ]}
                        tags={['3 opérations']}
                        disabled
                    />
                    <KitItemCard
                        vertical
                        title="Tondeuse à gazon"
                        description="Tondeuse thermique Auto tractée 70 VL 55 TH"
                        extrainfo="550.00€"
                        picture={<KitImage src="public/images/tondeuse.png" />}
                        colors={[
                            {label: 'test', color: '#00D9A9'},
                            {label: 'toto', color: '#009876'}
                        ]}
                        onSelectChange={e => {
                            console.log(e);
                        }}
                        onEdit={() => {
                            console.log('onEdit');
                        }}
                        actions={[
                            <KitButton onClick={() => console.log('download action')}>
                                <FontAwesomeIcon icon={faDownload} />
                            </KitButton>,
                            <KitButton onClick={() => console.log('open action')}>
                                <FontAwesomeIcon icon={faFolderOpen} />
                            </KitButton>
                        ]}
                        tags={['3 opérations']}
                        disabled
                    />
                </div>
                <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
                    <KitItemCard
                        title="Tondeuse à gazon"
                        description="Tondeuse thermique Auto tractée 70 VL 55 TH"
                        extrainfo="550.00€"
                        disabled
                        picture={<KitIcon icon={<FontAwesomeIcon icon={faFaceSmile} />} />}
                    />
                    <KitItemCard
                        vertical
                        title="Tondeuse à gazon"
                        description="Tondeuse thermique Auto tractée 70 VL 55 TH"
                        extrainfo="550.00€"
                        disabled
                        picture={<KitIcon icon={<FontAwesomeIcon icon={faFaceSmile} />} />}
                    />
                </div>
                <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
                    <KitItemCard
                        title="Tondeuse à gazon"
                        description="Tondeuse thermique Auto tractée 70 VL 55 TH"
                        extrainfo="550.00€"
                        disabled
                        picture={<KitAvatar>G</KitAvatar>}
                    />
                    <KitItemCard
                        vertical
                        title="Tondeuse à gazon"
                        description="Tondeuse thermique Auto tractée 70 VL 55 TH"
                        extrainfo="550.00€"
                        disabled
                        picture={<KitAvatar>G</KitAvatar>}
                    />
                </div>
                <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
                    <KitItemCard
                        fullWidthAvatar
                        title="Tondeuse à gazon"
                        description="Tondeuse thermique Auto tractée 70 VL 55 TH"
                        extrainfo="550.00€"
                        disabled
                        picture={<KitAvatar>G</KitAvatar>}
                    />
                    <KitItemCard
                        fullWidthAvatar
                        vertical
                        title="Tondeuse à gazon"
                        description="Tondeuse thermique Auto tractée 70 VL 55 TH"
                        extrainfo="550.00€"
                        disabled
                        picture={<KitAvatar>G</KitAvatar>}
                    />
                </div>
            </div>
        );
    },

    parameters: {
        chromatic: {disableSnapshot: false}
    }
};
