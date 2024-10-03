import {SelectProps} from 'antd';
import {KitHTMLAttributes} from '../../../types';
import {ReactNode, ReactElement, MouseEvent} from 'react';
import {IKitIdCard} from '@kit/DataDisplay/IdCard/types';

type AntdSelectTypesToOmit =
    | 'dropdownMatchSelectWidth'
    | 'options'
    | 'bordered'
    | 'fieldNames'
    | 'filterSort'
    | 'labelInValue'
    | 'maxTagCount'
    | 'maxTagPlaceholder'
    | 'maxTagTextLength'
    | 'optionLabelProp'
    | 'removeIcon'
    | 'searchValue'
    | 'size'
    | 'tokenSeparators'
    | 'virtual'
    | 'variant'
    | 'clearIcon'
    | 'onDeselect'
    | 'onInputKeyDown'
    | 'dropdownStyle'
    | 'menuItemSelectedIcon'
    | 'labelRender'
    | 'optionRender'
    | 'suffixIcon';

type OptionCommons = {
    label?: string;
    value?: string | number | null;
    className?: string;
    disabled?: boolean;
};

export type IdCard = OptionCommons & {
    idCard?: IKitIdCard;
};

export type ClassicOption = OptionCommons & {
    icon?: ReactNode;
    color?: string;
    options?: Omit<IKitOption, 'options'>[];
};

export type IKitOption = IdCard & ClassicOption;

export type IKitInternalOption = Omit<IKitOption, 'label' | 'options'> & {
    label: ReactNode;
    labelToDisplay?: IdCard & {
        icon?: ReactNode;
        color?: string;
    };
    rawLabel?: ReactNode;
    options?: IKitInternalOption[];
};

export interface IKitSelect extends Omit<SelectProps, AntdSelectTypesToOmit>, KitHTMLAttributes<HTMLDivElement> {
    label?: string;
    helper?: string;
    htmlFor?: string;
    allowClear?: boolean;
    oneLineTags?: boolean;
    options?: IKitOption[];
    labelOnly?: boolean;
    wrapperClassName?: string;
    required?: boolean;
    infoIcon?: ReactNode;
    actions?: ReactElement[];
    onInfoClick?: (e: MouseEvent<HTMLElement, MouseEvent>) => void;
    readonly?: boolean;
}
