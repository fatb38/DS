type GenericOnCkick = (...args: never[]) => void;

const useSecureClick = (onClick?: GenericOnCkick, timeout = 2000) => {
    let isClickable = true;

    const secureClick = (...args: never[]) => {
        if (isClickable && onClick) {
            onClick(...args);
            isClickable = false;

            setTimeout(() => {
                isClickable = true;
            }, timeout);
        }
    };

    return secureClick;
};

export default useSecureClick;
