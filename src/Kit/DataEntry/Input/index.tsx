import InternalInput from './Input';
import InternalTextArea from './TextArea';
import InternalPassword from './Password';
import {IKitPassword, IKitTextArea} from './types';
import {FunctionComponent} from 'react';

type CompoundedComponent = typeof InternalInput & {
    TextArea: FunctionComponent<IKitTextArea>;
    Password: FunctionComponent<IKitPassword>;
};

export const KitInput = InternalInput as CompoundedComponent;
KitInput.displayName = 'KitInput';
KitInput.TextArea = InternalTextArea;
KitInput.Password = InternalPassword;
