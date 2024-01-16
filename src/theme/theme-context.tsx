import React, {FC, PropsWithChildren, useLayoutEffect, useRef, useState} from 'react';

// TODO: Later add option to have more arisitd themes
import {IKitCustomTheme} from './types';
import {createGlobalStyle} from 'styled-components';
import {toCssVariables} from '@utils/functions';
import uuid from 'react-uuid';
import merge from 'lodash/merge';
import {Style} from 'react-style-tag';
import {KitThemeContext} from './useKitTheme';
import {IJSONObject} from '../../.storybook/components/ThemeEditor/types';
import {KitAristidThemeGeneral} from '@theme/aristid/general';

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
    const {theme, appId, spacing} = useKitThemeProvider(id, customTheme);

    useLayoutEffect(() => {
        const tokens = toCssVariables(KitAristidThemeGeneral as unknown as IJSONObject, '--general');
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

const useKitThemeProvider = (id?: string, customTheme?: IKitCustomTheme) => {
    const internalId = useRef(id || 'ds-' + uuid().substring(0, 8));

    // We can't use css variables for the Spacing component, so we need to pass this object
    const mergeSpacing = merge(KitAristidThemeGeneral.spacing, customTheme?.general?.spacing);

    return {theme: KitAristidThemeGeneral, appId: internalId.current, spacing: mergeSpacing};
};
