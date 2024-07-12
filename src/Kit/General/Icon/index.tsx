import {CSSProperties, FunctionComponent, useMemo} from 'react';
import {IKitIcon} from './types';
import {useKitTheme} from '@theme/useKitTheme';
import useSecureClick from '@hooks/useSecureClick';
import {getColor, getLighterColor, isValidColor} from '@utils/functions';
import {kitIconCssTokens} from '@theme/aristid/components/General/Icon';
import cn from 'classnames';

import styles from './styles.module.scss';

export const KitIcon: FunctionComponent<IKitIcon> = ({
    className,
    on,
    icon,
    onClick,
    disableSecureClick,
    color,
    style,
    ...props
}) => {
    const {appId} = useKitTheme();

    const getCustomColors = (color: IKitIcon['color']): CSSProperties | null => {
        if (!color || !isValidColor(color)) {
            return null;
        }

        return {
            [kitIconCssTokens.colors.background.on]: getLighterColor(color),
            [kitIconCssTokens.colors.background.default]: 'transparent',
            [kitIconCssTokens.colors.icon.on]: getColor(color),
            [kitIconCssTokens.colors.icon.default]: getColor(color)
        } as CSSProperties;
    };

    const secureClick = useSecureClick(onClick);

    const customStyle = useMemo(() => ({...style, ...getCustomColors(color)}), [color, style]);

    const clx = cn(appId, styles['kit-icon'], 'kit-icon', className, {
        on: on,
        clickable: onClick !== undefined
    });

    return (
        <span {...props} className={clx} style={customStyle} onClick={disableSecureClick ? onClick : secureClick}>
            {icon}
        </span>
    );
};

KitIcon.displayName = 'KitIcon';
