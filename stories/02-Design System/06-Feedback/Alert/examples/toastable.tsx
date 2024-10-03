import React from 'react';
import {KitAlert, KitButton} from '@kit/index';

const details = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

const openToast = () => {
    KitAlert.success({
        message: 'This is a very long alert message text. It should not exceed 400px wide.',
        closable: true,
        description: 'This is the description',
        details
    });
};

const App = () => (
    <>
        <div style={{display: 'flex', justifyContent: 'center', marginBottom: '16px'}}>
            <KitAlert
                className="toast-alert"
                type="success"
                closable
                message="This is a very long alert message text. It should not exceed 400px wide."
                description="This is the description"
                details={details}
            />
        </div>
        <KitButton onClick={openToast}>Open Toast</KitButton>
    </>
);

export default App;
