import {toast} from 'react-hot-toast';
import KitSnackBar from './SnackBar';
import {IKitOpenSnackBar} from './types';

const DEFAULT_DURATION = 4000;

export const openSnackBar = ({
    message,
    closable,
    ctaText,
    ctaOnClick,
    duration = DEFAULT_DURATION
}: IKitOpenSnackBar) => {
    // Close all snackbar
    closeSnackBar();

    return toast(<KitSnackBar message={message} ctaText={ctaText} ctaOnClick={ctaOnClick} closable={closable} />, {
        duration: duration
    });
};

export const closeSnackBar = () => {
    toast.remove();
};
