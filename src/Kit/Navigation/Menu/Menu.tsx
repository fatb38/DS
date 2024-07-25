import {cloneElement, FunctionComponent} from 'react';
import {IKitMenu} from './types';
import {KitTypography, KitButton} from '@kit/General';
import {useKitTheme} from '@theme/useKitTheme';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faXmark} from '@fortawesome/free-solid-svg-icons';
import cn from 'classnames';

import styles from './styles.module.scss';

const KitMenu: FunctionComponent<IKitMenu> = ({
    title,
    onCloseClick,
    segmentedButton,
    primaryInput,
    secondaryInput,
    children,
    className,
    ...props
}) => {
    const {appId} = useKitTheme();
    const isClosable = onCloseClick !== undefined;
    const shouldDisplayHeaderTopbar = title !== undefined || isClosable;
    const shouldDisplayHeaderPrimary = segmentedButton !== undefined || primaryInput !== undefined;
    const shouldDisplayHeaderSecondary = secondaryInput !== undefined;

    const _getTitle = () =>
        title && (
            <div className="kit-menu-header-title">
                <KitTypography.Text size="large" weight="medium" ellipsis={{tooltip: true}}>
                    {title}
                </KitTypography.Text>
            </div>
        );

    const _getCloseIcon = () =>
        isClosable && (
            <KitButton
                className="kit-menu-header-close"
                type="text"
                color="black"
                icon={<FontAwesomeIcon icon={faXmark} />}
                onClick={(e: React.MouseEvent<HTMLElement, MouseEvent>) => onCloseClick(e)}
                aria-label="close"
                data-name="close"
                role="img"
            />
        );

    const _getSegmentedButton = () => {
        if (segmentedButton === undefined) return;

        return (
            <div className="kit-menu-header-button">
                {cloneElement(segmentedButton, {
                    type: 'segmented'
                })}
            </div>
        );
    };

    const _getPrimaryInput = () => {
        if (primaryInput === undefined) return;

        return <div className="kit-menu-header-primary-input">{primaryInput}</div>;
    };

    const _getSecondaryInput = () => {
        if (secondaryInput === undefined) return;

        return <div className="kit-menu-header-secondary-input">{secondaryInput}</div>;
    };

    const clx = cn(appId, styles['kit-menu'], className);

    return (
        <div {...props} className={clx}>
            <div className="kit-menu-header">
                {shouldDisplayHeaderTopbar && (
                    <div className="kit-menu-header-topbar">
                        {_getTitle()}
                        {_getCloseIcon()}
                    </div>
                )}
                {shouldDisplayHeaderPrimary && (
                    <div className="kit-menu-header-primary">
                        {_getSegmentedButton()}
                        {_getPrimaryInput()}
                    </div>
                )}
                {shouldDisplayHeaderSecondary && (
                    <div className="kit-menu-header-secondary">{_getSecondaryInput()}</div>
                )}
            </div>
            <div className="menu-content">{children}</div>
        </div>
    );
};

export default KitMenu;
