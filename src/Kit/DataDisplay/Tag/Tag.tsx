import {CSSProperties, forwardRef, useMemo} from 'react';
import {Tag} from 'antd';
import {IKitTag} from './types';
import {useKitTheme} from '@theme/useKitTheme';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faXmark} from '@fortawesome/free-solid-svg-icons';
import {getColor, getLighterColor, isValidColor} from '@utils/functions';
import {kitTagCssTokens} from '@theme/aristid/components/DataDisplay/Tag';
import cn from 'classnames';

import styles from './styles.module.scss';

const getCustomColors = (
    color: IKitTag['color'],
    secondaryColorInvert: IKitTag['secondaryColorInvert']
): CSSProperties | null => {
    if (color && isValidColor(color)) {
        return {
            [kitTagCssTokens.colors.default.background.default]: getColor(color, secondaryColorInvert),
            [kitTagCssTokens.colors.default.typography.default]: getLighterColor(color, secondaryColorInvert)
        } as CSSProperties;
    }
    return null;
};

export const InternalTag = forwardRef<HTMLElement, IKitTag>(
    ({className, closeIcon, color, style, secondaryColorInvert = false, ...tagProps}, ref) => {
        const {appId} = useKitTheme();

        const customStyle = useMemo(
            () => ({...style, ...getCustomColors(color, secondaryColorInvert)}),
            [color, secondaryColorInvert, style]
        );

        const clx = cn(appId, styles['kit-tag'], className);

        return (
            <Tag
                ref={ref}
                {...tagProps}
                style={customStyle}
                className={clx}
                closeIcon={closeIcon ?? <FontAwesomeIcon icon={faXmark} />}
                closable={!!tagProps.onClose}
            />
        );
    }
);
