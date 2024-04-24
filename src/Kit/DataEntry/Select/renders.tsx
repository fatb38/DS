import {ReactElement, ReactNode} from 'react';
import {KitIdCard, KitTag} from '@kit/DataDisplay';
import {KitIcon} from '@kit/General';
import {IKitInternalOption, IKitOption, IKitSelect} from './types';
import {isIdCardOption} from './guard';
import {LabelInValueType} from 'rc-select/es/Select';
import type {CustomTagProps} from 'rc-select/es/BaseSelect';
import {FlattenOptionData} from 'rc-select/lib/interface';
import {BaseOptionType} from 'antd/es/select';

export const getLabelRender = ({value}: LabelInValueType | CustomTagProps, options: IKitInternalOption[]) => {
    return options.filter(option => option.value === value).pop()?.labelToDisplay;
};

export const getTagRender = (
    customTag: CustomTagProps,
    disabled: IKitSelect['disabled'],
    status: IKitSelect['status'],
    options: IKitInternalOption[]
) => {
    const onPreventMouseDown = (event: React.MouseEvent<HTMLSpanElement>) => {
        event.preventDefault();
        event.stopPropagation();
    };

    return (
        <KitTag
            color={_getTagColor(disabled, status)}
            secondaryColorInvert
            onMouseDown={onPreventMouseDown}
            onClose={!disabled ? customTag.onClose : undefined}
        >
            {getLabelRender(customTag, options)}
        </KitTag>
    );
};

export const getMaxTagRender = (
    omittedValues: {length: number},
    disabled: IKitSelect['disabled'],
    status: IKitSelect['status']
) => (
    <KitTag color={_getTagColor(disabled, status)} secondaryColorInvert>
        +{omittedValues.length}
    </KitTag>
);

const _getTagColor = (disabled: IKitSelect['disabled'], status: IKitSelect['status']) => {
    if (disabled) {
        return 'mediumGrey';
    }

    if (status === 'error') {
        return 'red';
    }

    if (status === 'warning') {
        return 'orange';
    }

    return 'blue';
};

export const getDropdownRender = (menu: ReactElement, dropdownRender?: IKitSelect['dropdownRender']) => (
    <div className="kit-select-dropdown-content">{dropdownRender ? dropdownRender(menu) : menu}</div>
);

export const fixSelectRender = (id: string) => {
    const inputElement = document.getElementById(id);
    const selectElement = inputElement?.closest('.ant-select');
    const dropDownElement = document.getElementById(id + '_list')?.closest('.ant-select-dropdown');

    if (selectElement && dropDownElement) {
        const isDropDownOnTop = dropDownElement.className.indexOf('ant-select-dropdown-placement-top') >= 0;
        const isDropDownOnBottom = dropDownElement.className.indexOf('ant-select-dropdown-placement-bottom') >= 0;

        if (isDropDownOnTop) {
            selectElement.classList.remove('ant-select-bottom');
            selectElement.classList.add('ant-select-top');
        }

        if (isDropDownOnBottom) {
            selectElement.classList.remove('ant-select-top');
            selectElement.classList.add('ant-select-bottom');
        }
    }
};

export const getOptionRender = (
    {value, label}: FlattenOptionData<BaseOptionType>,
    flattenInternalOptions: IKitInternalOption[]
) => {
    return flattenInternalOptions.find(option => option.value === value)?.labelToDisplay ?? label;
};

export const getOptionLabelRender = (selectOption: IKitOption, labelOnly?: IKitSelect['labelOnly']): ReactNode => {
    if (isIdCardOption(selectOption)) {
        const {idCard} = selectOption;

        return (
            <div className="kit-select-option">
                <KitIdCard {...idCard} />
            </div>
        );
    }

    const {icon, color, label} = selectOption;

    return (
        <div className="kit-select-option">
            {icon && !labelOnly && <KitIcon className="kit-select-option-icon" icon={icon} on />}
            {color && !labelOnly && (
                <div className="kit-select-option-badge">{color && <div style={{backgroundColor: color}} />}</div>
            )}
            <div className="kit-select-option-label">{label}</div>
        </div>
    );
};
