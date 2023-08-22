import React, {useEffect, useState} from 'react';
import {Select as AntdSelect} from 'antd';
import cn from 'classnames';
import {CloseCircleOutlined} from '@ant-design/icons';
import styled from 'styled-components';
import {CheckOutlined} from '@ant-design/icons';
import {KitIcon} from '../../General/';
import {KitSelectProps} from './types';

import {KitSelectStyle, StyledBadge, StyledLabel} from './style';
import {KitDropdownOutlined} from '@icons/index';
import KitInputWrapper from '@kit/DataEntry/Input/InputWrapper';

const StyledKitSelect = styled(AntdSelect)`
    ${KitSelectStyle}
`;

const getOptionLabel = props => (
    <>
        {props.icon && <KitIcon icon={props.icon} on />}
        {!props.icon && <StyledBadge>{props.color && <div style={{backgroundColor: props.color}} />}</StyledBadge>}
        <StyledLabel>{props.label}</StyledLabel>
    </>
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

export const KitSelect: React.FunctionComponent<KitSelectProps> = ({
    options,
    labelOnly,
    mode,
    label,
    helper,
    allowClear = true,
    ...props
}) => {
    let [internalOptions, setOptions] = useState([]);

    useEffect(() => {
        if (!options) {
            setOptions([]);
        } else {
            setOptions(parseOptions(options, labelOnly));
        }
    }, [options, labelOnly]);

    const DropDownRenderer = (menu: React.ReactElement<any, string | React.JSXElementConstructor<any>>) => {
        return <div className="kit-select-dropdown-content">{menu}</div>;
    };

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
                dropdownRender={DropDownRenderer}
            />
        </KitInputWrapper>
    );
};

KitSelect.displayName = 'KitSelect';
