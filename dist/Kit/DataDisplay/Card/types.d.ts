import {IKitCardTheme} from '@theme/types/components/DataDisplay/Card';
import {CardProps} from 'antd';

type AntdCardTypesToOmit =
    | 'size'
    | 'type'
    | 'bordered'
    | 'bodyStyle'
    | 'hoverable'
    | 'tabProps'
    | 'tabList'
    | 'defaultActiveTabKey'
    | 'tabBarExtraContent'
    | 'onTabChange';

export default interface IKitCard extends Omit<CardProps, AntdCardTypesToOmit> {
    disabled?: boolean;
    contentTitle?: string;
    contentDescription?: string;
    sideSpacing?: boolean;
    separator?: boolean;
    onContentTitleClick?: () => void;
}

export interface IStyledKitCard {
    $theme: IKitCardTheme;
    $disabled: boolean;
    $sideSpacing: boolean;
    $separator: boolean;
}

export interface IStyledKitCardContentTitleContainer {
    $isContentTitleClick: boolean;
    $disabled: boolean;
}
