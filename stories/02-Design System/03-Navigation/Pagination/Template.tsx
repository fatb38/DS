import React from 'react';
import {KitPagination} from '@kit/Navigation/';
import {IEditorTemplate} from '../../../types';
import {KitSpace} from '@kit/Layout';
import {IKitPagination} from '@kit/Navigation/Pagination/types';

interface ITemplate extends Omit<IKitPagination, 'pageSizeOptions'> {
    pageSizeOptions: string | undefined | null;
}

export const Template = (args: IKitPagination) => {
    const {pageSizeOptions, ...props} = args as ITemplate;
    const sizeOptions: string[] | undefined = pageSizeOptions ? pageSizeOptions.split(',') : undefined;
    return <KitPagination pageSizeOptions={sizeOptions} {...props} />;
};

export const EditorTemplate: IEditorTemplate = () => {
    return (
        <KitSpace direction="vertical" size="m">
            <KitPagination defaultCurrent={1} total={50} />
            <KitPagination defaultCurrent={1} total={50} bordered />
            <KitPagination showQuickJumper defaultCurrent={2} total={500} />
            <KitPagination showQuickJumper defaultCurrent={2} total={500} disabled />
            <KitPagination simple defaultCurrent={2} total={50} />
            <KitPagination disabled simple defaultCurrent={2} total={50} />
            <KitPagination total={85} showSizeChanger showQuickJumper showTotal={total => `Total ${total} items`} />
        </KitSpace>
    );
};
EditorTemplate.path = 'components.Pagination';
EditorTemplate.title = 'Pagination';
