import toast from 'react-hot-toast';
import {Alertfunc, IKitAlert, KitAlertCompoundedComponent} from './types';
import Alert from './Alert';
import {uuid} from '@utils/functions';

const toastAlert: Alertfunc = ({duration = Infinity, position = 'top-center', type, toastId, ...props}) => {
    const propsOverrides: IKitAlert = {
        className: `${props.className} toast-alert`
    };

    const toastUid = toastId || uuid();

    const _onClose = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        toast.dismiss(toastUid);
        props.onClose && props.onClose(event);
    };

    if (props.closable) {
        propsOverrides.onClose = _onClose;
    }

    return toast(<Alert {...props} type={type} {...propsOverrides} />, {duration, position, id: toastUid});
};

export const KitAlert = Alert as KitAlertCompoundedComponent;

KitAlert.displayName = 'KitAlert';
KitAlert.info = props => toastAlert({...props, type: 'info'});

KitAlert.success = props => toastAlert({...props, type: 'success'});

KitAlert.warning = props => toastAlert({...props, type: 'warning'});

KitAlert.error = props => toastAlert({...props, type: 'error'});
