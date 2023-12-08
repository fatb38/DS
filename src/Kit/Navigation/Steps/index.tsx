import React, {FunctionComponent} from 'react';
import {Steps as AntdSteps} from 'antd';
import {IKitSteps} from './types';
import {styled} from 'styled-components';
import {useKitTheme} from '@theme/theme-context';
import {kitStepsCssTokens} from '@theme/aristid/components/Navigation/Steps';
import {kitColorsPaletteCssTokens} from '@theme/aristid/general/colors';

const StyledAntdSteps = styled(AntdSteps)`
    .ant-steps-item:not(.ant-steps-item-active) {
        .ant-steps-item-container[role='button']:hover {
            .ant-steps-item-icon {
                .ant-steps-icon {
                    .ant-steps-icon-dot {
                        background: var(
                            ${kitStepsCssTokens.colors.dot.default},
                            var(${kitColorsPaletteCssTokens.primary.primary300})
                        );
                    }
                }
            }

            .ant-steps-item-content {
                .ant-steps-item-title {
                    color: var(
                        ${kitStepsCssTokens.colors.typography.text.active},
                        var(${kitColorsPaletteCssTokens.primary.primary300})
                    );
                }

                .ant-steps-item-description {
                    color: var(
                        ${kitStepsCssTokens.colors.typography.description.active},
                        var(${kitColorsPaletteCssTokens.primary.primary300})
                    );
                }
            }
        }
    }
`;

export const KitSteps: FunctionComponent<IKitSteps> = ({className, ...props}) => {
    const {appId} = useKitTheme();

    return <StyledAntdSteps {...props} progressDot className={`${appId} ${className ?? ''}`} />;
};

KitSteps.displayName = 'KitSteps';
