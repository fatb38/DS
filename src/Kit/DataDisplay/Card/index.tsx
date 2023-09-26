import React, {CSSProperties, ReactElement, ReactNode, cloneElement} from 'react';
import {Card as AntdCard} from 'antd';
import {styled} from 'styled-components';
import IKitCardProps from './types';
import {KitIcon, KitTypography} from '@kit/General';
import {KitSpace} from '@kit/Layout';
import {useKitTheme} from '@theme/theme-context';
import {IKitCardTheme} from '@theme/types/components/DataDisplay/Card';
import {LinkOutlined} from '@ant-design/icons';

const StyledCard = styled(AntdCard)<{$theme: IKitCardTheme; $disabled: boolean; $sideSpacing: boolean}>`
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
        }

        &:hover {
            border: 1px solid
                ${({$theme, $disabled}) => ($disabled ? $theme.colors.border.disabled : $theme.colors.border.hover)};
        }
    }

    &.ant-card {
        .ant-card-head {
            padding: 24px 16px;
            border-bottom: none;
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
            margin-inline-start: 0px;
            margin-inline-end: 0px;
        }

        .ant-card-actions {
            border-top: none;
            background-color: ${({$theme, $disabled}) =>
                $disabled ? $theme.colors.background.disabled : $theme.colors.background.default};
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
            font-size: 18px;
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

const ContentTitleContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;

const getCover = (cover?: ReactNode) => {
    let cardCover: null | ReactElement = null;

    if (cover) {
        const customCover = cover as ReactElement;
        cardCover = cloneElement(customCover, {className: `kit-card-cover ${customCover.props.className ?? ''}`});
    }

    return cardCover;
};

const getExtra = (disabled: boolean, extra?: ReactNode) => {
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

export const KitCard: React.FunctionComponent<IKitCardProps> = ({
    style,
    cover,
    extra,
    contentTitle,
    contentDescription,
    actions,
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
            style={customStyle}
            extra={getExtra(disabled, extra)}
            cover={getCover(cover)}
            bodyStyle={contentTitle || contentDescription || actions ? {} : {padding: 0, height: 0}}
            {...props}
        >
            <KitSpace direction="vertical">
                {contentTitle && (
                    <ContentTitleContainer>
                        <KitIcon className="kit-card-content-title-icon" icon={<LinkOutlined />} />
                        <KitTypography.Text className="card-content-title">{contentTitle}</KitTypography.Text>
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
