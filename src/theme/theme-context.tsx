import React, {Dispatch, SetStateAction, createContext, useState, FC, PropsWithChildren, useRef} from 'react';

// TODO: Later add option to have more arisitd themes
import {getKitAristidTheme} from './aristid';
import {IKitCustomTheme, IKitTheme} from './types';
import {createGlobalStyle} from 'styled-components';
import {toCssVariables} from '@utils/functions';
import uuid from 'react-uuid';
import AristidTheme from './default-theme';

type KitThemeContext =
    | {
          theme: IKitTheme;
          setCustomTheme: Dispatch<SetStateAction<IKitCustomTheme | undefined>>;
          appId: string;
      }
    | undefined;

const KitThemeContext = createContext<KitThemeContext>(undefined);
const kitAristidTheme = getKitAristidTheme();

const CustomVariables = createGlobalStyle<{customTheme: any; id: any}>`
    .${props => props.id} {
        ${props => toCssVariables(props.customTheme)};
    }
`;

export const useKitTheme = () => {
    const context = React.useContext(KitThemeContext);
    if (context === undefined) {
        throw new Error('You need to encapsulate component inside a KitApp, useKitTheme must be inside a context');
    }
    return context;
};

export const KitThemeProvider: FC<PropsWithChildren<{customTheme: any; id?: string}>> = ({
    children,
    customTheme,
    id
}) => {
    const value = useKitThemeProvider(id);

    return (
        <KitThemeContext.Provider value={value}>
            {AristidTheme.getGlobalStyles()}
            {customTheme && <CustomVariables id={value.appId} customTheme={customTheme} />}
            {children}
        </KitThemeContext.Provider>
    );
};

const useKitThemeProvider = (id?: string) => {
    const internalId = useRef(id || 'ds-' + uuid().substring(0, 8));
    const [theme, setTheme] = useState<IKitTheme>(kitAristidTheme);
    const [customTheme, setCustomTheme] = useState<IKitCustomTheme | undefined>(undefined);

    // TODO to remove
    // useEffect(() => {
    //     if (customTheme !== undefined) {
    //         setTheme(prevState => ({...prevState, components: kitAristidTheme.components}));
    //     }
    // }, [customTheme]);

    return {theme, setCustomTheme, appId: internalId.current};
};
