import React from 'react';
import {KitMenu} from '@kit/Navigation';
import {KitSpace} from '@kit/Layout';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHouse, faMinus, faPercent, faPlus} from '@fortawesome/free-solid-svg-icons';

const App = () => (
        <div style={{width: '100%', padding: '5px', background: 'lightgrey'}}>
            <KitSpace direction="vertical" style={{width: '350px'}}>
                <KitMenu.Item
                    title="Item menu"
                    icon={<FontAwesomeIcon icon={faHouse} />}
                    actions={[
                        {
                            icon: <FontAwesomeIcon icon={faPlus} />,
                            label: 'Add',
                            onClick: () => console.log('on click add')
                        }
                    ]}
                />
                <KitMenu.Item
                    title="Item menu"
                    icon={<FontAwesomeIcon icon={faHouse} />}
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
                        }
                    ]}
                />
                <KitMenu.Item
                    title="Item menu"
                    icon={<FontAwesomeIcon icon={faHouse} />}
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
                />
            </KitSpace>
        </div>
    );

export default App;
