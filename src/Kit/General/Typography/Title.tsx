import React, {ForwardRefExoticComponent, forwardRef} from 'react';
import Base from 'antd/lib/typography/Base';
import {IInternalKitTitle, IKitTitle} from './types';
import {TITLE_LEVEL} from './commons';

const KitTitle = forwardRef<unknown, IKitTitle>(({level = TITLE_LEVEL.h1, ...props}, ref) => {
    const component: string = TITLE_LEVEL[level] as string;

    const InternalBase: ForwardRefExoticComponent<IInternalKitTitle> =
        Base as unknown as ForwardRefExoticComponent<IInternalKitTitle>;

    // error come from ant
    return <InternalBase ref={ref} {...props} component={component} />;
});
KitTitle.displayName = 'KitTitle';

export default KitTitle;
