import React, {CSSProperties, FunctionComponent} from 'react';
import {Toaster} from 'react-hot-toast';

const resetReactHotToastStyle: CSSProperties = {
    background: 'initial',
    padding: 'initial',
    color: 'initial',
    boxShadow: 'initial',
    lineHeight: 'initial',
    display: 'initial',
    alignItems: 'initial',
    borderRadius: 'initial'
};

const KitSnackBarProvider: FunctionComponent = () => {
    return <Toaster position="bottom-center" toastOptions={{style: resetReactHotToastStyle}} />;
};

export default KitSnackBarProvider;
