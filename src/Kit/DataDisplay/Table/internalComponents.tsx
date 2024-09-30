import {ReactNode} from 'react';
import {TableProps} from 'antd';
import {IKitTable, KitInternalComponentsCellProps} from './types';

const _getCellClasses = (className: string | undefined): {antCell?: string; internalCell?: string} => {
    const classNameList = className?.split(' ');

    const antCellClasses = classNameList?.filter(className => className !== 'ant-table-cell').join(' ');

    const internalCellClasses = classNameList
        ?.filter(className =>
            ['ant-table-cell', 'ant-table-cell-ellipsis', 'ant-table-selection-column'].includes(className)
        )
        .join(' ');

    return {
        antCell: antCellClasses,
        internalCell: internalCellClasses
    };
};

export const getInternalComponents = (components: IKitTable['components']): TableProps['components'] => ({
    header: {
        cell: ({children, className, style, title, rowSpan, colSpan, ...props}: KitInternalComponentsCellProps) => {
            const classes = _getCellClasses(className);

            return (
                <th
                    className={classes.antCell}
                    style={style}
                    title={title}
                    rowSpan={rowSpan}
                    colSpan={colSpan}
                    {...props}
                >
                    <div className={classes.internalCell}>{children}</div>
                </th>
            );
        }
    },
    body: {
        cell: ({children, className, style, title, rowSpan, colSpan, ...props}: KitInternalComponentsCellProps) => {
            const CellWrapper = components?.body?.cell;
            const classes = _getCellClasses(className);
            let tdTitle = '';

            if (classes.antCell?.includes('ant-table-cell-ellipsis')) {
                tdTitle = title;
            }

            return (
                <td className={classes.antCell} style={style} title={tdTitle} rowSpan={rowSpan} colSpan={colSpan}>
                    <div className={classes.internalCell}>
                        {CellWrapper ? (
                            <CellWrapper title={title} {...props}>
                                {children}
                            </CellWrapper>
                        ) : (
                            children
                        )}
                    </div>
                </td>
            );
        },
        row: ({children, ...props}: {children: ReactNode}) => {
            const RowWrapper = components?.body?.row;

            if (RowWrapper) {
                return (
                    <tr {...props} tabIndex={0}>
                        <RowWrapper>{children}</RowWrapper>
                    </tr>
                );
            }

            return (
                <tr {...props} tabIndex={0}>
                    {children}
                </tr>
            );
        }
    }
});
