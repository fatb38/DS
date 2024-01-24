import classNames from 'classnames';
import React from 'react';
import {kitNotificationCssTokens} from '@theme/aristid/components/Feedback/Notification';
import {IKitNotificationArgs} from './types';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faCircleCheck,
    faCircleXmark,
    faExclamation,
    faTimes,
    faTriangleExclamation
} from '@fortawesome/free-solid-svg-icons';
import {getErrorStyle, getInfoStyle, getSuccessStyle, getWarningStyle} from './style';
import {KitIcon, KitTypography} from '@kit/General';
import {kitColorsPaletteCssTokens} from '@theme/aristid/general/colors';
import {typographyCssTokens} from '@theme/aristid/general/typography';
import {spacingCssTokens} from '@theme/aristid/general/spacing';
import {KitSpace} from '@kit/Layout';
import {convertToPixel} from '@theme/utils/convert';
import {borderCssTokens} from '@theme/aristid/general/border';

const StyledNotification = styled.div`
    &.kit-notification {
        position: relative;
        padding: ${convertToPixel(spacingCssTokens.s)};
        width: 384px;
        max-width: calc(100vw - 48px);
        overflow: hidden;
        line-height: 1.5;
        word-wrap: break-word;
        margin-bottom: ${convertToPixel(spacingCssTokens.xs)};

        font-family: var(${kitNotificationCssTokens.typography.fontFamily}, var(${typographyCssTokens.fontFamily}));
        font-size: ${convertToPixel(
            kitNotificationCssTokens.typography.fontSize.content,
            typographyCssTokens.fontSize7
        )};
        border-radius: ${convertToPixel(borderCssTokens.radius.s)};
        border-left: 8px solid transparent;
        box-shadow:
            0 6px 16px 0 rgba(0, 0, 0, 0.08),
            0 3px 6px -4px rgba(0, 0, 0, 0.12),
            0 9px 28px 8px rgba(0, 0, 0, 0.05);

        .kit-notification-content {
            box-sizing: border-box;
            display: grid;
            grid-template: 'icon title' 'icon subtitle' 'icon message' 'buttons buttons';
            grid-template-columns: min-content 1fr;
        }

        &.kit-notification-info {
            border-color: var(
                ${kitNotificationCssTokens.colors.typography.message.info},
                var(${kitColorsPaletteCssTokens.primary.primary400})
            );
            .kit-notification-content .kit-notification-title,
            .kit-notification-close {
                color: var(
                    ${kitNotificationCssTokens.colors.typography.message.info},
                    var(${kitColorsPaletteCssTokens.primary.primary400})
                );
            }
        }

        &.kit-notification-success {
            border-color: var(
                ${kitNotificationCssTokens.colors.typography.message.success},
                var(${kitColorsPaletteCssTokens.secondary.green.green400})
            );
            .kit-notification-content .kit-notification-title,
            .kit-notification-close {
                color: var(
                    ${kitNotificationCssTokens.colors.typography.message.success},
                    var(${kitColorsPaletteCssTokens.secondary.green.green400})
                );
            }
        }

        &.kit-notification-error {
            border-color: var(
                ${kitNotificationCssTokens.colors.typography.message.error},
                var(${kitColorsPaletteCssTokens.secondary.red.red400})
            );
            .kit-notification-content .kit-notification-title,
            .kit-notification-close {
                color: var(
                    ${kitNotificationCssTokens.colors.typography.message.error},
                    var(${kitColorsPaletteCssTokens.secondary.red.red400})
                );
            }
        }

        &.kit-notification-warning {
            border-color: var(
                ${kitNotificationCssTokens.colors.typography.message.warning},
                var(${kitColorsPaletteCssTokens.secondary.orange.orange400})
            );
            .kit-notification-content .kit-notification-title,
            .kit-notification-close {
                color: var(
                    ${kitNotificationCssTokens.colors.typography.message.warning},
                    var(${kitColorsPaletteCssTokens.secondary.orange.orange400})
                );
            }
        }
    }

    .kit-notification-icon {
        grid-area: icon;
        width: min-content;
        padding-right: ${convertToPixel(spacingCssTokens.s)};
        font-size: ${convertToPixel(typographyCssTokens.fontSize4)};
    }

    .kit-notification-title {
        grid-area: title;
        padding-right: 24px;
        font-size: ${convertToPixel(
            kitNotificationCssTokens.typography.fontSize.message,
            typographyCssTokens.fontSize4
        )};
        font-weight: var(
            ${kitNotificationCssTokens.typography.fontWeight.message},
            var(${typographyCssTokens.mediumfontWeight})
        );
    }

    .kit-notification-subtitle {
        grid-area: subtitle;
        line-height: var(${typographyCssTokens.lineHeight7});
        color: var(
            ${kitNotificationCssTokens.colors.typography.subtitle},
            ${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey600}
        );
        font-size: ${convertToPixel(
            kitNotificationCssTokens.typography.fontSize.content,
            typographyCssTokens.fontSize7
        )};
        font-weight: var(
            ${kitNotificationCssTokens.typography.fontWeight.message},
            var(${typographyCssTokens.regularFontWeight})
        );
    }

    .kit-notification-message {
        grid-area: message;
        margin-top: ${convertToPixel(spacingCssTokens.xs)};
        font-size: ${convertToPixel(
            kitNotificationCssTokens.typography.fontSize.content,
            typographyCssTokens.fontSize5
        )};
        font-weight: var(
            ${kitNotificationCssTokens.typography.fontWeight.message},
            var(${typographyCssTokens.regularFontWeight})
        );
    }

    .kit-notification-close {
        position: absolute;
        display: flex;
        box-sizing: border-box;
        height: 40px;
        min-width: 40px;
        padding: 11px 0;
        justify-content: center;
        align-items: center;
        top: 10px;
        right: 10px;
        color: var(
            ${kitNotificationCssTokens.colors.typography.subtitle},
            ${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey100}
        );
    }

    .kit-notification-buttons {
        grid-area: buttons / span 2;
        margin-top: 12px;
        display: flex;
        justify-content: end;
    }
`;

export const KitNotification: React.FC<IKitNotificationArgs> = ({
    message,
    description,
    messageExtra,
    icon,
    closeIcon,
    type,
    btn,
    className,
    onClose,
    ...props
}) => {
    const clx = classNames(
        'kit-notification',
        {
            'kit-notification-info': type === 'info',
            'kit-notification-warning': type === 'warning',
            'kit-notification-error': type === 'error',
            'kit-notification-success': type === 'success',
            'kit-notification-closable': onClose
        },
        className
    );

    const getIcon = () => {
        if (icon) {
            return icon;
        }

        let style = {};
        let _icon = faExclamation;

        switch (type) {
            case 'info':
                style = getInfoStyle();
                break;
            case 'warning':
                style = getWarningStyle();
                _icon = faTriangleExclamation;
                break;
            case 'error':
                style = getErrorStyle();
                _icon = faCircleXmark;
                break;
            case 'success':
                style = getSuccessStyle();
                _icon = faCircleCheck;
                break;
            default:
                return null;
        }

        return <KitIcon style={style} icon={<FontAwesomeIcon icon={_icon} />} on />;
    };

    return (
        <StyledNotification {...props} className={clx}>
            <div className="kit-notification-content">
                {(icon || type) && <div className="kit-notification-icon">{getIcon()}</div>}
                <KitTypography.Text className="kit-notification-title" ellipsis={{tooltip: message}}>
                    {message}
                </KitTypography.Text>
                <KitTypography.Text className="kit-notification-subtitle" ellipsis={{tooltip: messageExtra}}>
                    {messageExtra}
                </KitTypography.Text>
                <KitTypography.Text className="kit-notification-message">{description}</KitTypography.Text>
                {onClose && (
                    <div className="kit-notification-close" onClick={onClose}>
                        {closeIcon || <FontAwesomeIcon icon={faTimes} />}
                    </div>
                )}
                {btn && (
                    <div className="kit-notification-buttons">
                        <KitSpace>{btn}</KitSpace>
                    </div>
                )}
            </div>
        </StyledNotification>
    );
};
