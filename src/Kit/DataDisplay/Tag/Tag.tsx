import React, {FunctionComponent} from 'react';
import {Tag} from 'antd';
import styled, {css} from 'styled-components';
import {IKitTag, IStyledAntdTag} from './types';
import {useKitTheme} from '@theme/theme-context';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faXmark} from '@fortawesome/free-solid-svg-icons';

const StyledAntdTag = styled(Tag)<IStyledAntdTag>`
    padding: 4px 8px;
    border: none;
    height: 24px;

    > div {
        padding-left: 0;
    }

    &,
    a {
        font-size: ${({$theme}) => $theme.typography.fontSize}px;
        font-family: ${({$theme}) => $theme.typography.fontFamily};
        font-weight: ${({$theme}) => $theme.typography.fontWeight};
        line-height: 18px;
        box-sizing: border-box;
        display: flex;
        width: fit-content;
    }

    .ant-tag-close-icon {
        margin-left: 8px;
    }

    ${({$color, $theme}) => {
        switch ($color) {
            case 'default':
                return;
            case 'red':
                return css`
                    background: ${$theme.colors.red.background.default};
                    color: ${$theme.colors.red.typography.default};

                    .ant-tag-close-icon {
                        color: ${$theme.colors.red.typography.closeIcon};

                        &:hover {
                            color: ${$theme.colors.red.typography.hover};
                        }
                    }
                `;
            case 'green':
                return css`
                    background: ${$theme.colors.green.background.default};
                    color: ${$theme.colors.green.typography.default};

                    .ant-tag-close-icon {
                        color: ${$theme.colors.green.typography.closeIcon};

                        &:hover {
                            color: ${$theme.colors.green.typography.hover};
                        }
                    }
                `;
            case 'blue':
                return css`
                    background: ${$theme.colors.blue.background.default};
                    color: ${$theme.colors.blue.typography.default};

                    .ant-tag-close-icon {
                        color: ${$theme.colors.blue.typography.closeIcon};

                        &:hover {
                            color: ${$theme.colors.blue.typography.hover};
                        }
                    }
                `;
            case 'blueInvert':
                return css`
                    background: ${$theme.colors.blueInvert.background.default};
                    color: ${$theme.colors.blueInvert.typography.default};

                    .ant-tag-close-icon {
                        color: ${$theme.colors.blueInvert.typography.closeIcon};

                        &:hover {
                            color: ${$theme.colors.blueInvert.typography.hover};
                        }
                    }
                `;
        }
    }}
`;

const KitTag: FunctionComponent<IKitTag> = ({closeIcon, color = 'default', ...tagProps}) => {
    const {theme} = useKitTheme();

    return (
        <StyledAntdTag
            {...tagProps}
            $theme={theme.components.Tag}
            $color={color}
            closeIcon={closeIcon ?? <FontAwesomeIcon icon={faXmark} />}
            closable={!!tagProps.onClose}
        />
    );
};

export default KitTag;
