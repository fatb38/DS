import {FunctionComponent} from 'react';
import {Table as AntdTable} from 'antd';
import cn from 'classnames';
import {IKitTable, onChangeExtra, onChangePagination, onChangeSorter} from './types';
import {useKitTheme} from '@theme/useKitTheme';
import styles from './styles.module.scss';
import {getInternalComponents} from './internalComponents';
import {SortIcon} from './SortIcon';

export const KitTable: FunctionComponent<IKitTable> = ({
    className,
    style,
    cellsBackgroundColor,
    columns,
    onChange,
    components,
    ...tableProps
}) => {
    const {appId} = useKitTheme();

    const clx = cn(appId, styles['kit-table'], className);

    const columnsWithSortIcon = columns?.map(column => {
        if (!column.sorter) return column;
        column.sortIcon = ({sortOrder}) => <SortIcon sortOrder={sortOrder} />;
        return column;
    });

    const _handleOnChange = (pagination: onChangePagination, _, sorter: onChangeSorter, extra: onChangeExtra) => {
        onChange?.(pagination, sorter, extra);
    };

    return (
        <AntdTable
            className={clx}
            style={{...{'--kit-table-cells-background-color': cellsBackgroundColor}, ...style}}
            columns={columnsWithSortIcon}
            components={getInternalComponents(components)}
            onChange={_handleOnChange}
            {...tableProps}
        />
    );
};

KitTable.displayName = 'KitTable';
