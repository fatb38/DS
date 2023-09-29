import React from 'react';
import {Steps as AntdSteps} from 'antd';
import {KitStepsProps} from './types';
import {styled} from 'styled-components';
import {useKitTheme} from '@theme/theme-context';
import {KitStepsTheme} from '@theme/types/components/Navigation/Steps';

const StyledAntdSteps = styled(AntdSteps)<{$theme: KitStepsTheme}>`
    .ant-steps-item:not(.ant-steps-item-active) {
        .ant-steps-item-container[role='button']:hover {
            .ant-steps-item-icon {
                .ant-steps-icon {
                    .ant-steps-icon-dot {
                        background: ${({$theme}) => $theme.colors.dot.default};
                    }
                }
            }

            .ant-steps-item-content {
                .ant-steps-item-title {
                    color: ${({$theme}) => $theme.colors.title.default};
                }

                .ant-steps-item-description {
                    color: ${({$theme}) => $theme.colors.description.default};
                }
            }
        }
    }
`;

export const KitSteps: React.FunctionComponent<KitStepsProps> = stepsProps => {
    const {theme} = useKitTheme();
    return <StyledAntdSteps $theme={theme.components.Steps} progressDot {...stepsProps} />;
};

KitSteps.displayName = 'KitSteps';
