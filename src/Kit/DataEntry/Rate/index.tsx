import React, {FunctionComponent} from 'react';
import {Rate as AntdRate} from 'antd';
import {IStyledRate, IKitRate} from './types';
import styled, {css} from 'styled-components';
import {useKitTheme} from '@theme/theme-context';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';

const StyledRate = styled(AntdRate)<IStyledRate>`
    ${({$color, $theme}) => {
        switch ($color) {
            case 'default':
                // Use default one from theme
                return;
            case 'red':
                return css`
                    color: ${$theme.colors.star.active.red};
                `;
            case 'green':
                return css`
                    color: ${$theme.colors.star.active.green};
                `;
            case 'blue':
                return css`
                    color: ${$theme.colors.star.active.blue};
                `;
        }
    }}

    &.ant-rate .ant-rate-star {
        &:not(.ant-rate-star-half):not(.ant-rate-star-full) {
            .ant-rate-star-first {
                color: ${({$theme}) => $theme.colors.star.default};
            }
        }

        &:not(.ant-rate-star-full) {
            .ant-rate-star-second {
                color: ${({$theme}) => $theme.colors.star.default};
            }
        }
    }

    &.ant-rate-disabled {
        cursor: not-allowed;

        .ant-rate-star {
            cursor: not-allowed;

            &:not(.ant-rate-star-half):not(.ant-rate-star-full) {
                div[role='radio']::after,
                div[role='radio']::before {
                    content: '';
                    position: absolute;
                    width: 2px;
                    height: 95%;
                    background-color: ${({$theme}) => $theme.colors.star.disabled};
                    transform-origin: 0 0;
                    transform: rotate(320deg);
                    left: 0;
                }

                div[role='radio']::after {
                    top: 2px;
                    padding-bottom: 4px;
                    border-radius: 2px;
                }

                div[role='radio']::before {
                    background-color: ${({$disabledStarTransparency}) => $disabledStarTransparency};
                    top: 5px;
                }
            }
        }
    }
`;

export const KitRate: FunctionComponent<IKitRate> = ({
    color = 'default',
    disabledStarTransparency,
    character,
    ...rateProps
}) => {
    const {theme} = useKitTheme();

    return (
        <StyledRate
            $theme={theme.components.Rate}
            $color={color}
            character={character ?? <FontAwesomeIcon icon={faStar} />}
            $disabledStarTransparency={disabledStarTransparency ?? theme.general.colors.neutral.white}
            {...rateProps}
        />
    );
};

KitRate.displayName = 'KitRate';
