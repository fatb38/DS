import React from 'react';
import { openKitSnackBar, closeKitSnackBar } from "@kit/Feedback/";
import { KitSpace } from '@kit/Layout';
import { KitButton } from '@kit/General';

const App= ({}) => {
    return (
        <KitSpace>
            <KitButton
                type="primary"
                onClick={() => {
                    openKitSnackBar(
                        {
                            message: "Hello there !",
                            ctaText: "Undo",
                            ctaOnClick: () => console.log("With a CTA")
                        }
                    );
                }}
            >
                Open SnackBar
            </KitButton>
            <KitButton onClick={() => {closeKitSnackBar()}}>Close SnackBar</KitButton>
        </KitSpace>
    );
};

export default App;