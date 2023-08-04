import React, { useState } from "react";
import styled from "styled-components";
import cn from "classnames";
import theme from "./theme";
import KitCardProps from "./types";
import KitColorbar from "./ColorBar";
import { EditOutlined, EyeOutlined } from "@ant-design/icons";
import { KitTypography, KitButton } from "@kit/General/";
import { KitImageProps } from "@kit/DataDisplay/Image/types";
import { KitIconProps } from "@kit/General/Icon/types";
import { KitAvatarProps } from "../Avatar/types";
import { KitCheckbox, KitTag } from "@kit/DataEntry";
import type { CheckboxChangeEvent } from "antd/es/checkbox";

const CardWrapper = styled.div<{
    $vertical?: boolean;
}>`
    display: grid;
    padding: ${theme.cardPadding}px;
    font-family: "Inter";

    background: ${theme.backgroundColor};
    border-radius: ${theme.borderRadius}px;
    box-shadow: ${theme.shadow};
    min-width: 248px;
    width: 248px;
    border: 1px solid transparent;

    &:not(.kit-card-disabled):hover {
        border: 1px solid ${theme.hoverBorderColor};
    }

    &:not(.kit-card-disabled) {
        .kit-card-select-button {
            border-radius: 3.5px;
            font-size: ${theme.selectIconFontSize};
            padding: 0;
            width: 16px;
            height: 16px;
            min-width: 16px;
            color: ${theme.selectIconColor};
        }
    }

    &.kit-card-disabled {
        background: ${theme.disabledBackgroundColor};
        pointer-events: none;

        .kit-card-data {
            .kit-card-data-title,
            .kit-card-data-desc,
            .kit-card-data-footer {
                color: ${theme.diabledTextColor};
            }
        }

        .kit-card-select-button {
            border-radius: 3.5px;
            font-size: ${theme.selectIconFontSize};
            background: ${theme.disabledBackgroundColor};
            padding: 0;
            width: 16px;
            height: 16px;
            min-width: 16px;
            color: ${theme.diabledTextColor};
        }
    }

    &.kit-card-vertical {
        grid-template:
            "picto picto"
            "select colors"
            "content content";
        grid-template-columns: max-content 1fr;

        .kit-card-select,
        .kit-card-image,
        .kit-card-icon,
        .kit-card-colorbar {
            margin-bottom: ${theme.itemsMargin}px;
        }

        .kit-card-image,
        .kit-card-icon,
        .kit-card-icon .kit-icon {
            width: 100%;
            height: 80px;
        }

        .kit-card-select {
            grid-auto-columns: min-content;
            column-gap: 8px;
            margin-right: 8px;
            display: flex;
            flex-direction: row;
        }
    }

    &.kit-card-horizontal {
        grid-template: "select picto colors content";
        grid-template-columns: min-content min-content min-content 1fr;

        .kit-card-select,
        .kit-card-image,
        .kit-card-icon,
        .kit-card-colorbar {
            margin-right: ${theme.itemsMargin}px;
        }

        .kit-card-select {
            grid-auto-rows: min-content;
            row-gap: 8px;
        }

        .kit-card-image,
        .kit-card-icon .kit-icon {
            width: 64px;
        }

        .kit-card-icon .kit-icon {
            height: 64px;
        }

        .kit-card-colorbar {
            height: 60px;
            flex-basis: 1fr;
        }
    }

    .kit-card-select,
    .kit-card-image,
    .kit-card-picto,
    .kit-card-colorbar {
        flex: 0 0 auto;
    }

    .kit-card-select {
        grid-area: select;
        display: grid;
    }

    .kit-card-image {
        grid-area: picto;
        height: 64px;
        border-radius: ${theme.borderRadius}px;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        border: 1px solid ${theme.imageBorderColor};

        .kit-card-image-image {
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

    .kit-card-icon {
        grid-area: picto;
        height: 64px;
        width: 64px;
        border-radius: ${theme.borderRadius}px;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        border: 1px solid ${theme.imageBorderColor};

        &.noBorder {
            border-color: transparent;
        }

        .anticon {
            font-size: 2rem;
            text-align: center;
            width: 100%;
            height: 100%;
            display: inline-flex;
            align-items: center;
            justify-content: center;
        }

        .kit-icon {
            padding: 0px;
        }
    }

    .kit-card-colorbar {
        grid-area: colors;
    }

    .kit-card-data {
        grid-area: content;
        display: flex;
        flex-direction: column;
        overflow: hidden;

        > :not(:last-child) {
            margin-bottom: 5px;
        }

        .kit-card-description-container {
            position: relative;
        }

        .kit-card-data-title {
            font-size: ${theme.text.title.fontSize}px;
            font-weight: ${theme.text.title.fontWeight};
            color: ${theme.text.title.color};
        }
        .kit-card-data-desc {
            font-size: ${theme.text.description.fontSize}px;
            font-weight: ${theme.text.description.fontWeight};
            color: ${theme.text.description.color};

            .ant-typography-expand {
                visibility: hidden;
            }
        }
        .kit-card-data-footer {
            font-size: ${theme.text.footer.fontSize}px;
            font-weight: ${theme.text.footer.fontWeight};
            color: ${theme.text.footer.color};
        }

        .kit-card-description-collexp {
            color: ${theme.text.description.color};

            &:hover {
                color: ${theme.text.description.moreLessHoverColor};
            }

            &.kit-card-description-collapse {
                float: right;
            }

            &.kit-card-description-expand {
                position: absolute;
                right: 0;
                bottom: 0;
            }
        }
    }
`;

// TODO Add More /less button to description

const getPicture = (picture) => {
    console.log(picture);
    if (!picture) {
        return null;
    }

    let noBorder = false;
    let cloneProps = {};
    let wrapperClassName = "kit-card-icon";
    switch (picture.type.displayName) {
        case "KitImage":
            cloneProps = {
                preview: {
                    mask: <EyeOutlined />,
                },
                width: "100%",
                height: "100%",
                rootClassName:
                    (picture.props.rootClassName || "") +
                    " kit-card-image-image",
            };
            wrapperClassName = "kit-card-image";
            break;
        case "KitIcon":
            noBorder = true;
            cloneProps = {
                on: true,
            };
            break;
        case "KitAvatar":
            break;
        default:
            return null;
    }
    let Component = React.cloneElement(
        picture,
        cloneProps as KitImageProps & KitIconProps & KitAvatarProps
    );
    return (
        <div className={`${wrapperClassName} ${noBorder ? "noBorder" : ""}`}>
            {Component}
        </div>
    );
};

const getActions = (actions, disabled) => {
    if (!actions) {
        return null;
    }

    return actions.map((button) => {
        return React.cloneElement(button, {
            type: "default",
            diasbled: disabled,
            className: `${button.props.className || ""} kit-card-select-button`,
        });
    });
};

const getSWrapperClassName = (vertical, disabled, className) =>
    cn(className, "kit-card-wrapper", {
        "kit-card-vertical": vertical,
        "kit-card-horizontal": !vertical,
        "kit-card-disabled": disabled,
    });

export const KitCard: React.FunctionComponent<KitCardProps> = ({
    vertical,
    disabled,
    colors,
    picture,
    title,
    description,
    extrainfo,
    tags,
    actions,
    onSelectChange,
    onEdit,
    ...props
}) => {
    const [descriptionVisible, setDescriptionVisible] = useState(false);
    const [isDescriptionEllipsis, setIsDescriptionEllipsis] = useState(false);

    return (
        <CardWrapper
            className={getSWrapperClassName(
                vertical,
                disabled,
                props.className || ""
            )}
            {...props}
        >
            {(onSelectChange || onEdit) && (
                <div className="kit-card-select">
                    {onSelectChange && (
                        <KitCheckbox
                            onChange={(e: CheckboxChangeEvent) =>
                                onSelectChange && onSelectChange(e)
                            }
                            disabled={disabled}
                        />
                    )}
                    {onEdit && (
                        <KitButton
                            className="kit-card-select-button"
                            onClick={() => onEdit && onEdit()}
                            disabled={disabled}
                        >
                            <EditOutlined />
                        </KitButton>
                    )}
                    {getActions(actions, disabled)}
                </div>
            )}
            {getPicture(picture)}
            {colors && (
                <KitColorbar
                    colors={colors}
                    vertical={!vertical}
                    className={`kit-card-colorbar`}
                />
            )}
            <div className="kit-card-data">
                <KitTypography.Text
                    className="kit-card-data-title"
                    ellipsis={{ rows: 1, tooltip: true }}
                >
                    {title}
                </KitTypography.Text>
                <div className="kit-card-description-container">
                    <KitTypography.Paragraph
                        className="kit-card-data-desc"
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
                                className="kit-card-description-collexp kit-card-description-collapse"
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
                            className="kit-card-description-collexp kit-card-description-expand"
                            onClick={(e) => {
                                e.stopPropagation();
                                setDescriptionVisible(true);
                            }}
                        >
                            More
                        </KitTypography.Link>
                    )}
                </div>
                <KitTypography.Text className="kit-card-data-footer">
                    {extrainfo}
                </KitTypography.Text>
                {tags && (
                    <div className="kit-card-tags">
                        {tags.map((tag) => (
                            <KitTag key={tag as string} color="blue">
                                {tag}
                            </KitTag>
                        ))}
                    </div>
                )}
            </div>
        </CardWrapper>
    );
};

KitCard.displayName = "KitCard";
