import type {TabsProps} from 'antd';
import {KitHTMLAttributes} from '../../../types';
import {IKitTabsTheme} from '@theme/types/components/DataDisplay/Tabs';

export interface IKitTabs extends TabsProps, KitHTMLAttributes<HTMLDivElement> {}

export interface IStyledKitTabs {
    $theme: IKitTabsTheme;
}

export interface IStyledKitTabsDropDown {
    $theme: IKitTabsTheme['DropDown'];
}
