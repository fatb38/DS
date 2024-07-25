import {FunctionComponent, useRef} from 'react';
import {IKitTagGroup} from './types';
import {InternalTag} from './Tag';
import useTagGroup from './useTagGroup';
import {KitTooltip} from '@kit/DataDisplay';
import {useKitTheme} from '@theme/useKitTheme';
import {useKitLocale} from '@translation/useKitLocale';
import cn from 'classnames';

import styles from './styles.module.scss';

const KitTagGroup: FunctionComponent<IKitTagGroup> = ({
    tags,
    style,
    className,
    othersTagType = 'neutral',
    othersTagDisabled
}) => {
    const {appId} = useKitTheme();
    const {locale} = useKitLocale();
    const containerRef = useRef<HTMLDivElement>(null);
    const otherRef = useRef<HTMLElement>(null);

    const {remainingTags, visibleTags} = useTagGroup(tags, containerRef, otherRef);

    const isOtherTagVisible = remainingTags !== 0;

    const _getTooltipOverlay = () =>
        tags.slice(visibleTags).map((hiddenTag, index) => <div key={index}>{hiddenTag.idCardProps?.description}</div>);

    const clx = cn(appId, styles['kit-tag-group'], className);

    return (
        <div ref={containerRef} style={style} className={clx}>
            {tags.map((tag, index) => (
                <InternalTag
                    key={index}
                    id={`tag-${index}`}
                    type={tag?.type}
                    disabled={tag?.disabled}
                    style={index < visibleTags ? {} : {position: 'absolute', opacity: 0}}
                    idCardProps={tag.idCardProps}
                />
            ))}
            <KitTooltip overlay={isOtherTagVisible ? _getTooltipOverlay() : undefined}>
                <InternalTag
                    ref={otherRef}
                    style={isOtherTagVisible ? {} : {position: 'absolute', opacity: 0}}
                    idCardProps={{description: `+ ${remainingTags} ` + locale.General?.others}}
                    disabled={othersTagDisabled}
                    type={othersTagType}
                />
            </KitTooltip>
        </div>
    );
};

export default KitTagGroup;
