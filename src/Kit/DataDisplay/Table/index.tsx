import {FunctionComponent, MouseEvent} from 'react';
import {Table as AntdTable} from 'antd';
import cn from 'classnames';
import {IKitTable, onChangeExtra, onChangePagination, onChangeSorter} from './types';
import {useKitTheme} from '@theme/useKitTheme';
import styles from './styles.module.scss';
import {getInternalComponents} from './internalComponents';
import {SortIcon} from './SortIcon';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCaretDown, faCaretRight} from '@fortawesome/free-solid-svg-icons';
import {KitButton} from '@kit/General';
import {DefaultRecordType, RenderExpandIconProps, RowClassName} from 'rc-table/lib/interface';

export const KitTable: FunctionComponent<IKitTable> = ({
    className,
    style,
    cellsBackgroundColor,
    columns,
    onChange,
    components,
    ...tableProps
}) => {
    const {appId, theme} = useKitTheme();

    const clx = cn(appId, styles['kit-table'], className);

    const columnsWithSortIcon = columns?.map(column => {
        if (!column.sorter) return column;
        column.sortIcon = ({sortOrder}) => <SortIcon sortOrder={sortOrder} />;
        return column;
    });

    const _handleOnChange = (pagination: onChangePagination, _, sorter: onChangeSorter, extra: onChangeExtra) => {
        onChange?.(pagination, sorter, extra);
    };

    const _handleExpandIcon = ({
        record,
        expanded,
        onExpand
    }: {
        record: RenderExpandIconProps<DefaultRecordType>['record'];
        expanded: RenderExpandIconProps<DefaultRecordType>['expanded'];
        onExpand: RenderExpandIconProps<DefaultRecordType>['onExpand'];
    }) => {
        if (!Array.isArray(record?.children) || !record?.children?.length) return undefined;

        return (
            <KitButton
                className={styles['expand-button']}
                type="text"
                color="black"
                onClick={(e: MouseEvent<HTMLButtonElement>) => onExpand(record, e)}
            >
                <FontAwesomeIcon icon={expanded ? faCaretDown : faCaretRight} />
            </KitButton>
        );
    };

    const _handleRowClassName: RowClassName<DefaultRecordType> = (record, _, indent) =>
        indent > 0 && (!Array.isArray(record?.children) || !record?.children?.length) ? 'last-expandable-level' : '';

    return (
        <AntdTable
            className={clx}
            style={{...{'--kit-table-cells-background-color': cellsBackgroundColor}, ...style}}
            columns={columnsWithSortIcon}
            components={getInternalComponents(components)}
            onChange={_handleOnChange}
            // Pour l'instant on garde expandable dans les props à Omit<>
            // A voir si on permet de custom uniquement certaines propriété
            expandable={{
                expandedRowClassName: _handleRowClassName,
                expandIcon: _handleExpandIcon,
                indentSize: theme.spacing.m
            }}
            {...tableProps}
        />
    );
};

KitTable.displayName = 'KitTable';
