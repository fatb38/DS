import React from 'react';
import {Tag} from 'antd';
import styled, {css} from 'styled-components';
import {KitTagProps, KitTagColor} from './types';
import {tagTheme} from './theme';
import theme from '@theme/index';

const StyledAntdTag = styled(Tag)<{
    $color: KitTagColor;
}>`
    padding: 4px 8px;
    border: none;
    height: ${tagTheme.height};

    > div {
        padding-left: 0;
    }

    &,
    a {
        font-size: ${tagTheme.fontSize}px;
        font-family: ${tagTheme.fontFamily};
        font-weight: ${tagTheme.fontWeight};
        line-height: 18px;
        box-sizing: border-box;
        display: flex;
        width: fit-content;
    }

    .ant-tag-close-icon {
        margin-left: 8px;
    }

    > .anticon + span {
        margin-left: 8px;
    }

    ${props => {
        switch (props.$color) {
            case 'default':
                return;
            case 'red':
                return css`
                    background: ${theme.color.secondary.red.red400};
                    color: ${theme.color.neutral.typography.white};

                    .anticon-close {
                        color: ${theme.color.neutral.typography.white};

                        &:hover {
                            color: ${theme.color.secondary.red.red200};
                        }
                    }
                `;
            case 'green':
                return css`
                    background: ${theme.color.secondary.green.green400};
                    color: ${theme.color.neutral.typography.white};

                    .anticon-close {
                        color: ${theme.color.neutral.typography.white};

                        &:hover {
                            color: ${theme.color.secondary.green.green200};
                        }
                    }
                `;
            case 'blue':
                return css`
                    background: ${theme.color.primary.blue400};
                    color: ${theme.color.neutral.typography.white};

                    .anticon-close {
                        color: ${theme.color.neutral.typography.white};

                        &:hover {
                            color: ${theme.color.primary.blue200};
                        }
                    }
                `;
            case 'blueInvert':
                return css`
                    background: ${theme.color.primary.blue100};
                    color: ${theme.color.secondary.blue.blue400};

                    .anticon-close {
                        color: ${theme.color.secondary.blue.blue400};

                        &:hover {
                            color: ${theme.color.secondary.blue.blue300};
                        }
                    }
                `;
        }
    }}
`;

const KitTag: React.FunctionComponent<KitTagProps> = ({color = 'default', ...tagProps}) => {
    return <StyledAntdTag {...tagProps} $color={color} closable={tagProps.onClose ? true : false} />;
};

export default KitTag;
