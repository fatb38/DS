import {forwardRef, useMemo} from 'react';
import {Typography} from 'antd';
import {IKitText} from './types';
import {getCustomColor, getWeightClassname} from './commons';
import {useKitTheme} from '@theme/useKitTheme';
import styles from './styles.module.scss';
import cn from 'classnames';

const KitParagraph = forwardRef<HTMLElement, IKitText>(({size = 'medium', className, ...props}, ref) => {
    const {appId} = useKitTheme();

    const clx = cn(
        appId,
        styles['kit-typography-paragraph'],
        {
            'kit-typography-paragraph-small': size === 'small',
            'kit-typography-paragraph-medium': size === 'medium',
            'kit-typography-paragraph-large': size === 'large'
        },
        className
    );

    const customStyle = useMemo(() => ({...props.style, ...getCustomColor(props.color)}), [props.color, props.style]);

    return (
        <Typography.Paragraph
            {...props}
            ref={ref}
            className={`${clx} ${getWeightClassname(props)}`}
            style={customStyle}
        />
    );
});
KitParagraph.displayName = 'KitParagraph';

export default KitParagraph;
