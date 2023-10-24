import React, {CSSProperties, FunctionComponent, useEffect, useState} from 'react';
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

const ARISTID_TOASTSER_PROVIDER_CLASSNAME = 'aristid-ds-toaster';

const KitSnackBarProvider: FunctionComponent = () => {
    let [hasProvider, setHasProvider] = useState(true);

    useEffect(() => {
        const providerElem = document.querySelector(`.${ARISTID_TOASTSER_PROVIDER_CLASSNAME}`);
        setHasProvider(!!providerElem);
    }, []);

    return (
        !hasProvider && (
            <Toaster
                containerClassName={ARISTID_TOASTSER_PROVIDER_CLASSNAME}
                position="bottom-center"
                toastOptions={{style: resetReactHotToastStyle}}
            />
        )
    );
};

export default KitSnackBarProvider;
