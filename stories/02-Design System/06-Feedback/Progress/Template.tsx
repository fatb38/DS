import {KitProgress} from '@kit/Feedback/';
import {IEditorTemplate} from '../../../types';
import {KitSpace} from '@kit/Layout';

export const Template = args => <KitProgress {...args} />;

export const EditorTemplate: IEditorTemplate = () => (
    <KitSpace direction="vertical" style={{width: '200px'}}>
        <KitProgress percent={30} />
        <KitProgress percent={50} status="active" />
        <KitProgress percent={70} status="exception" />
        <KitProgress percent={100} />
        <KitProgress percent={50} size={[300, 20]} />
        <KitSpace size={30}>
            <KitProgress type="circle" percent={50} />
            <KitProgress type="circle" percent={50} size="small" />
            <KitProgress type="circle" percent={50} size={20} />
        </KitSpace>
        <KitSpace size={30} wrap>
            <KitProgress steps={3} percent={50} />
            <KitProgress steps={3} percent={50} size="small" />
        </KitSpace>
    </KitSpace>
);
EditorTemplate.path = 'components.Progress';
EditorTemplate.title = 'Progress';
