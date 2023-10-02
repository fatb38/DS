import React, {useState} from 'react';
import {styled} from 'styled-components';
import {KitItemListProps} from './types';
import {KitCheckbox, KitTag} from '@kit/DataEntry/';
import {KitTypography} from '@kit/General/';
import {RightOutlined, EyeOutlined} from '@ant-design/icons';
import {useKitTheme} from '@theme/theme-context';
import {IKitItemListTheme} from '@theme/types/components/DataDisplay/ItemList';

const StyledItemList = styled.div<{
    $theme: IKitItemListTheme;
    $gridTemplateColumns: string;
}>`
    display: grid;
    grid-template-columns: ${({$gridTemplateColumns}) => $gridTemplateColumns};
    align-items: center;
    min-height: 75px;
    padding: 0px 8px;
    background-color: ${({$theme}) => $theme.itemList.colors.background.default};
    box-shadow: 0px 3px 8px 0px rgba(0, 0, 0, 0.1);
    border: 1px solid ${({$theme}) => $theme.itemList.colors.border.default};
    border-radius: 7px;

    &:hover {
        border: 1px solid ${({$theme}) => $theme.itemList.colors.border.hover};
    }

    &:focus {
        border-style: dashed;
    }

    &.kit-item-list-clickable {
        cursor: pointer;
    }

    .kit-item-list-picture-container {
        width: 50px;
        height: 50px;
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

        &.kit-item-list-text-container-with-gap {
            gap: 5px;
        }

        .kit-item-list-text {
            margin-bottom: 0px;

            &.kit-item-list-title {
                font-weight: ${({$theme}) => $theme.title.typography.fontWeight};
                font-size: ${({$theme}) => $theme.title.typography.fontSize}px;
                color: ${({$theme}) => $theme.title.colors.default};
            }

            &.kit-item-list-description {
                font-weight: ${({$theme}) => $theme.description.typography.fontWeight};
                font-size: ${({$theme}) => $theme.description.typography.fontSize}px;
                color: ${({$theme}) => $theme.description.colors.default};

                .ant-typography-expand {
                    visibility: hidden;
                }
            }
        }

        .kit-item-list-description-container {
            position: relative;
        }

        .kit-item-list-description-collexp {
            color: ${({$theme}) => $theme.collexp.colors.default};

            &:hover {
                color: ${({$theme}) => $theme.collexp.colors.hover};
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
        &:last-child .ant-tag {
            margin-inline-end: 0px;
        }

        &:not(:last-child) .ant-tag {
            margin-inline-end: 10px;
        }
    }

    .kit-item-list-rafter {
        color: ${({$theme}) => $theme.rafter.colors.default};
        font-size: 14px;

        &:hover {
            color: ${({$theme}) => $theme.rafter.colors.hover};
            cursor: pointer;
        }
    }

    &.kit-item-list-disabled {
        background-color: ${({$theme}) => $theme.itemList.colors.background.disabled};
        border: 1px solid ${({$theme}) => $theme.itemList.colors.border.disabled};
        pointer-events: none;

        .kit-item-list-text-container {
            .kit-item-list-text {
                &.kit-item-list-title {
                    color: ${({$theme}) => $theme.title.colors.disabled};
                }

                &.kit-item-list-description {
                    color: ${({$theme}) => $theme.description.colors.disabled};
                }
            }

            .kit-item-list-description-collexp {
                color: ${({$theme}) => $theme.collexp.colors.disabled};
            }
        }

        .kit-item-list-tag {
            opacity: 0.35;
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
    className,
    ...props
}) => {
    const {theme} = useKitTheme();

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
        let gridTemplateColumns = '';

        // Checkbox
        gridTemplateColumns += isSelectable ? ' min-content' : '';

        // Picture
        gridTemplateColumns += hasPicture ? ' min-content' : '';

        // Text (Use minmax to fix ellipsis)
        gridTemplateColumns += ' minmax(0px, auto)';

        // Tag
        gridTemplateColumns += hasTag ? ' min-content' : '';

        // Rafter
        gridTemplateColumns += hasRafter ? ' min-content' : '';

        return gridTemplateColumns;
    };

    const getCheckbox = () => {
        return (
            isSelectable && (
                <div>
                    <KitCheckbox
                        disabled={isDisabled}
                        onClick={e => e.stopPropagation()}
                        onChange={e => {
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
        let wrapperClassName = 'kit-item-list-picture-container';

        switch (pictureJsx.type.displayName) {
            case 'KitImage':
                cloneProps = {
                    preview: {
                        ...(pictureJsx.props?.preview ?? {}),
                        mask: <EyeOutlined />
                    },
                    width: '100%',
                    height: '100%',
                    bordered: true,
                    rounded: true,
                    rootClassName: (pictureJsx.props.rootClassName || '') + ' kit-item-list-image-container'
                };
                wrapperClassName += ' kit-item-list-image';
                break;
            case 'KitIcon':
                noBorder = true;
                cloneProps = {
                    on: true
                };
                wrapperClassName += ' kit-item-list-icon';
                break;
            case 'KitAvatar':
                break;
        }

        let Component = React.cloneElement(pictureJsx, cloneProps);

        return <div className={`${wrapperClassName} ${noBorder ? 'noBorder' : ''}`}>{Component}</div>;
    };

    const getContent = () => {
        let classes = 'kit-item-list-text-container';
        classes += hasTitle && hasDescription ? ' kit-item-list-text-container-with-gap' : '';

        return (
            <div className={classes}>
                <KitTypography.Text
                    className="kit-item-list-text kit-item-list-title"
                    size="large"
                    weight="bold"
                    ellipsis={{rows: 1, tooltip: true}}
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
                                      onEllipsis: () => setIsDescriptionEllipsis(true)
                                  }
                        }
                    >
                        {description}
                        {descriptionVisible && (
                            <KitTypography.Link
                                className="kit-item-list-description-collexp kit-item-list-description-collapse"
                                onClick={e => {
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
                            onClick={e => {
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
                    onClick={e => {
                        e.stopPropagation();
                        onRafterClick && onRafterClick();
                    }}
                >
                    <RightOutlined />
                </div>
            )
        );
    };

    const getClasses = () => {
        let classes = className;

        classes += isDisabled ? ' kit-item-list-disabled' : '';
        classes += isClickable ? ' kit-item-list-clickable' : '';

        return classes;
    };

    return (
        <StyledItemList
            className={getClasses()}
            $theme={theme.components.ItemList}
            $gridTemplateColumns={generateGridTemplateColumns()}
            onClick={e => {
                e.stopPropagation();
                onClick && onClick();
            }}
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

KitItemList.displayName = 'KitItemList';
