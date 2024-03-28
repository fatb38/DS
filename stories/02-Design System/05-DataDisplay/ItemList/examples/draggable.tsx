import {ComponentProps, FunctionComponent, useState} from 'react';
import {DndContext, DragEndEvent, DraggableSyntheticListeners} from '@dnd-kit/core';
import {restrictToVerticalAxis} from '@dnd-kit/modifiers';
import {CSS} from '@dnd-kit/utilities';
import {arrayMove, SortableContext, useSortable, verticalListSortingStrategy} from '@dnd-kit/sortable';
import {faDeleteLeft, faGripLines} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {KitAvatar, KitItemList} from '@kit/DataDisplay';
import {KitButton} from '@kit/General';
import {KitSpace} from '@kit/Layout';

type Item = {
    id: number;
    idCardProps: ComponentProps<typeof KitItemList>['idCardProps'];
    actions: ComponentProps<typeof KitItemList>['actions'];
};

const idCardProps = {
    title: 'Tondeuse à gazon',
    description: 'Tondeuse thermique Auto tractée 70 VL 55 TH',
    avatar: <KitAvatar label={'TG'} />
};

const actions = [
    {
        key: '1',
        label: 'Delete item',
        icon: <FontAwesomeIcon icon={faDeleteLeft} />,
        onClick: () => console.log('delete action')
    }
];

const App = () => {
    const [items, setItems] = useState<Item[]>([
        {id: 1, idCardProps, actions},
        {id: 2, idCardProps, actions},
        {id: 3, idCardProps, actions}
    ]);

    const _handleDragEnd = (event: DragEndEvent) => {
        const {active, over} = event;

        if (over && active.id !== over.id) {
            setItems(items => {
                const oldIndex = items.findIndex(item => item.id === active.id);
                const newIndex = items.findIndex(item => item.id === over.id);

                return arrayMove(items, oldIndex, newIndex);
            });
        }
    };

    return (
        <DndContext onDragEnd={_handleDragEnd} modifiers={[restrictToVerticalAxis]}>
            <SortableContext items={items} strategy={verticalListSortingStrategy}>
                <KitSpace direction={'vertical'} style={{width: '350px'}}>
                    {items.map(item => (
                        <DraggableItemList key={item.id} item={item} />
                    ))}
                </KitSpace>
            </SortableContext>
        </DndContext>
    );
};

const DraggableButton: FunctionComponent<{isDragging: boolean; listeners: DraggableSyntheticListeners}> = ({
    isDragging,
    listeners
}) => (
    <KitButton
        type={'tertiary'}
        iconSize={'l'}
        icon={<FontAwesomeIcon icon={faGripLines} />}
        style={{marginRight: '8px', cursor: isDragging ? 'grabbing' : 'grab'}}
        {...listeners}
    />
);

const DraggableItemList: FunctionComponent<{item: Item}> = ({item}) => {
    const {setNodeRef, isDragging, listeners, transform, transition} = useSortable({id: item.id});

    const style = {
        transform: CSS.Transform.toString(transform),
        transition
    };

    return (
        <KitItemList
            ref={setNodeRef}
            style={style}
            draggableHandler={<DraggableButton key={item.id} isDragging={isDragging} listeners={listeners} />}
            idCardProps={item.idCardProps}
            actions={item.actions}
        />
    );
};

export default App;
