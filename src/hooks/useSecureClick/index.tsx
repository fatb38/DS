import {useCallback, useRef} from 'react';

const useSecureClick = (onClick, timeout = 500) => {
    const isClickable = useRef(true);

    const secureClick = useCallback(() => {
        if (isClickable.current && onClick) {
            onClick();
            isClickable.current = false;

            setTimeout(() => {
                isClickable.current = true;
            }, timeout);
        }
    }, [onClick]);

    return secureClick;
};

export default useSecureClick;
