import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import {KitProgress} from '@kit/Feedback';
import {argTypes, Template} from './data';

const meta: Meta<typeof KitProgress> = {
    component: KitProgress,
    title: 'Design System/Feedback/Progress',
    argTypes: argTypes
};

export default meta;
type Story = StoryObj<typeof KitProgress>;

export const Api: Story = {
    render: Template,
    parameters: {
        chromatic: {disableSnapshot: true}
    }
};

export const Types: Story = {
    render: () => (
        <div style={{display: 'flex', gap: '8px', flexDirection: 'column', width: '500px'}}>
            <div style={{fontWeight: 'bold', margin: '5px 0'}}>Linear</div>
            <KitProgress percent={50} status="active" />
            <KitProgress percent={70} status="exception" />
            <KitProgress percent={100} />
            <div style={{fontWeight: 'bold', margin: '5px 0'}}>Circular</div>
            <div style={{display: 'flex', gap: '16px'}}>
                <KitProgress type="circle" percent={75} />
                <KitProgress type="circle" percent={70} status="exception" />
                <KitProgress type="circle" percent={100} />
            </div>
            <div style={{fontWeight: 'bold', margin: '5px 0'}}>Dashboard</div>
            <div style={{display: 'flex', gap: '16px'}}>
                <KitProgress type="dashboard" percent={75} />
                <KitProgress type="dashboard" percent={70} status="exception" />
                <KitProgress type="dashboard" percent={100} />
            </div>
            <div style={{fontWeight: 'bold', margin: '5px 0'}}>Steps</div>
            <div style={{display: 'flex', gap: '16px'}}>
                <KitProgress percent={75} steps={3}/>
                <KitProgress percent={70} status="exception" steps={3}/>
                <KitProgress percent={100} steps={3}/>
            </div>
        </div>
    ),
    parameters: {
        chromatic: {disableSnapshot: false}
    }
};

export const Sizes: Story = {
    render: () => (
        <div style={{display: 'flex', gap: '8px', flexDirection: 'column', width: '500px'}}>
            <div style={{fontWeight: 'bold', margin: '5px 0'}}>Linear</div>
            <KitProgress percent={50} status="active" />
            <KitProgress percent={70} status="exception" size="small"/>
            <KitProgress percent={100} size={[300, 20]} />
            <div style={{fontWeight: 'bold', margin: '5px 0'}}>Circular</div>
            <div style={{display: 'flex', gap: '16px', alignItems: 'center'}}>
                <KitProgress type="circle" percent={75} />
                <KitProgress type="circle" percent={70} status="exception" size="small"/>
                <KitProgress type="circle" percent={100} size={20}/>
            </div>
            <div style={{fontWeight: 'bold', margin: '5px 0'}}>Dashboard</div>
            <div style={{display: 'flex', gap: '16px', alignItems: 'center'}}>
                <KitProgress type="dashboard" percent={75} />
                <KitProgress type="dashboard" percent={70} status="exception" size="small"/>
                <KitProgress type="dashboard" percent={100} size={20}/>
            </div>
            <div style={{fontWeight: 'bold', margin: '5px 0'}}>Steps</div>
            <div style={{display: 'flex', gap: '16px', alignItems: 'center'}}>
                <KitProgress percent={75} steps={3}/>
                <KitProgress percent={70} status="exception" steps={3} size="small"/>
                <KitProgress percent={100} steps={3} size={20}/>
            </div>
        </div>
    ),
    parameters: {
        chromatic: {disableSnapshot: false}
    }
};
