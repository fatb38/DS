import {ComponentProps, FunctionComponent, useState} from 'react';
import {KitAvatar, KitItemList} from '@kit/DataDisplay';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBullhorn, faCartPlus, faGripLines, faStar} from '@fortawesome/free-solid-svg-icons';
import {KitButton} from '@kit/General';
import {DndContext, DragEndEvent} from '@dnd-kit/core';
import {SortableContext, arrayMove, useSortable, verticalListSortingStrategy} from '@dnd-kit/sortable';
import {KitSpace} from '@kit/Layout';
import {restrictToVerticalAxis} from '@dnd-kit/modifiers';
import {CSS} from '@dnd-kit/utilities';

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
        label: 'Add to basket',
        icon: <FontAwesomeIcon icon={faCartPlus} />,
        onClick: () => console.log('action 1')
    },
    {
        key: '2',
        label: 'Add to favorite',
        icon: <FontAwesomeIcon icon={faStar} />,
        onClick: () => console.log('action 2')
    },
    {
        key: '3',
        label: 'Notify when available',
        icon: <FontAwesomeIcon icon={faBullhorn} />,
        onClick: () => console.log('action 3')
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
                <KitSpace direction={'vertical'} style={{width: '600px'}}>
                    {items.map(item => (
                        <DraggableItemList key={item.id} item={item} />
                    ))}
                </KitSpace>
            </SortableContext>
        </DndContext>
    );
};

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
            idCardProps={idCardProps}
            onSelect={console.log}
            onClick={() => alert('click sur l’item list')}
            actions={actions}
            content={
                <div
                    style={{
                        width: '300px',
                        color: 'var(--general-colors-secondary-mediumGrey-mediumGrey400)',
                        backgroundColor: 'var(--general-colors-secondary-mediumGrey-mediumGrey100)',
                        padding: '16px 8px',
                        margin: '8px',
                        borderRadius: '8px',
                        border: '2px dashed var(--general-colors-secondary-mediumGrey-mediumGrey200)',
                        fontSize: 'var(--general-typography-fontSize7)'
                    }}
                >
                    Replace this empty component by your component (eg. a progress)
                </div>
            }
            draggableHandler={
                <KitButton
                    key={item.id}
                    type={'tertiary'}
                    iconSize={'l'}
                    icon={<FontAwesomeIcon icon={faGripLines} />}
                    style={{marginRight: '8px', cursor: isDragging ? 'grabbing' : 'grab'}}
                    {...listeners}
                />
            }
        />
    );
};

export default App;
