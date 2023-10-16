import {StepsProps, StepProps} from 'antd';
import {KitHTMLAttributes} from '../../../types';

type AntdStepTypesToOmit = 'subTitle' | 'icon';

interface KitStepProps extends Omit<StepProps, AntdStepTypesToOmit> {}

type AntdStepsTypesToOmit = 'type' | 'progressDot' | 'size' | 'percent' | 'labelPlacement';

export interface KitStepsProps extends Omit<StepsProps, AntdStepsTypesToOmit>, KitHTMLAttributes<HTMLDivElement> {
    items?: KitStepProps[];
}
