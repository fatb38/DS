import {KitItemList} from '@kit/DataDisplay/';
import {KitButton} from '@kit/General/';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {IEditorTemplate} from '../../../types';
import {faBullhorn, faCartPlus, faGripLines, faStar} from '@fortawesome/free-solid-svg-icons';
import {IKitItemList} from '@kit/DataDisplay/ItemList/types';

const idCardProps = {
    title: 'Tondeuse à gazon',
    description: 'Tondeuse thermique Auto tractée 70 VL 55 TH',
    avatarProps: {label: 'TG'}
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

export const Template = (args: IKitItemList) => (
    <KitItemList
        {...args}
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
                type={'tertiary'}
                iconSize={'l'}
                icon={<FontAwesomeIcon icon={faGripLines} />}
                style={{marginRight: '8px'}}
            />
        }
    />
);

export const EditorTemplate: IEditorTemplate = () => (
    <KitItemList
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
                type={'tertiary'}
                iconSize={'l'}
                icon={<FontAwesomeIcon icon={faGripLines} />}
                style={{marginRight: '8px'}}
            />
        }
    />
);

EditorTemplate.path = 'components.ItemList';
EditorTemplate.title = 'ItemList';
