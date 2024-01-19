import type {Meta, StoryObj} from '@storybook/react';
import {KitTooltip} from '@kit/DataDisplay';
import {argTypes} from './data';
import React from 'react';
import {KitButton} from '@kit/General';
import {KitSpace} from '@kit/Layout';
import {Template} from './Template';

const meta: Meta<typeof KitTooltip> = {
    component: KitTooltip,
    title: 'Design System/DataDisplay/Tooltip',
    argTypes: argTypes
};

export default meta;
type Story = StoryObj<typeof KitTooltip>;

export const Api: Story = {
    render: Template,
    parameters: {
        chromatic: {disableSnapshot: true}
    }
};

export const ChromaticTest: Story = {
    render: () => (
        <div style={{paddingLeft: '140px', paddingTop: '100px'}}>
            <div>
                <div style={{marginLeft: 70, whiteSpace: 'nowrap', display: 'flex', gap: '60px'}}>
                    <KitTooltip open placement="topLeft" title="promp text">
                        <KitButton>TL</KitButton>
                    </KitTooltip>
                    <KitTooltip open placement="top" title="promp text">
                        <KitButton>Top</KitButton>
                    </KitTooltip>
                    <KitTooltip open placement="topRight" title="promp text">
                        <KitButton>TR</KitButton>
                    </KitTooltip>
                </div>
                <div style={{width: 70, float: 'left'}}>
                    <KitSpace direction="vertical">
                        <KitTooltip open placement="leftTop" title="promp text">
                            <KitButton>LT</KitButton>
                        </KitTooltip>
                        <KitTooltip open placement="left" title="promp text">
                            <KitButton>Left</KitButton>
                        </KitTooltip>
                        <KitTooltip open placement="leftBottom" title="promp text">
                            <KitButton>LB</KitButton>
                        </KitTooltip>
                    </KitSpace>
                </div>
                <div style={{width: 70, marginLeft: '400px'}}>
                    <KitSpace direction="vertical">
                        <KitTooltip open placement="rightTop" title="promp text">
                            <KitButton>RT</KitButton>
                        </KitTooltip>
                        <KitTooltip open placement="right" title="promp text">
                            <KitButton>Right</KitButton>
                        </KitTooltip>
                        <KitTooltip open placement="rightBottom" title="promp text">
                            <KitButton>RB</KitButton>
                        </KitTooltip>
                    </KitSpace>
                </div>
                <div style={{marginLeft: 70, clear: 'both', whiteSpace: 'nowrap', display: 'flex', gap: '60px'}}>
                    <KitTooltip open placement="bottomLeft" title="promp text">
                        <KitButton>BL</KitButton>
                    </KitTooltip>
                    <KitTooltip open placement="bottom" title="promp text">
                        <KitButton>Bottom</KitButton>
                    </KitTooltip>
                    <KitTooltip open placement="bottomRight" title="promp text">
                        <KitButton>BR</KitButton>
                    </KitTooltip>
                </div>
            </div>
        </div>
    )
};
