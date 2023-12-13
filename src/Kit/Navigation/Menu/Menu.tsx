import React, {FunctionComponent} from 'react';
import {IKitMenu} from './types';
import {styled} from 'styled-components';
import {KitTypography, KitButton} from '@kit/General';
import {useKitTheme} from '@theme/useKitTheme';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faXmark} from '@fortawesome/free-solid-svg-icons';
import {kitMenuCssTokens} from '@theme/aristid/components/Navigation/Menu';
import {kitColorsPaletteCssTokens} from '@theme/aristid/general/colors';

const StyledMenu = styled.div`
    padding: 16px 19px;
    background-color: var(
        ${kitMenuCssTokens.colors.background.default},
        var(${kitColorsPaletteCssTokens.neutral.white})
    );

    display: grid;
    grid-template-areas: 'header' 'content';

    .kit-menu-header {
        grid-area: header;
        display: grid;

        .kit-menu-header-topbar {
            display: grid;
            grid-template-areas: 'title close';
            grid-template-columns: 1fr min-content;
            align-items: center;
            margin-bottom: 16px;

            .kit-menu-header-title {
                grid-area: title;
            }

            .kit-menu-header-close {
                grid-area: close;
            }
        }

        .kit-menu-header-primary {
            display: grid;
            grid-template-areas: 'button primary-input';
            grid-template-columns: min-content 1fr;
            margin-bottom: 16px;

            .kit-menu-header-button {
                grid-area: button;
                margin-right: 16px;
            }

            .kit-menu-header-primary-input {
                grid-area: primary-input;
            }
        }

        .kit-menu-header-secondary {
            display: grid;
            grid-template-areas: 'secondary-input';
            grid-template-columns: 1fr;
            margin-bottom: 16px;

            .kit-menu-header-primary-input {
                grid-area: secondary-input;
            }
        }
    }

    .menu-content {
        grid-area: content;
    }
`;

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

    const _getTitle = () => {
        return (
            title && (
                <div className="kit-menu-header-title">
                    <KitTypography.Text size="large" weight="medium" ellipsis={{tooltip: true}}>
                        {title}
                    </KitTypography.Text>
                </div>
            )
        );
    };

    const _getCloseIcon = () => {
        return (
            isClosable && (
                <KitButton
                    className="kit-menu-header-close"
                    type="text"
                    textColor="black"
                    icon={<FontAwesomeIcon icon={faXmark} />}
                    onClick={e => onCloseClick(e)}
                />
            )
        );
    };

    const _getSegmentedButton = () => {
        if (segmentedButton === undefined) return;

        return (
            <div className="kit-menu-header-button">
                {React.cloneElement(segmentedButton, {
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

    return (
        <StyledMenu {...props} className={`${appId} ${className ?? ''}`}>
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
        </StyledMenu>
    );
};

export default KitMenu;
