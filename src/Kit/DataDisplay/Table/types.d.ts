import {TableProps} from 'antd';
import {KitHTMLAttributes} from '../../../types';
import type {TableColumnType} from 'antd';
import {ColumnType, TableRowSelection, SortOrder} from 'antd/es/table/interface';
import {CSSProperties, ComponentType, ForwardRefExoticComponent, FunctionComponent, ReactHTML} from 'react';

type Component<P> = ComponentType<P> | ForwardRefExoticComponent<P> | FunctionComponent<P> | keyof ReactHTML;

export type KitTableComponents = {
    body?: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        row?: Component<any>;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        cell?: Component<any>;
    };
};

export type KitInternalComponentsCellProps = {
    children: ReactNode;
    className: string;
    style: CSSProperties;
    title: string;
    rowSpan: number;
    colSpan: number;
};

type AntdTableTypesToOmit =
    | 'rowSelection'
    | 'onChange'
    | 'size'
    | 'bordered'
    | 'expandable'
    | 'components'
    | 'summary'
    | 'responsive'
    | 'getPopupContainer'
    | 'columns';

export type onChangePagination = Parameters<TableProps<RecordType>['onChange']>[0];
export type onChangeSorter = Parameters<TableProps<RecordType>['onChange']>[2];
export type onChangeExtra = Parameters<TableProps<RecordType>['onChange']>[3];

type AntdRowSelectionToOmit = 'selection' | 'columnWidth' | 'onSelectInvert' | 'onSelectNone' | 'onSelectMultiple';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface IKitTable<RecordType = any>
    extends Omit<TableProps<RecordType>, AntdTableTypesToOmit>,
        Omit<KitHTMLAttributes<HTMLTableElement>, 'title'> {
    rowSelection?: Omit<TableRowSelection, AntdRowSelectionToOmit>;
    components?: KitTableComponents;
    onChange?: (pagination: onChangePagination, sorter: onChangeSorter, extra: onChangeExtra) => void;
    cellsBackgroundColor?: string;
    columns: KitTableColumnsType<RecordType>;
}

type KitColumnTypeToOmit =
    | 'filters'
    | 'defaultFilteredValue'
    | 'filterResetToDefaultFilteredValue'
    | 'filterDropdown'
    | 'filterDropdownOpen'
    | 'filtered'
    | 'filteredValue'
    | 'filterIcon'
    | 'filterOnClose'
    | 'filterMultiple'
    | 'filterMode'
    | 'filterSearch'
    | 'onFilter'
    | 'onFilterDropdownOpenChange'
    | 'responsive';

export type KitColumnType<RecordType> = Omit<ColumnType<RecordType>, KitColumnTypeToOmit>;

export type KitTableColumnsType<RecordType> = KitColumnType<RecordType>[];

export {TableColumnType as KitTableColumnType};
export {SortOrder as KitSortOrder};
