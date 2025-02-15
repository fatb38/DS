import {useState} from 'react';
import {KitSideMenu} from '@kit/Navigation';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChartLine, faHome} from '@fortawesome/free-solid-svg-icons';
import {IKitSideMenuItemProps} from '@kit/Navigation/SideMenu/types';
import {KitTag} from '@kit/DataDisplay';

const items: IKitSideMenuItemProps[] = [
    {
        key: 'item 1',
        title: 'Home',
        complement: <KitTag type="primary" idCardProps={{description: 'Upcoming'}} />,
        icon: <FontAwesomeIcon icon={faHome} />,
        onClick: () => console.log('item 1 clicked')
    },
    {
        key: 'item 2',
        title: 'Very long title that will be truncated',
        complement: <KitTag type="primary" idCardProps={{description: 'Upcoming'}} />,
        icon: <FontAwesomeIcon icon={faChartLine} />,
        onClick: () => console.log('item 1 clicked')
    },
    {
        key: 'item 3',
        title: 'Statistics',
        complement: <KitTag type="primary" idCardProps={{description: 'Upcoming'}} />,
        disabled: true,
        icon: <FontAwesomeIcon icon={faChartLine} />,
        onClick: () => console.log('item 2 clicked')
    }
];

const App = () => {
    const [activeItem, setActiveItem] = useState<string | undefined>('item 1');
    const _handleOnMenuClick = (key: string) => {
        setActiveItem(key);
    };

    return (
        <div
            style={{
                width: '100%',
                padding: '5px',
                background: 'lightgrey',
                height: '500px',
                display: 'flex',
                gap: '32px'
            }}
        >
            <KitSideMenu items={items} defaultActiveItemKey={activeItem} onMenuClick={_handleOnMenuClick} />
            <KitSideMenu items={items} defaultActiveItemKey={activeItem} onMenuClick={_handleOnMenuClick} open />
        </div>
    );
};

export default App;
