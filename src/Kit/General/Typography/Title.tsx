import React from 'react';
import Base from 'antd/lib/typography/Base';
import {KitTitleProps} from './types';
import {TITLE_LEVEL} from './commons';

const KitTitle = React.forwardRef<HTMLElement, KitTitleProps>(({level = TITLE_LEVEL.h1, ...props}, ref) => {
    const component = TITLE_LEVEL[level];

    // error come from ant
    // @ts-ignore
    return <Base ref={ref} {...props} component={component} />;
});

export default KitTitle;
