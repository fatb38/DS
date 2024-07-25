import {KitItemCard} from '@kit/DataDisplay';
import {KitSpace} from '@kit/Layout';
import {ComponentProps, FunctionComponent, useState} from 'react';
import {
    arrayMove,
    horizontalListSortingStrategy,
    SortableContext,
    useSortable,
    verticalListSortingStrategy
} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';
import {DndContext, DragEndEvent, DraggableSyntheticListeners} from '@dnd-kit/core';
import {KitButton} from '@kit/General';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGripLines} from '@fortawesome/free-solid-svg-icons';
import {IKitItemCard} from '@kit/DataDisplay/ItemCard/types';
import {restrictToHorizontalAxis, restrictToVerticalAxis} from '@dnd-kit/modifiers';
import {KitRadio} from '@kit/DataEntry';
import {RadioChangeEvent} from 'antd';

type DraggableItemCard = {
    id: number;
    title: ComponentProps<typeof KitItemCard>['title'];
    description: ComponentProps<typeof KitItemCard>['description'];
    imageSrc: ComponentProps<typeof KitItemCard>['imageSrc'];
};

const DraggableButton: FunctionComponent<{isDragging: boolean; listeners: DraggableSyntheticListeners}> = ({
    isDragging,
    listeners
}) => (
    <KitButton
        type="tertiary"
        iconSize="l"
        icon={<FontAwesomeIcon icon={faGripLines} />}
        style={{cursor: isDragging ? 'grabbing' : 'grab'}}
        {...listeners}
    />
);

const DraggableItemCard: FunctionComponent<{item: DraggableItemCard; mode: IKitItemCard['display']}> = ({
    item,
    mode
}) => {
    const {setNodeRef, isDragging, listeners, transform, transition} = useSortable({id: item.id});

    const style = {
        transform: CSS.Transform.toString(transform),
        transition
    };

    return (
        <KitItemCard
            ref={setNodeRef}
            style={style}
            display={mode}
            draggableHandler={<DraggableButton key={item.id} isDragging={isDragging} listeners={listeners} />}
            title={item.title}
            description={item.description}
            imageSrc={item.imageSrc}
        />
    );
};

const App = () => {
    const [mode, setMode] = useState<IKitItemCard['display']>('list');
    const [items, setItems] = useState<DraggableItemCard[]>([
        {
            id: 1,
            title: 'Fromage Boursin ail et fines herbes - Format 125g',
            description: 'Retrouvez le goût de Boursin® dans une texture délicieusement onctueuse et légère.',
            imageSrc: 'public/images/boursin.jpeg'
        },
        {
            id: 2,
            title: 'Fromage Boursin ail et fines herbes - Format gourmand 150g',
            description: 'Retrouvez le goût de Boursin® dans une texture délicieusement onctueuse et légère.',
            imageSrc: 'public/images/boursin.jpeg'
        },
        {
            id: 3,
            title: 'Fromage Boursin ail et fines herbes - Format max 250g',
            description: 'Retrouvez le goût de Boursin® dans une texture délicieusement onctueuse et légère.',
            imageSrc: 'public/images/boursin.jpeg'
        }
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

    const _onChange = (event: RadioChangeEvent) => {
        setMode(event.target.value as IKitItemCard['display']);
    };

    const isListMode = mode === 'list';

    return (
        <KitSpace direction="vertical" size="l">
            <KitRadio.Group onChange={_onChange} value={mode}>
                <KitRadio value="list">List</KitRadio>
                <KitRadio value="card">Card</KitRadio>
            </KitRadio.Group>
            <DndContext
                onDragEnd={_handleDragEnd}
                modifiers={[isListMode ? restrictToVerticalAxis : restrictToHorizontalAxis]}
            >
                <SortableContext
                    items={items}
                    strategy={isListMode ? verticalListSortingStrategy : horizontalListSortingStrategy}
                >
                    <KitSpace direction={isListMode ? 'vertical' : 'horizontal'}>
                        {items.map(item => (
                            <DraggableItemCard key={item.id} item={item} mode={mode} />
                        ))}
                    </KitSpace>
                </SortableContext>
            </DndContext>
        </KitSpace>
    );
};

export default App;
