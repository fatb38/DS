import React, {useState} from 'react';
import {KitSpace} from '@kit/Layout';
import {KitAvatar, KitItemList} from '@kit/DataDisplay';
import {DndContext, DragEndEvent} from '@dnd-kit/core';
import {restrictToVerticalAxis} from '@dnd-kit/modifiers';
import {arrayMove, SortableContext, verticalListSortingStrategy} from '@dnd-kit/sortable';
import {SortableItem} from './SortableItem.tsx';

const App = () => {
    const [items, setItems] = useState<{id: number; title: string; avatar: string}[]>([
        {
            id: 1,
            title: 'Harry Cover',
            avatar: 'HC'
        },
        {
            id: 2,
            title: 'Vincent Times',
            avatar: 'VT'
        },
        {
            id: 3,
            title: 'Aristid Boucicaut',
            avatar: 'AB'
        }
    ]);

    const handleDragEnd = (event: DragEndEvent) => {
        const {active, over} = event;

        if (over) {
            if (active.id !== over.id) {
                setItems(items => {
                    const oldIndex = items.findIndex(item => item.id === active.id);
                    const newIndex = items.findIndex(item => item.id === over.id);

                    return arrayMove(items, oldIndex, newIndex);
                });
            }
        }
    };

    return (
        <DndContext onDragEnd={handleDragEnd} modifiers={[restrictToVerticalAxis]}>
            <SortableContext items={items} strategy={verticalListSortingStrategy}>
                <div style={{width: '350px'}}>
                    <KitSpace direction={'vertical'} style={{width: '100%'}}>
                        {items.map(item => (
                            <SortableItem key={item.id} id={item.id}>
                                <KitItemList
                                    draggable
                                    picture={<KitAvatar>{item.avatar}</KitAvatar>}
                                    title={item.title}
                                />
                            </SortableItem>
                        ))}
                    </KitSpace>
                </div>
            </SortableContext>
        </DndContext>
    );
};

export default App;
