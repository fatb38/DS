import React, {useEffect} from 'react';
import {KitAlert} from '@kit/index';
import {KitApp} from '@kit/App';

const details = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

const App = () => {
    const toastAlert = () => {
        KitAlert.success({
            type: 'success',
            closable: true,
            message: 'This is very long alert message text. It should not exceed 400px wide. ',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            details
        });
    };

    useEffect(() => {
        toastAlert();
    }, []);

    return <KitApp></KitApp>;
};

export default App;
