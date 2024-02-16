import React, {FunctionComponent, useRef} from 'react';
import {IKitTagGroup} from './types';
import {InternalTag} from './Tag';
import useTagGroup from './useTagGroup';
import {KitTooltip} from '@kit/DataDisplay';
import {useKitTheme} from '@theme/useKitTheme';
import cn from 'classnames';

import styles from './styles.module.scss';

const KitTagGroup: FunctionComponent<IKitTagGroup> = ({tags, style, className}) => {
    const {appId} = useKitTheme();
    const containerRef = useRef<HTMLDivElement>(null);
    const otherRef = useRef<HTMLElement>(null);

    const {remainingTags, visibleTags} = useTagGroup(tags, containerRef, otherRef);

    const isOtherTagVisible = remainingTags !== 0;

    const _getTooltipOverlay = () =>
        tags.slice(visibleTags).map((hiddenTag, index) => <div key={index}>{hiddenTag.wording}</div>);

    const clx = cn(appId, styles['kit-tag-group'], className);

    return (
        <div ref={containerRef} style={style} className={clx}>
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
        </div>
    );
};

export default KitTagGroup;
