import React from 'react';
import {KitTypography} from '@kit/index';

const App = () => {
    const suffixCount = 12;

    const text =
        'In the process of internal desktop applications development, many different design specs and \
        implementations would be involved, which might cause designers and developers difficulties and \
        duplication and reduce the efficiency of development.';

    const start = text.slice(0, text.length - suffixCount).trim();

    const suffix = text.slice(-suffixCount).trim();

    return (
        <div style={{padding: '20px', width: '900px', boxSizing: 'border-box'}}>
            <KitTypography.Text ellipsis={{suffix}}>{start}</KitTypography.Text>
        </div>
    );
};

export default App;
