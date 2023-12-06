import React, {ReactNode} from 'react';
import {DebouncedFunc, throttle} from 'lodash';
import {getKitAristidTheme} from './aristid';
import {IKitTheme} from './types';
import {Style} from 'react-style-tag';
import {toCssVariables} from '@utils/functions';

const globalStyleId = 'aristid-ds-global';

class AristidTheme {
    static theme: IKitTheme = getKitAristidTheme();
    static getGlobalStyles = throttle(() => {
        var el = document.getElementById(globalStyleId);
        if (el) {
            return null;
        }

        var vars = toCssVariables(AristidTheme.theme.general, '--general');
        return (
            <Style id={globalStyleId} hasSourceMap={false}>
                {`
                    :root{
                        ${Object.keys(vars)
                            .map(key => `${key}: ${vars[key]}`)
                            .join(';')}
                    }
                `}
            </Style>
        );
    }, 500);
}

export default AristidTheme;
