import type {ProgressProps} from 'antd';
import {KitHTMLAttributes} from '../../../types';
import {IKitProgressTheme} from '@theme/types/components/Feedback/Progress';

export interface IKitProgress extends ProgressProps, KitHTMLAttributes<HTMLDivElement> {}

export interface IStyledKitProgress {
    $theme: IKitProgressTheme;
}
