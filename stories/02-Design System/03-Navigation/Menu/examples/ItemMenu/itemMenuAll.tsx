import {KitMenu} from '@kit/Navigation';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHouse, faMinus, faPercent, faPlus} from '@fortawesome/free-solid-svg-icons';

const App = () => (
    <div style={{width: '100%', padding: '5px', background: 'lightgrey'}}>
        <div style={{width: '350px'}}>
            <KitMenu.Item
                title="Item menu"
                icon={<FontAwesomeIcon icon={faHouse} />}
                value="Valeur"
                actions={[
                    {
                        icon: <FontAwesomeIcon icon={faPlus} />,
                        label: 'Add',
                        onClick: () => console.log('on click add')
                    },
                    {
                        icon: <FontAwesomeIcon icon={faMinus} />,
                        label: 'Subtract',
                        onClick: () => console.log('on click subtract')
                    },
                    {
                        icon: <FontAwesomeIcon icon={faPercent} />,
                        label: 'Percent',
                        onClick: () => console.log('on click percent')
                    }
                ]}
                onSelectChange={e => console.log('selected', e.target.checked)}
                onRafterClick={() => console.log('click rafter')}
                onClick={() => console.log('on click itemMenu')}
            />
            <KitMenu.Item
                title="Item menu"
                icon={<FontAwesomeIcon icon={faHouse} />}
                value="Valeur"
                actions={[
                    {
                        icon: <FontAwesomeIcon icon={faPlus} />,
                        label: 'Add',
                        onClick: () => console.log('on click add')
                    },
                    {
                        icon: <FontAwesomeIcon icon={faMinus} />,
                        label: 'Subtract',
                        onClick: () => console.log('on click subtract')
                    },
                    {
                        icon: <FontAwesomeIcon icon={faPercent} />,
                        label: 'Percent',
                        onClick: () => console.log('on click percent')
                    }
                ]}
                onSelectChange={e => console.log('selected', e.target.checked)}
                onRafterClick={() => console.log('click rafter')}
                onClick={() => console.log('on click itemMenu')}
            />
            <KitMenu.Item
                title="Item menu"
                icon={<FontAwesomeIcon icon={faHouse} />}
                value="Valeur"
                actions={[
                    {
                        icon: <FontAwesomeIcon icon={faPlus} />,
                        label: 'Add',
                        onClick: () => console.log('on click add')
                    },
                    {
                        icon: <FontAwesomeIcon icon={faMinus} />,
                        label: 'Subtract',
                        onClick: () => console.log('on click subtract')
                    },
                    {
                        icon: <FontAwesomeIcon icon={faPercent} />,
                        label: 'Percent',
                        onClick: () => console.log('on click percent')
                    }
                ]}
                onSelectChange={e => console.log('selected', e.target.checked)}
                onRafterClick={() => console.log('click rafter')}
                onClick={() => console.log('on click itemMenu')}
                isSelected
            />
            <KitMenu.Item
                title="Item menu"
                icon={<FontAwesomeIcon icon={faHouse} />}
                value="Valeur"
                actions={[
                    {
                        icon: <FontAwesomeIcon icon={faPlus} />,
                        label: 'Add',
                        onClick: () => console.log('on click add')
                    },
                    {
                        icon: <FontAwesomeIcon icon={faMinus} />,
                        label: 'Subtract',
                        onClick: () => console.log('on click subtract')
                    },
                    {
                        icon: <FontAwesomeIcon icon={faPercent} />,
                        label: 'Percent',
                        onClick: () => console.log('on click percent')
                    }
                ]}
                onSelectChange={e => console.log('selected', e.target.checked)}
                onRafterClick={() => console.log('click rafter')}
                onClick={() => console.log('on click itemMenu')}
            />
        </div>
    </div>
);

export default App;
