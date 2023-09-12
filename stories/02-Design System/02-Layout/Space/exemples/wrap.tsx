import React from 'react';
import {KitSpace, KitButton} from '@kit/index';

const App = () => {
    return (
        <KitSpace size={[8, 16]} wrap>
            {new Array(20).fill(null).map((_, index) => (
                <KitButton key={index}>Button</KitButton>
            ))}
        </KitSpace>
    );
};

export default App;
