import InternalInput from "./Input";
import InternalTextArea from "./TextArea";
import InternalPassword from "./Password";
import { KitInputProps, KitPasswordProps, KitTextAreaProps } from "./types";

type CompoundedComponent = React.FunctionComponent<KitInputProps> & {
    TextArea: React.FunctionComponent<KitTextAreaProps>;
    Password: React.FunctionComponent<KitPasswordProps>;
};

export const KitInput = (InternalInput as unknown) as CompoundedComponent;
KitInput.displayName = "KitInput";
KitInput.TextArea = InternalTextArea;
KitInput.Password = InternalPassword;
