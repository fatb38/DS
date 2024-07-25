import {Pagination} from 'antd';
import {IKitPagination} from './types';
import {useKitTheme} from '@theme/useKitTheme';
import cn from 'classnames';

import styles from './styles.module.scss';

export const KitPagination: React.FunctionComponent<IKitPagination> = ({className, bordered, ...props}) => {
    const {appId} = useKitTheme();

    const _itemRender: IKitPagination['itemRender'] = (_, type, originalElement) =>
        props.itemRender ? props.itemRender(_, type, originalElement) : originalElement;

    const clx = cn(appId, styles['kit-pagination'], className, {
        ['kit-pagination-bordered']: bordered
    });

    return <Pagination {...props} itemRender={_itemRender} className={clx} />;
};
