import {KitSpace} from '@kit/Layout/';
import {IEditorTemplate} from '../../../types';
import {KitLoader} from '@kit/Feedback/Loader';

export const Template = args => (
    <div style={{height: '80px', position: 'relative'}}>
        <KitLoader {...args} />
    </div>
);

export const EditorTemplate: IEditorTemplate = () => (
    <KitSpace direction="vertical" style={{width: '50%', padding: '16px'}}>
        <div style={{padding: '16px'}}>
            <KitLoader type="animated" />
        </div>
        <div style={{padding: '16px'}}>
            <KitLoader type="linear" value={35} />
        </div>
        <div style={{padding: '16px'}}>
            <KitLoader type="linear" infinite />
        </div>
    </KitSpace>
);
EditorTemplate.path = 'components.Loader';
EditorTemplate.title = 'Loader';
