import React, {FunctionComponent, useRef} from 'react';
import {styled} from 'styled-components';
import {IKitTagGroup} from './types';
import {InternalTag} from './Tag';
import useTagGroup from './useTagGroup';
import {KitTooltip} from '@kit/DataDisplay';

const StyledTagGroup = styled.div`
    display: flex;
    flex-wrap: nowrap;
`;

const KitTagGroup: FunctionComponent<IKitTagGroup> = ({tags, style, className}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const otherRef = useRef<HTMLElement>(null);

    const {remainingTags, visibleTags} = useTagGroup(tags, containerRef, otherRef);

    const isOtherTagVisible = remainingTags !== 0;

    const _getTooltipOverlay = () =>
        tags.slice(visibleTags).map((hiddenTag, index) => <div key={index}>{hiddenTag.wording}</div>);

    return (
        <StyledTagGroup ref={containerRef} style={style} className={className}>
            {tags.map((tag, index) => (
                <InternalTag
                    key={index}
                    id={`tag-${index}`}
                    color={tag?.color}
                    style={index < visibleTags ? {} : {position: 'absolute', opacity: 0}}
                >
                    {tag.wording}
                </InternalTag>
            ))}
            <KitTooltip overlay={_getTooltipOverlay()}>
                <InternalTag ref={otherRef} style={isOtherTagVisible ? {} : {position: 'absolute', opacity: 0}}>
                    + {remainingTags} autres
                </InternalTag>
            </KitTooltip>
        </StyledTagGroup>
    );
};

export default KitTagGroup;
