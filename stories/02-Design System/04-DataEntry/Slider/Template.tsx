import React from 'react';
import {KitSlider} from '@kit/DataEntry/';
import {KitSpace} from '@kit/Layout';
import {IEditorTemplate} from '../../../types';
import {IKitSliderRange, IKitSliderSingle, KitSliderMarks} from '@kit/DataEntry/Slider/types';
import {SliderTooltipProps} from 'antd/es/slider';

type TemplateType = IKitSliderSingle & IKitSliderRange & SliderTooltipProps;

export const Template = (args: IKitSliderSingle | IKitSliderRange) => {
    const {open, placement, range, ...props} = args as TemplateType;
    return (
        <KitSpace direction="vertical" style={{width: '300px'}}>
            <KitSlider tooltip={{open, placement}} {...props} />
            <KitSlider range={range} defaultValue={[0, 30]} tooltip={{open, placement}} {...props} />
        </KitSpace>
    );
};

export const EditorTemplate: IEditorTemplate = () => {
    const style = {width: '300px'};

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
        <KitSpace direction="vertical" size="m">
            <KitSpace direction="horizontal" size="l">
                <KitSlider style={style} defaultValue={40} />
                <KitSlider style={style} range defaultValue={[10, 40]} />
            </KitSpace>
            <KitSpace direction="horizontal" size="l">
                <KitSlider style={style} disabled defaultValue={40} />
                <KitSlider style={style} disabled range defaultValue={[10, 40]} />
            </KitSpace>
            <KitSpace direction="horizontal" size="l">
                <KitSlider style={style} marks={marks} defaultValue={40} />
                <KitSlider style={style} marks={marks} range defaultValue={[10, 40]} />
            </KitSpace>
        </KitSpace>
    );
};
EditorTemplate.path = 'components.Slider';
EditorTemplate.title = 'Slider';
