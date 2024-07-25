import {ReactElement, ReactNode} from 'react';
import {KitIdCard, KitTag} from '@kit/DataDisplay';
import {KitIcon} from '@kit/General';
import {IKitInternalOption, IKitOption, IKitSelect} from './types';
import {isIdCardOption} from './guard';
import {LabelInValueType} from 'rc-select/es/Select';
import type {CustomTagProps} from 'rc-select/es/BaseSelect';
import {IKitTag} from '@kit/DataDisplay/Tag/types';

export const getLabelRender = ({value}: LabelInValueType | CustomTagProps, options: IKitInternalOption[]) =>
    options.filter(option => option.value === value).pop()?.labelToDisplay;

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

    const labelToDisplay = getLabelRender(customTag, options);

    let idCard = labelToDisplay?.idCard;

    if (!idCard) {
        let icon: ReactNode;

        if (labelToDisplay?.icon) {
            icon = <KitIcon className="kit-select-option-icon" icon={labelToDisplay.icon} on />;
        }

        if (labelToDisplay?.color) {
            icon = (
                <div className="kit-select-option-badge">
                    {labelToDisplay.color && <div style={{backgroundColor: labelToDisplay.color}} />}
                </div>
            );
        }

        idCard = {
            avatarProps: {
                icon: icon,
                shape: 'square'
            },
            description: labelToDisplay?.label
        };
    }

    return (
        <KitTag
            type={_getTagType(disabled, status)}
            onMouseDown={onPreventMouseDown}
            onClose={!disabled ? customTag.onClose : undefined}
            disabled={disabled}
            idCardProps={{...idCard}}
        />
    );
};

export const getMaxTagRender = (
    omittedValues: {length: number},
    disabled: IKitSelect['disabled'],
    status: IKitSelect['status']
) => (
    <KitTag
        type={_getTagType(disabled, status)}
        idCardProps={{description: `+${omittedValues.length}`}}
        disabled={disabled}
    />
);

const _getTagType = (disabled: IKitSelect['disabled'], status: IKitSelect['status']): IKitTag['type'] => {
    if (disabled || status === 'warning') {
        return 'neutral';
    }

    if (status === 'error') {
        return 'error';
    }

    return 'secondary';
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
