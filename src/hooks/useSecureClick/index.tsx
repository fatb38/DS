import {useCallback, useRef} from 'react';

type GenericOnCkick = (...args: never[]) => void;

const useSecureClick = (onClick: GenericOnCkick, timeout = 500) => {
    const isClickable = useRef(true);

    const secureClick = useCallback(
        (...args: never[]) => {
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
