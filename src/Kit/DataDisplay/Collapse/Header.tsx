import React, {FunctionComponent} from 'react';
import styled from 'styled-components';
import {IKitHeader} from './types';
import {KitTypography} from '@kit/General/';
import {KitImage, KitTag} from '@kit/DataDisplay';
import {KitSwitch} from '@kit/DataEntry';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEye} from '@fortawesome/free-regular-svg-icons';
import {convertToPixel} from '@theme/utils/convert';
import {spacingCssTokens} from '@theme/aristid/general/spacing';
import {typographyCssTokens} from '@theme/aristid/general/typography';

const StyledHeader = styled.div`
    display: grid;
    grid-template: 'switch image content';
    grid-template-columns: min-content min-content min-content;
    align-items: center;
    max-height: 90px;

    .kit-collapse-header-switch {
        grid-area: switch;
        margin-right: ${convertToPixel(spacingCssTokens.s)};
    }

    .kit-collapse-header-image {
        grid-area: image;
        margin-right: ${convertToPixel(spacingCssTokens.s)};
    }

    .kit-collapse-header-content {
        grid-area: content;
        width: max-content;
        display: grid;
        grid-template: 'tag' 'title' 'description';

        &.kit-collapse-header-content-rows {
            grid-row-gap: ${convertToPixel(spacingCssTokens.xxs)};
        }

        .kit-collapse-header-content-tag {
            grid-area: title;
        }

        .kit-collapse-header-content-title {
            grid-area: title;
            font-size: ${convertToPixel(typographyCssTokens.fontSize3)};
        }

        .kit-collapse-header-content-description {
            grid-area: description;
        }
    }
`;

export const KitHeader: FunctionComponent<IKitHeader> = ({
    onSwitchChange,
    imageSrc,
    title,
    description,
    tagContent
}) => {
    const _getSwitch = () => {
        return (
            onSwitchChange !== undefined && (
                <div
                    className="kit-collapse-header-switch"
                    onClick={
                        // We don't want to collapse/extand item when clicking
                        e => e.stopPropagation()
                    }
                >
                    <KitSwitch onChange={onSwitchChange} />
                </div>
            )
        );
    };

    const _getImage = () => {
        return (
            imageSrc !== undefined && (
                <div
                    className="kit-collapse-header-image"
                    onClick={
                        // We don't want to collapse/extand item when clicking
                        e => e.stopPropagation()
                    }
                >
                    {
                        <KitImage
                            src={imageSrc}
                            style={{maxHeight: '90px', width: 'auto'}}
                            preview={{
                                mask: <FontAwesomeIcon icon={faEye} />
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
            <div className={classes}>
                {tagContent !== undefined && (
                    <div className="kit-collapse-header-tag">
                        <KitTag>{tagContent}</KitTag>
                    </div>
                )}
                {title !== undefined && (
                    <KitTypography.Text
                        className="kit-collapse-header-content-title"
                        size="large"
                        weight="bold"
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
        );
    };

    return (
        <StyledHeader>
            {_getSwitch()}
            {_getImage()}
            {_getContent()}
        </StyledHeader>
    );
};

KitHeader.displayName = 'KitHeader';

export default KitHeader;
