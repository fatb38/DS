import React, {FunctionComponent, PropsWithChildren} from 'react';
import {useSortable} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';

type SortableItemProps = {
    id: number;
};

export const SortableItem: FunctionComponent<PropsWithChildren<SortableItemProps>> = ({children, id}) => {
    const {attributes, listeners, setNodeRef, transform, transition} = useSortable({id});

    const style = {
        transform: CSS.Transform.toString(transform),
        transition
    };

    return (
        <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
            {children}
        </div>
    );
};
