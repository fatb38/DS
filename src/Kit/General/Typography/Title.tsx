import React, {forwardRef} from 'react';
import Base from 'antd/lib/typography/Base';
import {IKitTitle} from './types';
import {TITLE_LEVEL} from './commons';

const KitTitle = forwardRef<HTMLElement, IKitTitle>(({level = TITLE_LEVEL.h1, ...props}, ref) => {
    const component = TITLE_LEVEL[level];

    // error come from ant
    // @ts-ignore
    return <Base ref={ref} {...props} component={component} />;
});
KitTitle.displayName = 'KitTitle';

export default KitTitle;
