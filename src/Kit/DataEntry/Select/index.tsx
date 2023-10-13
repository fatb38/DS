import React, {useEffect, useRef, useState, FocusEvent, MouseEvent, FunctionComponent} from 'react';
import cn from 'classnames';
import {KitIcon} from '../../General/';
import {IKitSelect} from './types';
import type {CustomTagProps} from 'rc-select/lib/BaseSelect';
import {StyledBadge, StyledKitSelect, StyledLabel} from './style';
import {KitDropdownOutlined} from '@icons/index';
import KitInputWrapper from '@kit/DataEntry/Input/InputWrapper';
import {KitTag} from '@kit/DataEntry/';
import {useKitTheme} from '@theme/theme-context';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircleXmark} from '@fortawesome/free-regular-svg-icons';
import {faCheck} from '@fortawesome/free-solid-svg-icons';

const _getOptionLabel = (props, theme) => (
    <div className="kit-select-option">
        {props.icon && <KitIcon className="kit-select-option-icon" icon={props.icon} on />}
        {!props.icon && (
            <StyledBadge $theme={theme.components.Select.ColorBadge} className="kit-select-option-badge">
                {props.color && <div className="kit-select-option-color" style={{backgroundColor: props.color}} />}
            </StyledBadge>
        )}
        <StyledLabel className="kit-select-option-label">{props.label}</StyledLabel>
    </div>
);

const _parseOptions = (list, labelOnly, theme) => {
    return list.map(({className, disabled, value, options, ...rest}) => {
        if (options) {
            return {
                label: rest.label,
                options: _parseOptions(options, labelOnly, theme)
            };
        }
        return {
            label: labelOnly ? <StyledLabel>{rest.label}</StyledLabel> : _getOptionLabel(rest, theme),
            className: rest.highlight ? `${className} kit-select-highlight-option` : className,
            disabled,
            value
        };
    });
};

const _dropDownRenderer = (menu: React.ReactElement<any, string | React.JSXElementConstructor<any>>) => {
    return <div className="kit-select-dropdown-content">{menu}</div>;
};

const _tagRender = (props: CustomTagProps) => {
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

const _maxTagRender = omittedValues => {
    return <KitTag color="blueInvert">+{omittedValues.length} ...</KitTag>;
};

export const KitSelect: FunctionComponent<IKitSelect> = ({
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
            setOptions(_parseOptions(options, labelOnly, theme));
        }
    }, [options, labelOnly]);

    const _getClasses = () => {
        return (
            (props.className || '') +
            ' ant-select-' +
            (props.placement && props.placement.indexOf('top') >= 0 ? 'top' : 'bottom')
        );
    };

    const _getDropdownClasses = () => {
        return cn({
            'kit-select-dropdown-top': props.placement && props.placement.indexOf('top') >= 0,
            'kit-select-dropdown-bottom': !props.placement || props.placement.indexOf('top') < 0
        });
    };

    const _handleOnClick = (event: MouseEvent<HTMLDivElement>) => {
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

    const _handleOnClear = () => {
        setIsOpen(false);
        onClear && onClear();
    };

    const _handleOnBlur = (event: FocusEvent<HTMLElement, Element>) => {
        setIsOpen(false);
        onBlur && onBlur(event);
    };

    return (
        <KitInputWrapper label={label} helper={helper} disabled={props.disabled} status={props.status}>
            <StyledKitSelect
                $theme={theme.components.Select}
                {...props}
                className={_getClasses()}
                popupClassName={_getDropdownClasses()}
                options={internalOptions}
                menuItemSelectedIcon={<KitIcon icon={<FontAwesomeIcon icon={faCheck} />} on />}
                suffixIcon={!props.loading ? <KitDropdownOutlined /> : undefined}
                allowClear={allowClear ? {clearIcon: <FontAwesomeIcon icon={faCircleXmark} />} : undefined}
                dropdownRender={_dropDownRenderer}
                tagRender={props.mode ? _tagRender : undefined}
                maxTagCount={oneLineTags ? 'responsive' : undefined}
                maxTagPlaceholder={oneLineTags ? _maxTagRender : undefined}
                ref={selectRef}
                open={props.open !== undefined ? props.open : isOpen}
                onClick={event => _handleOnClick(event)}
                onClear={() => _handleOnClear()}
                onBlur={event => _handleOnBlur(event)}
            />
        </KitInputWrapper>
    );
};

KitSelect.displayName = 'KitSelect';
