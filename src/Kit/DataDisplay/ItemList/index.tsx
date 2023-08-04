import React, { useState } from "react";
import { css, styled } from "styled-components";
import { KitItemListProps } from "./types";
import theme from "@theme/index";
import { KitCheckbox, KitTag } from "@kit/DataEntry/";
import { KitTypography } from "@kit/General/";
import { RightOutlined, EyeOutlined } from "@ant-design/icons";

const StyledItemList = styled.div<{
    $gridTemplateColumns: string;
    $isDisabled: boolean;
    $isClickable: boolean;
    $shouldHaveGapBetweenText: boolean;
}>`
    display: grid;
    grid-template-columns: ${(props) => props.$gridTemplateColumns};
    align-items: center;
    min-height: 75px;
    padding: 0px 8px;
    background-color: ${theme.color.neutral.typography.white};
    box-shadow: 0px 3px 8px 0px rgba(0, 0, 0, 0.1);
    border: 1px solid ${theme.color.neutral.typography.white};
    border-radius: 7px;

    &:hover {
        border: 1px solid ${theme.color.primary.blue400};
    }

    &:focus {
        border-style: dashed;
    }

    ${(props) =>
        props.$isDisabled &&
        css`
            background-color: ${theme.color.primary.blue100};
            border: 1px solid ${theme.color.primary.blue100};
            pointer-events: none;

            .kit-item-list-text-container .kit-item-list-text {
                color: ${theme.color.primary.blue200};
            }
        `}

    ${(props) =>
        props.$isClickable &&
        css`
            cursor: pointer;
        `}

    .kit-item-list-picture-container {
        width: 48px;
        height: 48px;
        border: 1px solid ${theme.color.neutral.typography.black60};
        border-radius: 7px;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;

        &:not(:first-child) {
            margin: 0px 0px 0px 10px;
        }

        &.noBorder {
            border-color: transparent;
        }

        &.kit-item-list-icon {
            .anticon {
                font-size: 2rem;
                text-align: center;
                width: 100%;
                height: 100%;
                display: inline-flex;
                align-items: center;
                justify-content: center;
            }
        }

        .kit-item-list-image-container {
            display: flex;
            align-items: center;
            justify-content: center;

            img {
                width: auto;
                max-width: 100%;
                max-height: 100%;
            }
        }
    }

    .kit-item-list-text-container {
        display: flex;
        padding: 10px 20px;
        flex-direction: column;
        align-items: flex-start;
        flex: 1 0 0;

        ${(props) =>
            props.$shouldHaveGapBetweenText &&
            css`
                gap: 5px;
            `}

        .kit-item-list-text {
            color: ${theme.color.primary.blue600};
            font-size: ${theme.typography.fontSize5};
            margin-bottom: 0px;

            &.kit-item-list-title {
                font-weight: ${theme.typography.boldFontWeight};
            }

            &.kit-item-list-description {
                font-weight: ${theme.typography.regularFontWeight};

                .ant-typography-expand {
                    visibility: hidden;
                }
            }
        }

        .kit-item-list-description-container {
            position: relative;
        }

        .kit-item-list-description-collexp {
            color: ${theme.color.primary.blue600};

            &:hover {
                color: ${theme.color.primary.blue400};
            }

            &.kit-item-list-description-collapse {
                float: right;
            }

            &.kit-item-list-description-expand {
                position: absolute;
                right: 0;
                bottom: 0;
            }
        }
    }

    .kit-item-list-tag {
        ${(props) =>
            props.$isDisabled &&
            css`
                opacity: 0.35;
            `}

        &:last-child .ant-tag {
            margin-inline-end: 0px;
        }

        &:not(:last-child) .ant-tag {
            margin-inline-end: 10px;
        }
    }

    .kit-item-list-rafter {
        color: ${theme.color.neutral.gray.gray400};
        font-size: 14px;

        &:hover {
            color: ${theme.color.primary.blue400};
            cursor: pointer;
        }
    }
`;

export const KitItemList: React.FunctionComponent<KitItemListProps> = ({
    title,
    description,
    picture,
    onSelectChange,
    tagNumber,
    onRafterClick,
    isDisabled = false,
    onClick,
    ...props
}) => {
    const [descriptionVisible, setDescriptionVisible] = useState(false);
    const [isDescriptionEllipsis, setIsDescriptionEllipsis] = useState(false);

    const hasTitle = title !== undefined;
    const hasDescription = description !== undefined;
    const hasPicture = picture !== undefined;
    const hasTag = tagNumber !== undefined;
    const isClickable = onClick !== undefined;
    const isSelectable = onSelectChange !== undefined;
    const hasRafter = onRafterClick !== undefined;

    const generateGridTemplateColumns = () => {
        let gridTemplateColumns = "";

        // Checkbox
        gridTemplateColumns += isSelectable ? " min-content" : "";

        // Picture
        gridTemplateColumns += hasPicture ? " min-content" : "";

        // Text (Use minmax to fix ellipsis)
        gridTemplateColumns += " minmax(0px, auto)";

        // Tag
        gridTemplateColumns += hasTag ? " min-content" : "";

        // Rafter
        gridTemplateColumns += hasRafter ? " min-content" : "";

        return gridTemplateColumns;
    };

    const getCheckbox = () => {
        return (
            isSelectable && (
                <div>
                    <KitCheckbox
                        disabled={isDisabled}
                        onClick={(e) => e.stopPropagation()}
                        onChange={(e) => {
                            onSelectChange && onSelectChange(e);
                        }}
                    />
                </div>
            )
        );
    };

    const getPicture = () => {
        const pictureJsx = picture as JSX.Element;

        if (!pictureJsx || !pictureJsx.type) {
            return null;
        }

        let noBorder = false;
        let cloneProps = {};
        let wrapperClassName = "kit-item-list-picture-container";

        switch (pictureJsx.type.displayName) {
            case "KitImage":
                cloneProps = {
                    preview: {
                        mask: <EyeOutlined />,
                    },
                    width: "100%",
                    height: "100%",
                    rootClassName:
                        (pictureJsx.props.rootClassName || "") +
                        " kit-item-list-image-container",
                };
                wrapperClassName += " kit-item-list-image";
                break;
            case "KitIcon":
                noBorder = true;
                cloneProps = {
                    on: true,
                };
                wrapperClassName += " kit-item-list-icon";
                break;
            case "KitAvatar":
                break;
        }

        let Component = React.cloneElement(pictureJsx, cloneProps);

        return (
            <div
                className={`${wrapperClassName} ${noBorder ? "noBorder" : ""}`}
            >
                {Component}
            </div>
        );
    };

    const getContent = () => {
        return (
            <div className="kit-item-list-text-container">
                <KitTypography.Text
                    className="kit-item-list-text kit-item-list-title"
                    size="large"
                    weight="bold"
                    ellipsis={{ rows: 1, tooltip: true }}
                >
                    {title}
                </KitTypography.Text>

                <div className="kit-item-list-description-container">
                    <KitTypography.Paragraph
                        className="kit-item-list-text kit-item-list-description"
                        size="large"
                        weight="regular"
                        ellipsis={
                            descriptionVisible
                                ? false
                                : {
                                      rows: 2,
                                      expandable: true,
                                      onEllipsis: () =>
                                          setIsDescriptionEllipsis(true),
                                  }
                        }
                    >
                        {description}
                        {descriptionVisible && (
                            <KitTypography.Link
                                className="kit-item-list-description-collexp kit-item-list-description-collapse"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setDescriptionVisible(false);
                                }}
                            >
                                Less
                            </KitTypography.Link>
                        )}
                    </KitTypography.Paragraph>
                    {isDescriptionEllipsis && !descriptionVisible && (
                        <KitTypography.Link
                            className="kit-item-list-description-collexp kit-item-list-description-expand"
                            onClick={(e) => {
                                e.stopPropagation();
                                setDescriptionVisible(true);
                            }}
                        >
                            More
                        </KitTypography.Link>
                    )}
                </div>
            </div>
        );
    };

    const getTag = () => {
        return (
            hasTag && (
                <div className="kit-item-list-tag">
                    <KitTag color="blue">{tagNumber}</KitTag>
                </div>
            )
        );
    };

    const getRafter = () => {
        return (
            hasRafter && (
                <div
                    className="kit-item-list-rafter"
                    onClick={(e) => {
                        e.stopPropagation();
                        onRafterClick && onRafterClick();
                    }}
                >
                    <RightOutlined />
                </div>
            )
        );
    };

    return (
        <StyledItemList
            $isDisabled={isDisabled}
            $isClickable={isClickable}
            $shouldHaveGapBetweenText={hasTitle && hasDescription}
            onClick={(e) => {
                e.stopPropagation();
                onClick && onClick();
            }}
            $gridTemplateColumns={generateGridTemplateColumns()}
            {...props}
        >
            {getCheckbox()}
            {getPicture()}
            {getContent()}
            {getTag()}
            {getRafter()}
        </StyledItemList>
    );
};

KitItemList.displayName = "KitItemList";
