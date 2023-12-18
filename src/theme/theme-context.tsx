import React, {FC, PropsWithChildren, useLayoutEffect, useRef, useState} from 'react';

// TODO: Later add option to have more arisitd themes
import {getKitAristidTheme} from './aristid';
import {IKitCustomTheme, IKitTheme} from './types';
import {createGlobalStyle} from 'styled-components';
import {toCssVariables} from '@utils/functions';
import uuid from 'react-uuid';
import {merge} from 'lodash';
import {Style} from 'react-style-tag';
import {KitThemeContext} from './useKitTheme';
import {IJSONObject} from '../../.storybook/components/ThemeEditor/types';

const CustomVariables = createGlobalStyle<{customTheme: IKitCustomTheme; id: string}>`
  .${props => props.id} {
    ${props => toCssVariables(props.customTheme)};
  }
`;

const globalStyleId = 'aristid-ds-global';

export const KitThemeProvider: FC<PropsWithChildren<{customTheme?: IKitCustomTheme; id?: string}>> = ({
    children,
    customTheme,
    id
}) => {
    const [cssTokens, setCssTokens] = useState<Record<string, string> | null>(null);
    const {theme, appId, spacing} = useKitThemeProvider(getKitAristidTheme(), id, customTheme);

    useLayoutEffect(() => {
        const generalTheme = getKitAristidTheme()?.general;
        const tokens = toCssVariables(generalTheme as unknown as IJSONObject, '--general');
        setCssTokens(tokens);
    }, []);

    return (
        <KitThemeContext.Provider value={{theme, appId, spacing}}>
            {cssTokens !== null && (
                <>
                    <Style id={globalStyleId} hasSourceMap={false}>
                        {`
                            :root{
                                ${Object.keys(cssTokens)
                                    .map(key => `${key}: ${cssTokens[key]}`)
                                    .join(';')}
                            }
                        `}
                    </Style>
                    {customTheme && <CustomVariables id={appId} customTheme={customTheme} />}
                    {children}
                </>
            )}
        </KitThemeContext.Provider>
    );
};

const useKitThemeProvider = (theme: IKitTheme, id?: string, customTheme?: IKitCustomTheme) => {
    const internalId = useRef(id || 'ds-' + uuid().substring(0, 8));

    // We can't use css variables for the Spacing component, so we need to pass this object
    const mergeSpacing = merge(theme.general.spacing, customTheme?.general?.spacing);

    // TODO Remove theme
    return {theme, appId: internalId.current, spacing: mergeSpacing};
};
