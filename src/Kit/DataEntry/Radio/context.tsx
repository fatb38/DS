import * as React from 'react';
import type {RadioGroupContextProps} from 'antd/lib/radio/interface';

const RadioGroupContext = React.createContext<RadioGroupContextProps | null>(null);

export const RadioGroupContextProvider = RadioGroupContext.Provider;

export default RadioGroupContext;
