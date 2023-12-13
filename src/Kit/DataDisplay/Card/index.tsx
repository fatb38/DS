import React, {CSSProperties, FunctionComponent, ReactElement, ReactNode, cloneElement} from 'react';
import {Card as AntdCard} from 'antd';
import {styled} from 'styled-components';
import IKitCard, {IStyledKitCard, IStyledKitCardContentTitleContainer} from './types';
import {KitIcon, KitTypography} from '@kit/General';
import {KitSpace} from '@kit/Layout';
import {useKitTheme} from '@theme/useKitTheme';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLink} from '@fortawesome/free-solid-svg-icons';
import {kitCardCssTokens} from '@theme/aristid/components/DataDisplay/Card';
import {typographyCssTokens} from '@theme/aristid/general/typography';
import {kitColorsPaletteCssTokens} from '@theme/aristid/general/colors';

const StyledCard = styled(AntdCard)<IStyledKitCard>`
    font-family: var(${kitCardCssTokens.typography.fontFamily}, var(${typographyCssTokens.fontFamily}));
    overflow: hidden;

    &.ant-card-bordered {
        box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.08);
        border: 1px solid
            ${({$disabled}) =>
                $disabled
                    ? `var(${kitCardCssTokens.colors.border.disabled}, var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey200}))`
                    : `var(${kitCardCssTokens.colors.border.default}, var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey200}))`};

        &:focus,
        &:focus-visible,
        &:focus-within {
            border: 1px dashed
                ${({$disabled}) =>
                    $disabled
                        ? `var(${kitCardCssTokens.colors.border.disabled}, var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey200}))`
                        : `var(${kitCardCssTokens.colors.border.focus}, var(${kitColorsPaletteCssTokens.primary.primary400}))`};
            box-shadow: 0 0 16px 0
                var(${kitCardCssTokens.colors.shadow.focus}, var(${kitColorsPaletteCssTokens.primary.primary100}));
        }

        &:hover {
            border: 1px solid
                ${({$disabled}) =>
                    $disabled
                        ? `var(${kitCardCssTokens.colors.border.disabled}, var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey200}))`
                        : `var(${kitCardCssTokens.colors.border.hover}, var(${kitColorsPaletteCssTokens.primary.primary400}))`};
            box-shadow: 0 0 24px 0
                ${({$disabled}) =>
                    $disabled
                        ? `var(${kitCardCssTokens.colors.shadow.disabled}, var(${kitColorsPaletteCssTokens.primary.primary100}))`
                        : `var(${kitCardCssTokens.colors.shadow.hover}, var(${kitColorsPaletteCssTokens.primary.primary100}))`};
        }
    }

    &.ant-card {
        .ant-card-head {
            padding: 24px 16px;
            border-bottom: ${({$separator}) =>
                $separator
                    ? `1px solid var(${kitCardCssTokens.colors.separator.default}, var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey200}))`
                    : 'none'};
            background-color: ${({$disabled}) =>
                $disabled
                    ? `var(${kitCardCssTokens.colors.background.disabled}, var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey100}))`
                    : `var(${kitCardCssTokens.colors.background.default}, none)`};

            .ant-card-head-wrapper {
                gap: 16px;

                .ant-card-head-title {
                    color: ${({$disabled}) =>
                        $disabled
                            ? `var(${kitCardCssTokens.colors.typography.headerTitle.disabled}, var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey400}))`
                            : `var(${kitCardCssTokens.colors.typography.headerTitle.default}, var(${kitColorsPaletteCssTokens.primary.primary400}))`};
                    font-size: calc(
                        var(${kitCardCssTokens.typography.headerTitle.fontSize}, var(${typographyCssTokens.fontSize3})) *
                            1px
                    );
                    font-weight: var(
                        ${kitCardCssTokens.typography.headerTitle.fontWeight},
                        var(${typographyCssTokens.boldFontWeight})
                    );
                }
            }
        }

        .ant-card-cover {
            height: 252px;
            overflow: hidden;
            background-color: ${({$disabled}) =>
                $disabled
                    ? `var(${kitCardCssTokens.colors.background.disabled}, var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey100}))`
                    : `var(${kitCardCssTokens.colors.background.default}, none)`};

            & img {
                border-radius: 0;
            }
        }

        .ant-card-body {
            padding: 24px 16px;
            background-color: ${({$disabled}) =>
                $disabled
                    ? `var(${kitCardCssTokens.colors.background.disabled}, var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey100}))`
                    : `var(${kitCardCssTokens.colors.background.default}, none)`};
        }

        .card-content-title {
            color: ${({$disabled}) =>
                $disabled
                    ? `var(${kitCardCssTokens.colors.typography.contentTitle.disabled}, var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey400}))`
                    : `var(${kitCardCssTokens.colors.typography.contentTitle.default}, var(${kitColorsPaletteCssTokens.primary.primary400}))`};
            font-size: calc(
                var(${kitCardCssTokens.typography.contentTitle.fontSize}, var(${typographyCssTokens.fontSize2})) * 1px
            );
            font-weight: var(
                ${kitCardCssTokens.typography.contentTitle.fontWeight},
                var(${typographyCssTokens.boldFontWeight})
            );
            line-height: normal;
        }

        .card-content-description {
            color: ${({$disabled}) =>
                $disabled
                    ? `var(${kitCardCssTokens.colors.typography.description.disabled}, var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey300}))`
                    : `var(${kitCardCssTokens.colors.typography.description.default}, var(${kitColorsPaletteCssTokens.neutral.typography.black}))`};
            font-size: calc(
                var(${kitCardCssTokens.typography.description.fontSize}, var(${typographyCssTokens.fontSize5})) * 1px
            );
            line-height: normal;
            font-weight: var(
                ${kitCardCssTokens.typography.description.fontWeight},
                var(${typographyCssTokens.regularFontWeight})
            );
        }

        .ant-card-cover {
            margin-top: 0;
            margin-inline-start: 0;
            margin-inline-end: 0;
        }

        .ant-card-actions {
            border-top: none;
            background-color: ${({$disabled}) =>
                $disabled
                    ? `var(${kitCardCssTokens.colors.background.disabled}, var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey100}))`
                    : `var(${kitCardCssTokens.colors.background.default}, none)`};

            & > li:not(:last-child) {
                border-color: ${({$disabled}) =>
                    $disabled
                        ? `var(${kitCardCssTokens.colors.actions.disabled}, var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey300}))`
                        : `var(${kitCardCssTokens.colors.actions.default}, var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey500}))`};
            }

            & li svg {
                color: ${({$disabled}) =>
                    $disabled
                        ? `var(${kitCardCssTokens.colors.actions.disabled}, var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey300}))`
                        : `var(${kitCardCssTokens.colors.actions.default}, var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey500}))`};

                &:hover {
                    cursor: ${({$disabled}) => ($disabled ? 'not-allowed' : 'inherit')};
                    color: ${({$disabled}) =>
                        $disabled
                            ? `var(${kitCardCssTokens.colors.actions.disabled}, var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey300}))`
                            : `var(${kitCardCssTokens.colors.actions.hover}, var(${kitColorsPaletteCssTokens.primary.primary400}))`};
                }
            }
        }

        .kit-card-cover {
            width: 100%;
            height: 100%;
            opacity: ${({$disabled}) => ($disabled ? 0.4 : 1)};
        }

        .kit-card-content-title-icon {
            color: ${({$disabled}) =>
                $disabled
                    ? `var(${kitCardCssTokens.colors.typography.contentTitle.disabled}, var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey400}))`
                    : `var(${kitCardCssTokens.colors.typography.contentTitle.default}, var(${kitColorsPaletteCssTokens.primary.primary400}))`};
            font-size: calc(
                var(${kitCardCssTokens.typography.linkIcon.fontSize}, var(${typographyCssTokens.fontSize3})) * 1px
            );
            padding: 0;
        }

        .kit-card-extra {
            color: ${({$disabled}) =>
                $disabled
                    ? `var(${kitCardCssTokens.colors.typography.extra.disabled}, var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey400}))`
                    : `var(${kitCardCssTokens.colors.typography.extra.default}, var(${kitColorsPaletteCssTokens.primary.primary400}))`};

            &:hover {
                color: ${({$disabled}) =>
                    $disabled
                        ? `var(${kitCardCssTokens.colors.typography.extra.disabled}, var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey400}))`
                        : `var(${kitCardCssTokens.colors.typography.extra.hover}, var(${kitColorsPaletteCssTokens.primary.primary300}))`};
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
        cardCover = cloneElement(customCover, {
            className: `kit-card-cover ${(customCover.props as HTMLElement).className ?? ''}`
        });
    }

    return cardCover;
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

const _getExtra = (disabled: boolean, extra?: ReactNode) => {
    let cardExtra: null | ReactElement = null;

    if (extra) {
        const customExtra = extra as ReactElement;
        cardExtra = cloneElement(customExtra, {
            className: `kit-card-extra ${(customExtra.props as HTMLElement).className ?? ''}`,
            href: disabled ? null : (customExtra.props as HTMLAnchorElement).href
        });
    }

    return cardExtra;
};

export const KitCard: FunctionComponent<IKitCard> = ({
    style,
    cover,
    extra,
    contentTitle,
    contentDescription,
    actions,
    onContentTitleClick,
    className,
    separator = false,
    disabled = false,
    ...props
}) => {
    const {appId} = useKitTheme();

    const customStyle: CSSProperties = {
        width: style?.width ?? '340px'
    };

    return (
        <StyledCard
            {...props}
            $disabled={disabled}
            $separator={separator}
            className={`${appId} ${className ?? ''}`}
            style={customStyle}
            extra={_getExtra(disabled, extra)}
            cover={_getCover(cover)}
            bodyStyle={contentTitle || contentDescription ? {} : {padding: 0, height: 0}}
            actions={_getActions(disabled, actions)}
        >
            <KitSpace direction="vertical">
                {(contentTitle || onContentTitleClick) && (
                    <ContentTitleContainer
                        $disabled={disabled}
                        $isContentTitleClick={!!onContentTitleClick}
                        onClick={disabled ? undefined : onContentTitleClick}
                    >
                        {onContentTitleClick && (
                            <KitIcon className="kit-card-content-title-icon" icon={<FontAwesomeIcon icon={faLink} />} />
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
