import {StepsProps, StepProps} from 'antd';
import {KitHTMLAttributes} from '../../../types';

type AntdStepTypesToOmit = 'subTitle' | 'icon';

interface IKitStep extends Omit<StepProps, AntdStepTypesToOmit> {}

type AntdStepsTypesToOmit = 'type' | 'progressDot' | 'size' | 'percent' | 'labelPlacement';

export interface IKitSteps extends Omit<StepsProps, AntdStepsTypesToOmit>, KitHTMLAttributes<HTMLDivElement> {
    items?: IKitStep[];
}
