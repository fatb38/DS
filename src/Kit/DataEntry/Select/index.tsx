import React, { useEffect, useState } from "react";
import { Select } from "antd";
import cn from "classnames";
import styled from "styled-components";
import { CheckOutlined } from "@ant-design/icons";
import { KitIcon } from "../../General/";
import { KitSelectProps } from "./types";
import primaryTheme, { headerTheme } from "./theme";

import {
    KitSelectStyle,
    StyledBadge,
    StyledLabel,
} from "./style";
import { KitDropdownOutlined } from "@icons/index";

const DropDownRenderer = (menu) => (
    <div className="kit-select-dropdown-content">{menu}</div>
);

const StyledKitSelect = styled(Select)<KitSelectProps>`
    ${KitSelectStyle}
`;

const getOptionColor = (props, header) => {
    if (props.highlight) {
        return headerTheme.highlightColor;
    } else if (header) {
        return headerTheme.itemsColor;
    }
    return;
};

const getOptionStyle = (highlight) => {
    if (highlight) {
        return {
            style: {
                color: headerTheme.highlightColor,
            },
        };
    }
    return null;
};

const getOptionLabel = (props, header) => (
    <>
        {props.icon && (
            <KitIcon
                icon={props.icon}
                on={!header}
                color={getOptionColor(props, header)}
            />
        )}
        {!props.icon && (
            <StyledBadge>
                {props.color && (
                    <div style={{ backgroundColor: props.color }} />
                )}
            </StyledBadge>
        )}
        <StyledLabel {...getOptionStyle(props.highlight)}>
            {props.label}
        </StyledLabel>
    </>
);

const parseOptions = (list, labelOnly, header) => {
    return list.map(({ className, disabled, value, options, ...rest }) => {
        if (options) {
            return {
                label: rest.label,
                options: parseOptions(options, labelOnly, header),
            };
        }
        return {
            label: labelOnly ? (
                <StyledLabel>{rest.label}</StyledLabel>
            ) : (
                getOptionLabel(rest, header)
            ),
            className: rest.highlight
                ? `${className} kit-select-highlight-option`
                : className,
            disabled,
            value,
        };
    });
};

const getDropdownClasses = (placement, header) =>
    cn({
        "kit-select-dropdown-top": placement && placement.indexOf("top") >= 0,
        "kit-select-dropdown-bottom":
            !placement || placement.indexOf("top") < 0,
        "kit-header-select-droppdown": header,
    });

export const KitSelect: React.FunctionComponent<KitSelectProps> = ({
    options,
    labelOnly,
    mode,
    danger,
    header,
    ...props
}) => {
    let [internalOptions, setOptions] = useState([]);

    useEffect(() => {
        if (!options) {
            setOptions([]);
        } else {
            setOptions(parseOptions(options, labelOnly, header));
        }
    }, [options, labelOnly, header]);

    const kitProps: KitSelectProps = {
        ...props,
        $labelOnly: labelOnly,
        status: danger ? "error" : null,
        dropdownRender: DropDownRenderer,
        suffixIcon: <KitDropdownOutlined />,
        popupClassName: getDropdownClasses(props.placement, header),
        className:
            (props.className || "") +
            " ant-select-" +
            (props.placement && props.placement.indexOf("top") >= 0
                ? "top"
                : "bottom"),
        menuItemSelectedIcon: (
            <KitIcon icon={<CheckOutlined />} on={!header} />
        ),
    };

    return (
        <StyledKitSelect
            {...kitProps}
            theme={header ? headerTheme : primaryTheme}
            options={internalOptions}
        />
    );
};

KitSelect.displayName = "KitSelect";
