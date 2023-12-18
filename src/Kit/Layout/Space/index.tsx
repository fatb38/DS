import React, {FunctionComponent, useCallback, useMemo} from 'react';
import {Space as AntdSpace} from 'antd';
import type {IKitSpace} from './types';
import {SpaceCompactProps} from 'antd/lib/space/Compact';
import {useKitTheme} from '@theme/useKitTheme';
import {SpaceSize} from 'antd/lib/space';

const Space: FunctionComponent<IKitSpace> = ({size, ...props}) => {
    const {spacing} = useKitTheme();

    const customSize = size ?? 'xs';

    const _getAntdSize = useCallback(
        (size: number | string): number => {
            if (typeof size === 'number') {
                return size;
            }

            if (typeof size === 'string') {
                return spacing[size] as number;
            }

            return 0;
        },
        [spacing]
    );

    const gapSize = useMemo(() => {
        if (typeof customSize === 'object') {
            let [verticalSpacing, horizontalSpacing] = customSize;

            verticalSpacing = _getAntdSize(verticalSpacing);
            horizontalSpacing = _getAntdSize(horizontalSpacing);

            return [verticalSpacing, horizontalSpacing] as [SpaceSize, SpaceSize];
        }

        return _getAntdSize(customSize) as SpaceSize;
    }, [customSize, _getAntdSize]);

    return <AntdSpace {...props} size={gapSize} />;
};

type CompoundedComponent = FunctionComponent<IKitSpace> & {
    Compact: FunctionComponent<SpaceCompactProps>;
};

export const KitSpace = Space as unknown as CompoundedComponent;
KitSpace.displayName = 'KitSpace';
KitSpace.Compact = AntdSpace.Compact;
