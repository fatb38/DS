import type {ProgressProps} from 'antd';
import {KitHTMLAttributes} from '../../../types';

export interface ProgressThemeProps {
    circleFontSize: number;
    circleFontWeight: string | number;
}

export interface KitProgressProps extends ProgressProps, KitHTMLAttributes<HTMLDivElement> {}
