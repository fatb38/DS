import InternalInput from './Input';
import InternalTextArea from './TextArea';
import InternalPassword from './Password';
import {IKitInput, IKitPassword, IKitTextArea} from './types';
import {FunctionComponent} from 'react';

type CompoundedComponent = FunctionComponent<IKitInput> & {
    TextArea: FunctionComponent<IKitTextArea>;
    Password: FunctionComponent<IKitPassword>;
};

export const KitInput = InternalInput as unknown as CompoundedComponent;
KitInput.displayName = 'KitInput';
KitInput.TextArea = InternalTextArea;
KitInput.Password = InternalPassword;
