import React, {FunctionComponent} from 'react';
import styled from 'styled-components';
import {IKitHeader, IKitHeaderContent, IKitHeaderImage, IKitHeaderSwitch} from './types';
import {KitTypography} from '@kit/General/';
import {KitTag} from '@kit/DataDisplay/Tag';
import {KitImage} from '@kit/DataDisplay/Image';
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

const HeaderSwitch: FunctionComponent<IKitHeaderSwitch> = ({onSwitchChange, disabled}) => (
    <div
        className="kit-collapse-header-switch"
        onClick={
            // We don't want to collapse/extand item when clicking
            e => e.stopPropagation()
        }
    >
        <KitSwitch
            onChange={(check, event) => {
                const switchElement = event.target as HTMLElement;
                const collapseItem = switchElement.closest('.ant-collapse-item');
                collapseItem?.setAttribute('data-item-selected', check.toString());

                onSwitchChange(check, event);
            }}
            disabled={disabled}
        />
    </div>
);

const HeaderImage: FunctionComponent<IKitHeaderImage> = ({imageSrc}) => (
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
                style={{height: 'auto', width: 'auto', maxHeight: '90px', maxWidth: '50px'}}
                preview={{
                    mask: <FontAwesomeIcon icon={faEye} />
                }}
            />
        }
    </div>
);

const HeaderContent: FunctionComponent<IKitHeaderContent> = ({title, description, tagContent, disabled}) => {
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
                    disabled={disabled}
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
                    disabled={disabled}
                >
                    {description}
                </KitTypography.Text>
            )}
        </div>
    );
};

export const KitHeader: FunctionComponent<IKitHeader> = ({
    onSwitchChange,
    imageSrc,
    title,
    description,
    tagContent,
    disabled = false
}) => {
    return (
        <StyledHeader>
            {onSwitchChange !== undefined && <HeaderSwitch onSwitchChange={onSwitchChange} disabled={disabled} />}
            {imageSrc !== undefined && <HeaderImage imageSrc={imageSrc} />}
            {<HeaderContent title={title} description={description} tagContent={tagContent} disabled={disabled} />}
        </StyledHeader>
    );
};

KitHeader.displayName = 'KitHeader';

export default KitHeader;
