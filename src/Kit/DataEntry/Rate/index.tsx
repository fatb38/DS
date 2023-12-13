import React, {ReactNode, forwardRef, useMemo} from 'react';
import {Rate as AntdRate} from 'antd';
import {IKitRate} from './types';
import styled from 'styled-components';
import {useKitTheme} from '@theme/useKitTheme';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStar as faStarActive} from '@fortawesome/free-solid-svg-icons';
import {faStar as faStarDefault, faStarHalfStroke as faStarHalf} from '@fortawesome/free-regular-svg-icons';
import type {RateRef} from 'rc-rate/lib/Rate';
import {getColor, isValidColor} from '@utils/functions';
import {StarProps} from 'rc-rate/lib/Star';
import {KitColorProp} from '@utils/functions/types';
import {kitRateCssTokens} from '@theme/aristid/components/DataEntry/Rate';
import {kitColorsPaletteCssTokens} from '@theme/aristid/general/colors';

const StyledRate = styled(AntdRate)`
    color: var(${kitRateCssTokens.colors.star.default}, var(${kitColorsPaletteCssTokens.secondary.yellow.yellow400}));

    &.ant-rate .ant-rate-star {
        &:not(.ant-rate-star-half):not(.ant-rate-star-full) {
            .ant-rate-star-first {
                color: var(
                    ${kitRateCssTokens.colors.star.default},
                    var(${kitColorsPaletteCssTokens.secondary.yellow.yellow400})
                );
            }
        }

        &:not(.ant-rate-star-full) {
            .ant-rate-star-second {
                color: var(
                    ${kitRateCssTokens.colors.star.default},
                    var(${kitColorsPaletteCssTokens.secondary.yellow.yellow400})
                );
            }
        }
    }

    &.ant-rate-disabled .ant-rate-star {
        cursor: not-allowed;
        color: var(
            ${kitRateCssTokens.colors.star.disabled},
            var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey300})
        );

        &:not(.ant-rate-star-half):not(.ant-rate-star-full) {
            .ant-rate-star-first,
            .ant-rate-star-second {
                color: var(
                    ${kitRateCssTokens.colors.star.disabled},
                    var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey300})
                );
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

const getCustomColor = (color: KitColorProp) => {
    if (!color || !isValidColor(color)) {
        return null;
    }

    return {[kitRateCssTokens.colors.star.default]: getColor(color)};
};

export const KitRate = forwardRef<RateRef, IKitRate>(
    ({color, defaultIcon, halfIcon, activeIcon, className, style, ...rateProps}, ref) => {
        const {appId} = useKitTheme();

        const customStyle = useMemo(() => ({...style, ...getCustomColor(color)}), [color, style]);

        return (
            <StyledRate
                {...rateProps}
                style={customStyle}
                className={`${appId} ${className ?? ''}`}
                ref={ref}
                character={props => _getCharacter(props, defaultIcon, halfIcon, activeIcon)}
            />
        );
    }
);

KitRate.displayName = 'KitRate';
