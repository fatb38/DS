import React from 'react';
import {KitSpace} from '@kit/Layout';
import {KitItemList} from '@kit/DataDisplay';

const App = () => {
    return (
        <KitSpace direction="vertical" size="large">
            <div style={{width: '350px'}}>
                <KitItemList title="Tondeuse à gazon" />
            </div>
            <div style={{width: '350px'}}>
                <KitItemList description="Tondeuse thermique Auto tractée 70 VL 55 TH" />
            </div>
            <div style={{width: '350px'}}>
                <KitItemList title="Tondeuse à gazon" description="Tondeuse thermique Auto tractée 70 VL 55 TH" />
            </div>
            <div style={{width: '350px'}}>
                <KitItemList
                    title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod es do is un incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum id est laborum."
                />
            </div>
        </KitSpace>
    );
};

export default App;
