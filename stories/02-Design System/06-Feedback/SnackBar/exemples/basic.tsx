import React from 'react';
import {openKitSnackBar, closeKitSnackBar, KitSpace, KitButton} from '@kit/index';

const App = () => {
    return (
        <KitSpace>
            <KitButton
                type="primary"
                onClick={() => {
                    openKitSnackBar({
                        message: 'Hello there !'
                    });
                }}
            >
                Open SnackBar
            </KitButton>
            <KitButton
                onClick={() => {
                    closeKitSnackBar();
                }}
            >
                Close SnackBar
            </KitButton>
        </KitSpace>
    );
};

export default App;
