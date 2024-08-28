import {faCheese} from '@fortawesome/free-solid-svg-icons';
import {IEditorTemplate} from '../../../types';
import {KitRedirectCard} from '@kit/DataDisplay';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {KitSpace} from '@kit/Layout';

export const Template = ({title = 'This is a title', description = 'This is a description', ...args}) => (
    <KitRedirectCard title={title} description={description} {...args} />
);

export const EditorTemplate: IEditorTemplate = () => (
    <KitSpace direction="vertical">
        <KitSpace direction="horizontal">
            <KitRedirectCard
                title="This is a title"
                description="This is a short description"
                icon={<FontAwesomeIcon icon={faCheese} />}
            />
            <KitRedirectCard
                title="This is a title"
                description="This is a short description"
                icon={<FontAwesomeIcon icon={faCheese} />}
                disabled
            />
        </KitSpace>
        <KitSpace direction="horizontal">
            <KitRedirectCard
                title="This is a title"
                description="This is a short description"
                coverSrc="public/images/free-copyright.jpeg"
            />
            <KitRedirectCard
                title="This is a title"
                description="This is a short description"
                coverSrc="public/images/free-copyright.jpeg"
                disabled
            />
        </KitSpace>
    </KitSpace>
);

EditorTemplate.path = 'components.RedirectCard';
EditorTemplate.title = 'RedirectCard';
