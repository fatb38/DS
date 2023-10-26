import React from 'react';
import {KitTabs} from '@kit/DataDisplay';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAppleAlt, faRobot} from '@fortawesome/free-solid-svg-icons';

const App = () => (
    <KitTabs
        defaultActiveKey="2"
        items={[faAppleAlt, faRobot].map((Icon, i) => {
            const id = String(i + 1);

            return {
                label: (
                    <span>
                        <FontAwesomeIcon icon={Icon} style={{marginRight: '6px'}} />
                        Tab {id}
                    </span>
                ),
                key: id,
                children: `Tab ${id}`
            };
        })}
    />
);

export default App;
