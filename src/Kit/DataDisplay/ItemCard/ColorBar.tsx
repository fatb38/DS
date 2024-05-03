import React from 'react';
import {IKitColorbar, CardColor} from './types';
import {KitTooltip} from '../Tooltip';
import {useKitTheme} from '@theme/useKitTheme';
import cn from 'classnames';

import styles from './styles.module.scss';

const _getSwatchStyle = (item: CardColor) => ({
        background: item.color ?? 'transparent'
    });

const KitColorbar = (props: IKitColorbar) => {
    const {appId} = useKitTheme();

    const clx = cn(appId, styles['kit-color-bar'], props.className);

    return (
        <div className={clx}>
            {props.colors?.map((item, i) => (
                <KitTooltip
                    key={`${item.label}_${i}`}
                    title={item.label}
                    placement={props.vertical ?? false ? 'right' : 'top'}
                >
                    <div style={_getSwatchStyle(item)} />
                </KitTooltip>
            ))}
        </div>
    );
};

export default KitColorbar;
