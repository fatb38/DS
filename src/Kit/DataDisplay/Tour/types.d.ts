import {IKitThemeGeneral} from '@theme/types';
import {IKitButtonTheme} from '@theme/types/components/General/Button';
import {TourProps} from 'antd';

type AntdTourTypesToOmit = '';

export interface IKitTour extends Omit<TourProps, AntdTourTypesToOmit> {}

export interface IStyledAntdTour {
    $buttonTheme: IKitButtonTheme;
    $generalTheme: IKitThemeGeneral;
}
