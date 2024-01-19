import {RefObject, useCallback, useEffect, useState} from 'react';
import {IKitTagConfig, IUseTagGroup} from './types';

const PADDING_WIDTH = 8;

const useTagGroup = (
    tags: IKitTagConfig[],
    containerRef: RefObject<HTMLDivElement>,
    otherRef: RefObject<HTMLElement>
): IUseTagGroup => {
    const [maxVisibleTags, setMaxVisibleTags] = useState(tags.length);

    const visibleTags = tags.slice(0, maxVisibleTags).length;
    const remainingTags = tags.slice(maxVisibleTags).length;

    const _getVisibleTags = useCallback((nbTags: number, containerWidth: number, otherWidth: number) => {
        let tagsWidth = 0;
        let visibleTags = 0;

        const totalTagsWidth = _getTotalTagsWidth(nbTags);

        const isOtherTagToDisplay = totalTagsWidth > containerWidth;

        for (let i = 0; i < nbTags; i++) {
            const tagRef = document.getElementById(`tag-${i}`);

            if (tagRef !== null) {
                tagsWidth += tagRef.clientWidth + PADDING_WIDTH;

                // Total width of tags (plus other if some tags are hidden)
                const currentTagsWidth = isOtherTagToDisplay ? tagsWidth + otherWidth : tagsWidth;

                if (currentTagsWidth > containerWidth) {
                    break;
                }
                visibleTags++;
            }
        }
        return visibleTags;
    }, []);

    const _getTotalTagsWidth = (nbTags: number) => {
        let totalWidth = 0;
        for (let i = 0; i < nbTags; i++) {
            const tagRef = document.getElementById(`tag-${i}`);
            if (tagRef) {
                totalWidth += tagRef.clientWidth + PADDING_WIDTH;
            }
        }
        return totalWidth;
    };

    useEffect(() => {
        const handleResize = () => {
            if (containerRef.current) {
                const containerWidth = containerRef.current.clientWidth;
                let otherWidth = 0;

                if (otherRef.current) {
                    otherWidth = otherRef.current.clientWidth;
                }

                const visibleTagsCount = _getVisibleTags(tags.length, containerWidth, otherWidth);

                setMaxVisibleTags(visibleTagsCount);
            }
        };
        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [_getVisibleTags, containerRef, otherRef, tags]);

    return {
        visibleTags,
        remainingTags
    };
};

export default useTagGroup;
