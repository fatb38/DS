import React, {useState} from 'react';
import {KitSpace} from '@kit/Layout';
import {KitItemList} from '@kit/DataDisplay';

const App = () => {
    const [selected, setSelected] = useState(false);
    return (
        <KitSpace direction="vertical" size="m">
            <div style={{width: '350px'}}>
                <KitItemList
                    title="Tondeuse à gazon"
                    description="Tondeuse thermique Auto tractée 70 VL 55 TH"
                    onSelect={e => setSelected(e.target.checked)}
                    selected={selected}
                />
            </div>
        </KitSpace>
    );
};

export default App;
