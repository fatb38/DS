import type {RadioGroupContextProps} from 'antd/es/radio/interface';
import {createContext} from 'react';

const RadioGroupContext = createContext<RadioGroupContextProps | null>(null);

export const RadioGroupContextProvider = RadioGroupContext.Provider;

export default RadioGroupContext;
