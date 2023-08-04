import React from "react";
import { Progress } from "antd";
import styled from "styled-components";
import { progressTheme } from "./theme";
import { KitProgressProps } from "./types";

const StyledProgress = styled(Progress)<KitProgressProps>`
    &.ant-progress-circle .ant-progress-text {
        font-size: ${progressTheme.circleFontSize}px;
        font-weight: ${progressTheme.circleFontWeight};
    }
`;

export const KitProgress: React.FunctionComponent<KitProgressProps> = (
    props
) => {
    return <StyledProgress {...props} />;
};
KitProgress.displayName = "KitProgress";
