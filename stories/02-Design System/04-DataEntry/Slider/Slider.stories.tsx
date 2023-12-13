import type {Meta, StoryObj} from '@storybook/react';
import {KitSlider} from '@kit/DataEntry';
import {argTypes} from './data';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMagnifyingGlassMinus, faMagnifyingGlassPlus} from '@fortawesome/free-solid-svg-icons';
import {KitSliderMarks} from '@kit/DataEntry/Slider/types';
import {Template} from './Template';

const meta: Meta<typeof KitSlider> = {
    component: KitSlider,
    title: 'Design System/DataEntry/Slider',
    argTypes: argTypes
};

export default meta;
type Story = StoryObj<typeof KitSlider>;

export const Api: Story = {
    render: Template,
    parameters: {
        chromatic: {disableSnapshot: true}
    }
};

export const Basic: Story = {
    render: () => (
        <div style={{width: '400px', display: 'flex', flexDirection: 'column', gap: '20px'}}>
            <KitSlider defaultValue={40} />
            <KitSlider defaultValue={40} />
            <KitSlider defaultValue={40} disabled />
            <KitSlider range defaultValue={[30, 60]} />
            <KitSlider range defaultValue={[30, 60]} disabled />
        </div>
    ),
    parameters: {
        chromatic: {disableSnapshot: false}
    }
};

export const Icons: Story = {
    render: () => (
        <div style={{width: '400px', display: 'flex', flexDirection: 'column', gap: '20px'}}>
            <KitSlider defaultValue={40} endIcon={<FontAwesomeIcon icon={faMagnifyingGlassPlus} />} />
            <KitSlider defaultValue={40} startIcon={<FontAwesomeIcon icon={faMagnifyingGlassMinus} />} />
            <KitSlider
                defaultValue={40}
                startIcon={<FontAwesomeIcon icon={faMagnifyingGlassMinus} />}
                endIcon={<FontAwesomeIcon icon={faMagnifyingGlassPlus} />}
            />
        </div>
    ),
    parameters: {
        chromatic: {disableSnapshot: false}
    }
};

export const Graduated: Story = {
    render: () => {
        const marks: KitSliderMarks = {
            0: '0',
            25: '25',
            50: '50',
            100: {
                style: {
                    color: '#FF412D'
                },
                label: 100
            }
        };
        return (
            <div style={{width: '400px', display: 'flex', flexDirection: 'column', gap: '20px'}}>
                <KitSlider marks={marks} defaultValue={25} />
                <KitSlider range marks={marks} defaultValue={[15, 37]} />

                <KitSlider included={false} marks={marks} defaultValue={25} />
            </div>
        );
    },
    parameters: {
        chromatic: {disableSnapshot: false}
    }
};
