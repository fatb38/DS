import React from 'react';
import {Space as AntdSpace} from 'antd';
import type {KitSpaceProps} from './types';
import {SpaceCompactProps} from 'antd/lib/space/Compact';
import {useKitTheme} from '@theme/theme-context';

const Space: React.FunctionComponent<KitSpaceProps> = props => {
    const {theme} = useKitTheme();
    const spacingTheme = theme.general.spacing;

    let {size, ...rest} = props;
    size = size ?? 'xs';

    const getAntdSize = size => {
        if (typeof size === 'number') {
            return size;
        }

        if (typeof size === 'string') {
            return spacingTheme[size];
        }

        return undefined;
    };

    const gapSize = React.useMemo(() => {
        if (typeof size === 'object') {
            let [verticalSpacing, horizontalSpacing] = size;

            verticalSpacing = getAntdSize(verticalSpacing);
            horizontalSpacing = getAntdSize(horizontalSpacing);

            return [verticalSpacing, horizontalSpacing];
        }

        return getAntdSize(size);
    }, [size]);

    return <AntdSpace size={gapSize} {...rest} />;
};

type CompoundedComponent = React.FunctionComponent<KitSpaceProps> & {
    Compact: React.FunctionComponent<SpaceCompactProps>;
};

export const KitSpace = Space as unknown as CompoundedComponent;
KitSpace.displayName = 'KitSpace';
KitSpace.Compact = AntdSpace.Compact;
