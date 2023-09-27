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

export default interface IKitCardProps extends Omit<CardProps, AntdCardTypesToOmit> {
    disabled?: boolean;
    contentTitle?: string;
    contentDescription?: string;
    sideSpacing?: boolean;
    separator?: boolean;
    onContentTitleClick?: () => void;
}
