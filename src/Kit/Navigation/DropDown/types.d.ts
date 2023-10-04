import {DropdownProps, MenuProps} from 'antd';
import {KitHTMLAttributes} from '../../../types';
import {IKitDropDownTheme} from '@theme/types/components/Navigation/DropDown';

export interface IKitDropdown extends DropdownProps, KitHTMLAttributes<HTMLDivElement> {}

export interface IKitDropdownMenu extends MenuProps {}

export interface IDropDownStyle {
    $theme: IKitDropDownTheme;
}
