import React from "react";
import { DropDownProps, Dropdown } from "antd";
import styled from "styled-components";

import { DropDownStyle } from "./style";

const StyledDropDown = styled(Dropdown)``;

export const KitDropDown: React.FunctionComponent<DropDownProps> = (props) => {
    return (
        <>
            <DropDownStyle />
            <StyledDropDown {...props} />
        </>
    );
};

KitDropDown.displayName = "KitDropDown";
