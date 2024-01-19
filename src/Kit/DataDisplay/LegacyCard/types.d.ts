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

export default interface IKitLegacyCard extends Omit<CardProps, AntdCardTypesToOmit> {
    disabled?: boolean;
    contentTitle?: string;
    contentDescription?: string;
    separator?: boolean;
    onContentTitleClick?: () => void;
}

export interface IStyledKitLegacyCard {
    $disabled: boolean;
    $separator: boolean;
}

export interface IStyledKitLegacyCardContentTitleContainer {
    $isContentTitleClick: boolean;
    $disabled: boolean;
}
