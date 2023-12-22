import React, {useState} from 'react';
import {KitSteps} from '@kit/Navigation';

const description = 'This is a description.';

const App = () => {
    const [current, setCurrent] = useState(0);

    const onChange = (value: number) => {
        setCurrent(value);
    };

    return (
        <KitSteps
            current={current}
            onChange={onChange}
            items={[
                {
                    title: 'Step 1',
                    description
                },
                {
                    title: 'Step 2',
                    description
                },
                {
                    title: 'Step 3',
                    description
                }
            ]}
        />
    );
};

export default App;
