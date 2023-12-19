import {TourProps} from 'antd';

type AntdTourTypesToOmit = '';

export interface IKitTour extends Omit<TourProps, AntdTourTypesToOmit> {}
