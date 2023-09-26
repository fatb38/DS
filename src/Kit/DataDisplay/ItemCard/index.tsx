import React, {useState} from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import IKitItemCardProps from './types';
import KitColorbar from './ColorBar';
import {EditOutlined, EyeOutlined} from '@ant-design/icons';
import {KitTypography, KitButton} from '@kit/General/';
import {KitImageProps} from '@kit/DataDisplay/Image/types';
import {KitIconProps} from '@kit/General/Icon/types';
import {KitAvatarProps} from '../Avatar/types';
import {KitCheckbox, KitTag} from '@kit/DataEntry';
import type {CheckboxChangeEvent} from 'antd/lib/checkbox';
import {IKitItemCardTheme} from '@theme/types/components/DataDisplay/ItemCard';
import {useKitTheme} from '@theme/theme-context';

const ItemCardWrapper = styled.div<{
    $theme: IKitItemCardTheme;
    $vertical?: boolean;
}>`
    display: grid;
    padding: 16px;
    font-family: ${({$theme}) => $theme.card.typography.fontFamily};
    background: ${({$theme}) => $theme.card.colors.background.default};
    border-radius: ${({$theme}) => $theme.card.border.radius}px;
    box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.1);
    min-width: 248px;
    width: 248px;
    border: 1px solid ${({$theme}) => $theme.card.colors.border.default};

    &:not(.kit-card-disabled):hover {
        border: 1px solid ${({$theme}) => $theme.card.colors.border.hover};
    }

    &:not(.kit-card-disabled) {
        .kit-card-select-button {
            border-radius: 3.5px;
            font-size: 0.6rem;
            padding: 0;
            width: 16px;
            height: 16px;
            min-width: 16px;
            color: ${({$theme}) => $theme.select.colors.typography.default};
        }
    }

    &.kit-card-disabled {
        background: ${({$theme}) => $theme.card.colors.background.disabled};
        pointer-events: none;

        .kit-card-data {
            .kit-card-title {
                color: ${({$theme}) => $theme.title.colors.typography.disabled};
            }
            .kit-card-desc {
                color: ${({$theme}) => $theme.description.colors.typography.disabled};
            }
            .kit-card-footer {
                color: ${({$theme}) => $theme.footer.colors.typography.disabled};
            }
        }

        .kit-card-select-button {
            border-radius: 3.5px;
            font-size: 0.6rem;
            background: ${({$theme}) => $theme.select.colors.background.disabled};
            padding: 0;
            width: 16px;
            height: 16px;
            min-width: 16px;
            color: ${({$theme}) => $theme.select.colors.typography.disabled};
        }
    }

    &.kit-card-vertical {
        grid-template:
            'picto picto'
            'select colors'
            'content content';
        grid-template-columns: max-content 1fr;

        .kit-card-select,
        .kit-card-image,
        .kit-card-icon,
        .kit-card-colorbar {
            margin-bottom: 8px;
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
        grid-template: 'select picto colors content';
        grid-template-columns: min-content min-content min-content 1fr;

        .kit-card-select,
        .kit-card-image,
        .kit-card-icon,
        .kit-card-colorbar {
            margin-right: 8px;
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
        border-radius: ${({$theme}) => $theme.image.border.radius}px;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        border: 1px solid ${({$theme}) => $theme.image.colors.border.default};

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
        border-radius: ${({$theme}) => $theme.icon.border.radius}px;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        border: 1px solid ${({$theme}) => $theme.icon.colors.border.default};

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

        .kit-card-title {
            font-size: ${({$theme}) => $theme.title.typography.fontSize}px;
            font-weight: ${({$theme}) => $theme.title.typography.fontWeight};
            color: ${({$theme}) => $theme.title.colors.typography.default};
        }
        .kit-card-desc {
            font-size: ${({$theme}) => $theme.description.typography.fontSize}px;
            font-weight: ${({$theme}) => $theme.description.typography.fontWeight};
            color: ${({$theme}) => $theme.description.colors.typography.default};

            .ant-typography-expand {
                visibility: hidden;
            }
        }
        .kit-card-footer {
            font-size: ${({$theme}) => $theme.footer.typography.fontSize}px;
            font-weight: ${({$theme}) => $theme.footer.typography.fontWeight};
            color: ${({$theme}) => $theme.footer.colors.typography.default};
        }

        .kit-card-description-collexp {
            color: ${({$theme}) => $theme.expend.colors.typography.default};

            &:hover {
                color: ${({$theme}) => $theme.expend.colors.typography.hover};
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
const getPicture = picture => {
    if (!picture) {
        return null;
    }

    let noBorder = false;
    let cloneProps = {};
    let wrapperClassName = 'kit-card-icon';
    switch (picture.type.displayName) {
        case 'KitImage':
            cloneProps = {
                preview: {
                    mask: <EyeOutlined />
                },
                width: '100%',
                height: '100%',
                rootClassName: (picture.props.rootClassName ?? '') + ' kit-card-image-image'
            };
            wrapperClassName = 'kit-card-image';
            break;
        case 'KitIcon':
            noBorder = true;
            cloneProps = {
                on: true
            };
            break;
        case 'KitAvatar':
            break;
        default:
            return null;
    }
    const Component = React.cloneElement(picture, cloneProps as KitImageProps & KitIconProps & KitAvatarProps);
    return <div className={`${wrapperClassName} ${noBorder ? 'noBorder' : ''}`}>{Component}</div>;
};

const getActions = (actions, disabled) => {
    if (!actions) {
        return null;
    }

    return actions.map((button, index) =>
        React.cloneElement(button, {
            key: index,
            type: 'default',
            disabled: disabled,
            className: `${button.props.className ?? ''} kit-card-select-button`
        })
    );
};

const getSWrapperClassName = (vertical, disabled, className) =>
    cn(className, 'kit-card-wrapper', {
        'kit-card-vertical': vertical,
        'kit-card-horizontal': !vertical,
        'kit-card-disabled': disabled
    });

export const KitItemCard: React.FunctionComponent<IKitItemCardProps> = ({
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
    const {theme} = useKitTheme();
    const [descriptionVisible, setDescriptionVisible] = useState(false);
    const [isDescriptionEllipsis, setIsDescriptionEllipsis] = useState(false);

    return (
        <ItemCardWrapper
            $theme={theme.components.ItemCard}
            className={getSWrapperClassName(vertical, disabled, props.className ?? '')}
            {...props}
        >
            {(onSelectChange || onEdit) && (
                <div className="kit-card-select">
                    {onSelectChange && (
                        <KitCheckbox
                            onChange={(e: CheckboxChangeEvent) => onSelectChange && onSelectChange(e)}
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
            {colors && <KitColorbar colors={colors} vertical={!vertical} className={`kit-card-colorbar`} />}
            <div className="kit-card-data">
                <KitTypography.Text className="kit-card-title" ellipsis={{rows: 1, tooltip: true}}>
                    {title}
                </KitTypography.Text>
                <div className="kit-card-description-container">
                    <KitTypography.Paragraph
                        className="kit-card-desc"
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
                                className="kit-card-description-collexp kit-card-description-collapse"
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
                            className="kit-card-description-collexp kit-card-description-expand"
                            onClick={e => {
                                e.stopPropagation();
                                setDescriptionVisible(true);
                            }}
                        >
                            More
                        </KitTypography.Link>
                    )}
                </div>
                <KitTypography.Text className="kit-card-footer">{extrainfo}</KitTypography.Text>
                {tags && (
                    <div className="kit-card-tags">
                        {tags.map(tag => (
                            <KitTag key={tag as string} color="blue">
                                {tag}
                            </KitTag>
                        ))}
                    </div>
                )}
            </div>
        </ItemCardWrapper>
    );
};

KitItemCard.displayName = 'KitItemCard';
