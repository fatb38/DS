import React, {FunctionComponent} from 'react';
import styled from 'styled-components';
import {EyeOutlined} from '@ant-design/icons';
import {IKitHeader} from './types';
import {KitTypography} from '@kit/General/';
import {KitImage} from '@kit/DataDisplay';
import {KitTag} from '@kit/DataEntry/';

const StyledHeader = styled.div`
    display: grid;
    grid-template: 'icon image content tag';
    grid-template-columns: min-content min-content min-content min-content;
    align-items: center;
    max-height: 90px;

    .kit-collapse-header-icon {
        padding: 5px;
        grid-area: icon;
    }

    .kit-collapse-header-image {
        padding: 0 8px;
        margin-left: 8px;
        grid-area: image;
    }

    .kit-collapse-header-content {
        margin-left: 8px;
        grid-area: content;
        width: max-content;
        display: grid;
        grid-template: 'title' 'description';

        &.kit-collapse-header-content-rows {
            grid-row-gap: 10px;
        }

        .kit-collapse-header-content-title {
            grid-area: title;
        }

        .kit-collapse-header-content-description {
            grid-area: description;
        }
    }

    .kit-collapse-header-tag {
        margin-left: 8px;
        grid-area: tag;
    }
`;

export const KitHeader: FunctionComponent<IKitHeader> = ({icon, imageSrc, title, description, tagContent}) => {
    const _getIcon = () => {
        return icon !== undefined && <div className="kit-collapse-header-icon">{icon}</div>;
    };

    const _getImage = () => {
        return (
            imageSrc !== undefined && (
                <div
                    className="kit-collapse-header-image"
                    onClick={
                        // We don't want to collapse/extand item while clicking on image preview
                        e => e.stopPropagation()
                    }
                >
                    {
                        <KitImage
                            src={imageSrc}
                            style={{maxHeight: '90px', width: 'auto'}}
                            preview={{
                                mask: <EyeOutlined />
                            }}
                        />
                    }
                </div>
            )
        );
    };

    const _getContent = () => {
        let classes = 'kit-collapse-header-content';
        classes += title !== undefined && description !== undefined ? ' kit-collapse-header-content-rows' : '';

        return (
            (title !== undefined || description !== undefined) && (
                <div className={classes}>
                    {title !== undefined && (
                        <KitTypography.Text
                            className="kit-collapse-header-content-title"
                            size="large"
                            weight="medium"
                            ellipsis={{tooltip: true}}
                        >
                            {title}
                        </KitTypography.Text>
                    )}
                    {description !== undefined && (
                        <KitTypography.Text
                            className="kit-collapse-header-content-description"
                            size="large"
                            weight="regular"
                            ellipsis={{tooltip: true}}
                        >
                            {description}
                        </KitTypography.Text>
                    )}
                </div>
            )
        );
    };

    const _getTag = () => {
        return (
            tagContent !== undefined && (
                <div className="kit-collapse-header-tag">
                    <KitTag>{tagContent}</KitTag>
                </div>
            )
        );
    };

    return (
        <StyledHeader>
            {_getIcon()}
            {_getImage()}
            {_getContent()}
            {_getTag()}
        </StyledHeader>
    );
};

KitHeader.displayName = 'KitHeader';

export default KitHeader;
