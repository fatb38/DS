import React from "react";
import { Steps as AntdSteps } from "antd";
import { KitStepsProps } from "./types";
import { styled } from "styled-components";
import theme from "@theme/index";

const StyledAntdSteps = styled(AntdSteps)`
    .ant-steps-item:not(.ant-steps-item-active) {
        .ant-steps-item-container[role="button"]:hover {
            .ant-steps-item-icon {
                .ant-steps-icon {
                    .ant-steps-icon-dot {
                        background: ${theme.color.primary.blue300};
                    }
                }
            }

            .ant-steps-item-content {
                .ant-steps-item-title,
                .ant-steps-item-description {
                    color: ${theme.color.primary.blue300};
                }
            }
        }
    }
`;

export const KitSteps: React.FunctionComponent<KitStepsProps> = (
    stepsProps
) => {
    return <StyledAntdSteps progressDot {...stepsProps} />;
};

KitSteps.displayName = "KitSteps";
