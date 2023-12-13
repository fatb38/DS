import React, {FC, PropsWithChildren, useRef} from 'react';

// TODO: Later add option to have more arisitd themes
import {getKitAristidTheme} from './aristid';
import {IKitCustomTheme, IKitTheme} from './types';
import {createGlobalStyle} from 'styled-components';
import {toCssVariables} from '@utils/functions';
import uuid from 'react-uuid';
import AristidTheme from './default-theme';
import {merge} from 'lodash';
import {KitThemeContext} from './useKitTheme';

const kitAristidTheme = getKitAristidTheme();

const CustomVariables = createGlobalStyle<{customTheme: IKitCustomTheme; id: string}>`
    .${props => props.id} {
        ${props => toCssVariables(props.customTheme)};
    }
`;

export const KitThemeProvider: FC<PropsWithChildren<{customTheme?: IKitCustomTheme; id?: string}>> = ({
    children,
    customTheme,
    id
}) => {
    const value = useKitThemeProvider(kitAristidTheme, id, customTheme);

    return (
        <KitThemeContext.Provider value={value}>
            {AristidTheme.getGlobalStyles()}
            {customTheme && <CustomVariables id={value.appId} customTheme={customTheme} />}
            {children}
        </KitThemeContext.Provider>
    );
};

const useKitThemeProvider = (theme: IKitTheme, id?: string, customTheme?: IKitCustomTheme) => {
    const internalId = useRef(id || 'ds-' + uuid().substring(0, 8));

    // We can't use css variables for the Spacing component so we need to pass this object
    const mergeSpacing = merge(theme.general.spacing, customTheme?.general?.spacing);

    //TODO Remove theme
    return {theme, appId: internalId.current, spacing: mergeSpacing};
};
