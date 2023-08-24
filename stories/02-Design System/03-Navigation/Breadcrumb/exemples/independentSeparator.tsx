import React from 'react';
import {KitBreadcrumb} from '@kit/Navigation';

const App = () => {
    return (
        <KitBreadcrumb
            separator=""
            items={[
                {
                    title: 'Location'
                },
                {
                    type: 'separator',
                    separator: ':'
                },
                {
                    href: '',
                    title: 'Application Center'
                },
                {
                    type: 'separator'
                },
                {
                    href: '',
                    title: 'Application List'
                },
                {
                    type: 'separator'
                },
                {
                    title: 'An Application'
                }
            ]}
        />
    );
};

export default App;
