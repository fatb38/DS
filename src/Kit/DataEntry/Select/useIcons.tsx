import {IKitSelect} from './types';
import {KitIcon} from '@kit/General';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircleXmark} from '@fortawesome/free-regular-svg-icons';
import {faCheck, faChevronDown, faCircleNotch} from '@fortawesome/free-solid-svg-icons';

type UseIcons = {
    clearIcon?: JSX.Element;
    suffixIcon: JSX.Element;
    selectedItemIcon: JSX.Element;
};

export default function useIcons({
    allowClear = true,
    loading = false
}: {
    allowClear: IKitSelect['allowClear'];
    loading: IKitSelect['loading'];
}): UseIcons {
    const clearIcon = allowClear ? <FontAwesomeIcon aria-label="clear" icon={faCircleXmark} /> : undefined;

    const suffixIcon = loading ? (
        <FontAwesomeIcon icon={faCircleNotch} spin />
    ) : (
        <FontAwesomeIcon icon={faChevronDown} />
    );

    const selectedItemIcon = <KitIcon icon={<FontAwesomeIcon icon={faCheck} />} on />;

    return {
        clearIcon,
        suffixIcon,
        selectedItemIcon
    };
}
