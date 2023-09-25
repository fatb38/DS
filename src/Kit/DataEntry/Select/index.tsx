import React, {useEffect, useRef, useState} from 'react';
import cn from 'classnames';
import {CloseCircleOutlined} from '@ant-design/icons';
import {CheckOutlined} from '@ant-design/icons';
import {KitIcon} from '../../General/';
import {KitSelectProps} from './types';
import type {CustomTagProps} from 'rc-select/lib/BaseSelect';
import {StyledBadge, StyledKitSelect, StyledLabel} from './style';
import {KitDropdownOutlined} from '@icons/index';
import KitInputWrapper from '@kit/DataEntry/Input/InputWrapper';
import {KitTag} from '@kit/DataEntry/';
import {useKitTheme} from '@theme/theme-context';

const getOptionLabel = (props, theme) => (
    <div className="kit-select-option">
        {props.icon && <KitIcon className="kit-select-option-icon" icon={props.icon} on />}
        {!props.icon && (
            <StyledBadge $theme={theme.components.Select.Select.colorBadge} className="kit-select-option-badge">
                {props.color && <div className="kit-select-option-color" style={{backgroundColor: props.color}} />}
            </StyledBadge>
        )}
        <StyledLabel className="kit-select-option-label">{props.label}</StyledLabel>
    </div>
);

const parseOptions = (list, labelOnly, theme) => {
    return list.map(({className, disabled, value, options, ...rest}) => {
        if (options) {
            return {
                label: rest.label,
                options: parseOptions(options, labelOnly, theme)
            };
        }
        return {
            label: labelOnly ? <StyledLabel>{rest.label}</StyledLabel> : getOptionLabel(rest, theme),
            className: rest.highlight ? `${className} kit-select-highlight-option` : className,
            disabled,
            value
        };
    });
};

const dropDownRenderer = (menu: React.ReactElement<any, string | React.JSXElementConstructor<any>>) => {
    return <div className="kit-select-dropdown-content">{menu}</div>;
};

const tagRender = (props: CustomTagProps) => {
    const {label, onClose} = props;
    const onPreventMouseDown = (event: React.MouseEvent<HTMLSpanElement>) => {
        event.preventDefault();
        event.stopPropagation();
    };

    return (
        <KitTag color="blueInvert" onMouseDown={onPreventMouseDown} onClose={onClose}>
            {typeof label === 'object' && label}
            {typeof label === 'string' && (
                <div className="kit-select-option">
                    <StyledLabel className="kit-select-option-label">{label}</StyledLabel>
                </div>
            )}
        </KitTag>
    );
};

const maxTagRender = omittedValues => {
    return <KitTag color="blueInvert">+{omittedValues.length} ...</KitTag>;
};

export const KitSelect: React.FunctionComponent<KitSelectProps> = ({
    options,
    labelOnly,
    label,
    helper,
    onClick,
    onClear,
    onBlur,
    oneLineTags = false,
    allowClear = true,
    ...props
}) => {
    const selectRef = useRef<any>(null);
    const {theme} = useKitTheme();
    const [internalOptions, setOptions] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (!options) {
            setOptions([]);
        } else {
            setOptions(parseOptions(options, labelOnly, theme));
        }
    }, [options, labelOnly]);

    const getClasses = () => {
        return (
            (props.className || '') +
            ' ant-select-' +
            (props.placement && props.placement.indexOf('top') >= 0 ? 'top' : 'bottom')
        );
    };

    const getDropdownClasses = () => {
        return cn({
            'kit-select-dropdown-top': props.placement && props.placement.indexOf('top') >= 0,
            'kit-select-dropdown-bottom': !props.placement || props.placement.indexOf('top') < 0
        });
    };

    const handleOnClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (selectRef.current) {
            selectRef.current.focus();
        }

        if ((!props.mode && isOpen) || (props.mode && isOpen && (event.target as HTMLElement).closest('.ant-select'))) {
            setIsOpen(false);
        } else {
            setIsOpen(true);
        }

        onClick && onClick(event);
    };

    const handleOnClear = () => {
        setIsOpen(false);
        onClear && onClear();
    };

    const handleOnBlur = (event: React.FocusEvent<HTMLElement, Element>) => {
        setIsOpen(false);
        onBlur && onBlur(event);
    };

    return (
        <KitInputWrapper label={label} helper={helper} disabled={props.disabled} status={props.status}>
            <StyledKitSelect
                $theme={theme.components.Select.Select}
                {...props}
                className={getClasses()}
                popupClassName={getDropdownClasses()}
                options={internalOptions}
                menuItemSelectedIcon={<KitIcon icon={<CheckOutlined />} on />}
                suffixIcon={!props.loading ? <KitDropdownOutlined /> : undefined}
                allowClear={allowClear ? {clearIcon: <CloseCircleOutlined />} : undefined}
                dropdownRender={dropDownRenderer}
                tagRender={props.mode ? tagRender : undefined}
                maxTagCount={oneLineTags ? 'responsive' : undefined}
                maxTagPlaceholder={oneLineTags ? maxTagRender : undefined}
                ref={selectRef}
                open={props.open !== undefined ? props.open : isOpen}
                onClick={event => handleOnClick(event)}
                onClear={() => handleOnClear()}
                onBlur={event => handleOnBlur(event)}
            />
        </KitInputWrapper>
    );
};

KitSelect.displayName = 'KitSelect';
