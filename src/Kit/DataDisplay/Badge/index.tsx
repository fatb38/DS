import React, {CSSProperties, FunctionComponent, useMemo} from 'react';
import {Badge as AntdBadge} from 'antd';
import {IKitBadge} from './types';
import {useKitTheme} from '@theme/useKitTheme';
import {getColor, getLighterColor, isValidColor} from '@utils/functions';
import {kitBadgeCssTokens} from '@theme/aristid/components/DataDisplay/Badge';
import cn from 'classnames';

import styles from './styles.module.scss';

const getCustomColors = (
    color: IKitBadge['color'],
    secondaryColorInvert: IKitBadge['secondaryColorInvert']
): CSSProperties | null => {
    if (!color || !isValidColor(color)) {
        return null;
    }

    return {
        [kitBadgeCssTokens.colors.background.default]: getColor(color, secondaryColorInvert),
        [kitBadgeCssTokens.colors.typography.default]: getLighterColor(color, secondaryColorInvert)
    } as CSSProperties;
};

export const KitBadge: FunctionComponent<IKitBadge> = ({color, style, secondaryColorInvert = false, ...badgeProps}) => {
    const {appId} = useKitTheme();

    const customStyle = useMemo(
        () => ({...style, ...getCustomColors(color, secondaryColorInvert)}),
        [color, secondaryColorInvert, style]
    );

    const clx = cn(appId, styles['kit-badge'], badgeProps.className);

    return <AntdBadge style={customStyle} className={clx} {...badgeProps} />;
};

KitBadge.displayName = 'KitBadge';
