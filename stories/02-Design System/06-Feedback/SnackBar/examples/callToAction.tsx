import {openKitSnackBar, closeKitSnackBar, KitSpace, KitButton} from '@kit/index';

const App = () => (
    <KitSpace>
        <KitButton
            type="primary"
            onClick={() => {
                openKitSnackBar({
                    message: 'Hello there !',
                    ctaText: 'Undo',
                    ctaOnClick: () => console.log('With a CTA')
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

export default App;
