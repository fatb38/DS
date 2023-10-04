import React, {CSSProperties, FunctionComponent, ReactElement, ReactNode, cloneElement} from 'react';
import {Card as AntdCard} from 'antd';
import {styled} from 'styled-components';
import IKitCard, {IStyledKitCard, IStyledKitCardContentTitleContainer} from './types';
import {KitIcon, KitTypography} from '@kit/General';
import {KitSpace} from '@kit/Layout';
import {useKitTheme} from '@theme/theme-context';
import {LinkOutlined} from '@ant-design/icons';

const StyledCard = styled(AntdCard)<IStyledKitCard>`
    font-family: ${({$theme}) => $theme.typography.fontFamily};
    overflow: hidden;

    &.ant-card-bordered {
        box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.08);
        border: 1px solid
            ${({$theme, $disabled}) => ($disabled ? $theme.colors.border.disabled : $theme.colors.border.default)};

        &:focus,
        &:focus-visible,
        &:focus-within {
            border: 1px dashed
                ${({$theme, $disabled}) => ($disabled ? $theme.colors.border.disabled : $theme.colors.border.focus)};
            box-shadow: 0px 0px 16px 0px
                ${({$theme, $disabled}) =>
                    $disabled ? `${$theme.colors.shadow.focus}14` : `${$theme.colors.shadow.focus}14`};
        }

        &:hover {
            border: 1px solid
                ${({$theme, $disabled}) => ($disabled ? $theme.colors.border.disabled : $theme.colors.border.hover)};
            box-shadow: 0px 0px 24px 0px
                ${({$theme, $disabled}) =>
                    $disabled ? `${$theme.colors.shadow.disabled}14` : `${$theme.colors.shadow.hover}14`};
        }
    }

    &.ant-card {
        .ant-card-head {
            padding: 24px 16px;
            border-bottom: ${({$theme, $separator}) =>
                $separator ? `1px solid ${$theme.colors.separator.default}` : 'none'};
            background-color: ${({$theme, $disabled}) =>
                $disabled ? $theme.colors.background.disabled : $theme.colors.background.default};

            .ant-card-head-wrapper {
                gap: 16px;

                .ant-card-head-title {
                    color: ${({$theme, $disabled}) =>
                        $disabled
                            ? $theme.colors.typography.headerTitle.disabled
                            : $theme.colors.typography.headerTitle.default};
                    font-size: ${({$theme}) => `${$theme.typography.headerTitle.fontSize}px`};
                    font-weight: ${({$theme}) => $theme.typography.headerTitle.fontWeight};
                }
            }
        }
        .ant-card-cover {
            padding: ${({$sideSpacing}) => ($sideSpacing ? '0px 16px' : '0px')};
            height: 252px;
            overflow: hidden;
            background-color: ${({$theme, $disabled}) =>
                $disabled ? $theme.colors.background.disabled : $theme.colors.background.default};

            & img {
                border-radius: 0;
            }
        }
        .ant-card-body {
            padding: 24px 16px;
            background-color: ${({$theme, $disabled}) =>
                $disabled ? $theme.colors.background.disabled : $theme.colors.background.default};
        }

        .card-content-title {
            color: ${({$theme, $disabled}) =>
                $disabled
                    ? $theme.colors.typography.contentTitle.disabled
                    : $theme.colors.typography.contentTitle.default};
            font-size: ${({$theme}) => `${$theme.typography.contentTitle.fontSize}px`};
            font-weight: ${({$theme}) => $theme.typography.contentTitle.fontWeight};
            line-height: normal;
        }

        .card-content-description {
            color: ${({$theme, $disabled}) =>
                $disabled
                    ? $theme.colors.typography.description.disabled
                    : $theme.colors.typography.description.default};
            font-size: ${({$theme}) => `${$theme.typography.desciption.fontSize}px`};
            line-height: normal;
            font-weight: ${({$theme}) => $theme.typography.desciption.fontWeight};
        }

        .ant-card-cover {
            margin-top: 0px;
            margin-inline-start: 0px;
            margin-inline-end: 0px;
        }

        .ant-card-actions {
            border-top: none;
            background-color: ${({$theme, $disabled}) =>
                $disabled ? $theme.colors.background.disabled : $theme.colors.background.default};

            & > li:not(:last-child) {
                border-color: ${({$theme, $disabled}) =>
                    $disabled ? $theme.colors.actions.disabled : $theme.colors.actions.default};
            }
            & li span span {
                color: ${({$theme, $disabled}) =>
                    $disabled ? $theme.colors.actions.disabled : $theme.colors.actions.default};

                &:hover {
                    cursor: ${({$disabled}) => ($disabled ? 'not-allowed' : 'inherit')};
                    color: ${({$theme, $disabled}) =>
                        $disabled ? $theme.colors.actions.disabled : $theme.colors.actions.hover};
                }
            }
        }

        .kit-card-cover {
            width: 100%;
            height: 100%;
            opacity: ${({$disabled}) => ($disabled ? 0.4 : 1)};
        }

        .kit-card-content-title-icon {
            color: ${({$theme, $disabled}) =>
                $disabled
                    ? $theme.colors.typography.contentTitle.disabled
                    : $theme.colors.typography.contentTitle.default};
            font-size: ${({$theme}) => $theme.typography.linkIcon.fontSize}px;
            padding: 0;
        }

        .kit-card-extra {
            color: ${({$theme, $disabled}) =>
                $disabled ? $theme.colors.typography.extra.disabled : $theme.colors.typography.extra.default};

            &:hover {
                color: ${({$theme, $disabled}) =>
                    $disabled ? $theme.colors.typography.extra.disabled : $theme.colors.typography.extra.hover};
                cursor: ${({$disabled}) => ($disabled ? 'not-allowed' : 'cursor')};
            }
        }
    }
`;

const ContentTitleContainer = styled.div<IStyledKitCardContentTitleContainer>`
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: ${({$isContentTitleClick, $disabled}) =>
        $disabled ? 'not-allowed' : $isContentTitleClick ? 'pointer' : 'inherit'};
`;

const _getCover = (cover?: ReactNode) => {
    let cardCover: null | ReactElement = null;

    if (cover) {
        const customCover = cover as ReactElement;
        cardCover = cloneElement(customCover, {className: `kit-card-cover ${customCover.props.className ?? ''}`});
    }

    return cardCover;
};

const _getExtra = (disabled: boolean, extra?: ReactNode) => {
    let cardExtra: null | ReactElement = null;

    if (extra) {
        const customExtra = extra as ReactElement;
        cardExtra = cloneElement(customExtra, {
            className: `kit-card-extra ${customExtra.props.className ?? ''}`,
            href: disabled ? null : customExtra.props.href
        });
    }

    return cardExtra;
};

const _getActions = (disabled: boolean, actions?: ReactNode[]) => {
    if (disabled && actions) {
        return actions?.reduce<ReactNode[]>((acc, action) => {
            const customAction = action as ReactElement;
            const disabledAction = cloneElement(customAction, {
                onClick: undefined
            });
            acc.push(disabledAction);
            return acc;
        }, []);
    }
    return actions;
};

export const KitCard: FunctionComponent<IKitCard> = ({
    style,
    cover,
    extra,
    contentTitle,
    contentDescription,
    actions,
    onContentTitleClick,
    separator = false,
    sideSpacing = true,
    disabled = false,
    ...props
}) => {
    const {theme} = useKitTheme();

    const customStyle: CSSProperties = {
        width: style?.width ?? '340px'
    };

    return (
        <StyledCard
            $theme={theme.components.Card}
            $disabled={disabled}
            $sideSpacing={sideSpacing}
            $separator={separator}
            style={customStyle}
            extra={_getExtra(disabled, extra)}
            cover={_getCover(cover)}
            bodyStyle={contentTitle || contentDescription ? {} : {padding: 0, height: 0}}
            actions={_getActions(disabled, actions)}
            {...props}
        >
            <KitSpace direction="vertical">
                {(contentTitle || onContentTitleClick) && (
                    <ContentTitleContainer
                        $disabled={disabled}
                        $isContentTitleClick={!!onContentTitleClick}
                        onClick={disabled ? undefined : onContentTitleClick}
                    >
                        {onContentTitleClick && (
                            <KitIcon className="kit-card-content-title-icon" icon={<LinkOutlined />} />
                        )}
                        {contentTitle && (
                            <KitTypography.Text className="card-content-title">{contentTitle}</KitTypography.Text>
                        )}
                    </ContentTitleContainer>
                )}
                {contentDescription && (
                    <KitTypography.Text className="card-content-description">{contentDescription}</KitTypography.Text>
                )}
            </KitSpace>
        </StyledCard>
    );
};

KitCard.displayName = 'KitCard';
