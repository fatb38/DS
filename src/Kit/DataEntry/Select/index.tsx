import React, {useEffect, useRef, useState} from 'react';
import {Select as AntdSelect} from 'antd';
import cn from 'classnames';
import {CloseCircleOutlined} from '@ant-design/icons';
import styled from 'styled-components';
import {CheckOutlined} from '@ant-design/icons';
import {KitIcon} from '../../General/';
import {KitSelectProps} from './types';
import type {CustomTagProps} from 'rc-select/lib/BaseSelect';
import {KitSelectStyle, StyledBadge, StyledLabel} from './style';
import {KitDropdownOutlined} from '@icons/index';
import KitInputWrapper from '@kit/DataEntry/Input/InputWrapper';
import {KitTag} from '@kit/DataEntry/';

const StyledKitSelect = styled(AntdSelect)`
    ${KitSelectStyle}
`;

const getOptionLabel = props => (
    <div className="kit-select-option">
        {props.icon && <KitIcon className="kit-select-option-icon" icon={props.icon} on />}
        {!props.icon && (
            <StyledBadge>
                {props.color && <div className="kit-select-option-color" style={{backgroundColor: props.color}} />}
            </StyledBadge>
        )}
        <StyledLabel>{props.label}</StyledLabel>
    </div>
);

const parseOptions = (list, labelOnly) => {
    return list.map(({className, disabled, value, options, ...rest}) => {
        if (options) {
            return {
                label: rest.label,
                options: parseOptions(options, labelOnly)
            };
        }
        return {
            label: labelOnly ? <StyledLabel>{rest.label}</StyledLabel> : getOptionLabel(rest),
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
    const {label, closable, onClose} = props;
    const onPreventMouseDown = (event: React.MouseEvent<HTMLSpanElement>) => {
        event.preventDefault();
        event.stopPropagation();
    };

    return (
        <KitTag color="blueInvert" onMouseDown={onPreventMouseDown} closable={closable} onClose={onClose}>
            {label}
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
    let [internalOptions, setOptions] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const selectRef = useRef<any>(null);

    useEffect(() => {
        if (!options) {
            setOptions([]);
        } else {
            setOptions(parseOptions(options, labelOnly));
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
                open={isOpen}
                onClick={event => handleOnClick(event)}
                onClear={() => handleOnClear()}
                onBlur={event => handleOnBlur(event)}
            />
        </KitInputWrapper>
    );
};

KitSelect.displayName = 'KitSelect';
