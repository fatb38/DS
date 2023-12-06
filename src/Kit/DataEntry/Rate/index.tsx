import React, {ReactNode, forwardRef, useMemo} from 'react';
import {Rate as AntdRate} from 'antd';
import {IStyledRate, IKitRate} from './types';
import styled from 'styled-components';
import {useKitTheme} from '@theme/theme-context';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStar as faStarActive} from '@fortawesome/free-solid-svg-icons';
import {faStar as faStarDefault, faStarHalfStroke as faStarHalf} from '@fortawesome/free-regular-svg-icons';
import type {RateRef} from 'rc-rate/lib/Rate';
import {getColor, isValidColor} from '@utils/functions';
import {StarProps} from 'rc-rate/lib/Star';

const StyledRate = styled(AntdRate)<IStyledRate>`
    color: ${({$activeStarColor}) => $activeStarColor};

    &.ant-rate .ant-rate-star {
        &:not(.ant-rate-star-half):not(.ant-rate-star-full) {
            .ant-rate-star-first {
                color: ${({$activeStarColor}) => $activeStarColor};
            }
        }

        &:not(.ant-rate-star-full) {
            .ant-rate-star-second {
                color: ${({$activeStarColor}) => $activeStarColor};
            }
        }
    }

    &.ant-rate-disabled .ant-rate-star {
        cursor: not-allowed;
        color: ${({$theme}) => $theme.colors.star.disabled};

        &:not(.ant-rate-star-half):not(.ant-rate-star-full) {
            .ant-rate-star-first,
            .ant-rate-star-second {
                color: ${({$theme}) => $theme.colors.star.disabled};
            }
        }
    }
`;

const _getCharacter = (props: StarProps, defaultIcon?: ReactNode, halfIcon?: ReactNode, activeIcon?: ReactNode) => {
    if (props.index !== undefined && props.value !== undefined && props.index < props.value) {
        if (props.index + 0.5 === props.value) {
            return halfIcon ?? <FontAwesomeIcon icon={faStarHalf} />;
        }

        return activeIcon ?? <FontAwesomeIcon icon={faStarActive} />;
    }

    return defaultIcon ?? <FontAwesomeIcon icon={faStarDefault} />;
};

export const KitRate = forwardRef<RateRef, IKitRate>(
    ({color, defaultIcon, halfIcon, activeIcon, ...rateProps}, ref) => {
        const {theme} = useKitTheme();

        const calculatedActiveStarColor = useMemo(() => {
            if (!color || !isValidColor(color)) {
                return theme.components.Rate.colors.star.default;
            }

            return getColor(color);
        }, [color, theme]);

        return (
            <StyledRate
                $theme={theme.components.Rate}
                $activeStarColor={calculatedActiveStarColor}
                ref={ref}
                character={props => _getCharacter(props, defaultIcon, halfIcon, activeIcon)}
                {...rateProps}
            />
        );
    }
);

KitRate.displayName = 'KitRate';
