import React, {forwardRef, useMemo} from 'react';
import {Rate as AntdRate} from 'antd';
import {IStyledRate, IKitRate} from './types';
import styled from 'styled-components';
import {useKitTheme} from '@theme/theme-context';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import type {RateRef} from 'rc-rate/lib/Rate';
import {getColor} from '@utils/functions';

const StyledRate = styled(AntdRate)<IStyledRate>`
    color: ${({$activeStarColor}) => $activeStarColor};

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
                    height: 98%;
                    background-color: ${({$theme}) => $theme.colors.star.disabled};
                    transform-origin: 0 0;
                    transform: rotate(320deg);
                    left: 1px;
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

export const KitRate = forwardRef<RateRef, IKitRate>(
    ({color, disabledStarTransparency, character, ...rateProps}, ref) => {
        const {theme} = useKitTheme();

        const calculatedActiveStarColor = useMemo(() => getColor(theme, color), [color]);

        return (
            <StyledRate
                $theme={theme.components.Rate}
                $activeStarColor={calculatedActiveStarColor}
                ref={ref}
                character={character ?? <FontAwesomeIcon icon={faStar} width={20} />}
                $disabledStarTransparency={disabledStarTransparency ?? theme.general.colors.neutral.white}
                {...rateProps}
            />
        );
    }
);

KitRate.displayName = 'KitRate';
