import React, {ReactNode, forwardRef, useMemo} from 'react';
import {Rate as AntdRate} from 'antd';
import {IKitRate} from './types';
import {useKitTheme} from '@theme/useKitTheme';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStar as faStarActive} from '@fortawesome/free-solid-svg-icons';
import {faStar as faStarDefault, faStarHalfStroke as faStarHalf} from '@fortawesome/free-regular-svg-icons';
import type {RateRef} from 'rc-rate/lib/Rate';
import {getColor, isValidColor} from '@utils/functions';
import {StarProps} from 'rc-rate/lib/Star';
import {KitColorProp} from '@utils/functions/types';
import {kitRateCssTokens} from '@theme/aristid/components/DataEntry/Rate';
import cn from 'classnames';

import styles from './styles.module.scss';

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
        const clx = cn(appId, styles['kit-rate'], className);

        return (
            <AntdRate
                {...rateProps}
                style={customStyle}
                className={clx}
                ref={ref}
                character={props => _getCharacter(props, defaultIcon, halfIcon, activeIcon)}
            />
        );
    }
);

KitRate.displayName = 'KitRate';
