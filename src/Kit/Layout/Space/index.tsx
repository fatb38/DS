import React, {FunctionComponent, useMemo} from 'react';
import {Space as AntdSpace} from 'antd';
import type {IKitSpace} from './types';
import {SpaceCompactProps} from 'antd/lib/space/Compact';
import {useKitTheme} from '@theme/theme-context';

const Space: React.FunctionComponent<IKitSpace> = props => {
    const {theme} = useKitTheme();
    const spacingTheme = theme.general.spacing;

    let {size, ...rest} = props;
    size = size ?? 'xs';

    const _getAntdSize = size => {
        if (typeof size === 'number') {
            return size;
        }

        if (typeof size === 'string') {
            return spacingTheme[size];
        }

        return undefined;
    };

    const gapSize = useMemo(() => {
        if (typeof size === 'object') {
            let [verticalSpacing, horizontalSpacing] = size;

            verticalSpacing = _getAntdSize(verticalSpacing);
            horizontalSpacing = _getAntdSize(horizontalSpacing);

            return [verticalSpacing, horizontalSpacing];
        }

        return _getAntdSize(size);
    }, [size]);

    return <AntdSpace size={gapSize} {...rest} />;
};

type CompoundedComponent = FunctionComponent<IKitSpace> & {
    Compact: FunctionComponent<SpaceCompactProps>;
};

export const KitSpace = Space as unknown as CompoundedComponent;
KitSpace.displayName = 'KitSpace';
KitSpace.Compact = AntdSpace.Compact;
