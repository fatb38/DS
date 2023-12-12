import {useCallback, useRef} from 'react';

const useSecureClick = (onClick, timeout = 500) => {
    const isClickable = useRef(true);

    const secureClick = useCallback(
        (...args) => {
            if (isClickable.current && onClick) {
                onClick(...args);
                isClickable.current = false;

                setTimeout(() => {
                    isClickable.current = true;
                }, timeout);
            }
        },
        [onClick, timeout]
    );

    return secureClick;
};

export default useSecureClick;
