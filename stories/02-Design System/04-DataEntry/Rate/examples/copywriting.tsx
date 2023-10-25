import React, {useState} from 'react';
import {KitRate} from '@kit/DataEntry';
import {KitSpace} from '@kit/Layout';
import {KitTypography} from '@kit/General';

const App = () => {
    const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
    const [value, setValue] = useState(3);

    return (
        <KitSpace>
            <KitRate tooltips={desc} onChange={setValue} value={value} />
            {value ? <KitTypography.Text>{desc[value - 1]}</KitTypography.Text> : ''}
        </KitSpace>
    );
};

export default App;
