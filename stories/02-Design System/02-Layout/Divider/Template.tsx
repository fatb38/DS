import {KitDivider, KitGrid, KitSpace} from '@kit/Layout/';
import {IEditorTemplate} from '../../../types';
import {KitTypography} from '@kit/General';
import {IKitDivider} from '@kit/Layout/Divider/types';

interface ITemplate extends IKitDivider {
    label: string;
}

export const Template = (args: IKitDivider) => {
    const {label, ...props} = args as ITemplate;
    return <KitDivider {...props}>{label}</KitDivider>;
};

export const EditorTemplate: IEditorTemplate = () => (
    <KitGrid.Row>
        <KitGrid.Col span={24}>
            <KitSpace direction="vertical">
                <KitSpace direction="vertical">
                    <KitTypography.Paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
                        probare, quae sunt a te dicta? Refert tamen, quo modo.
                    </KitTypography.Paragraph>
                    <KitDivider>Label</KitDivider>
                    <KitTypography.Paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
                        probare, quae sunt a te dicta? Refert tamen, quo modo.
                    </KitTypography.Paragraph>
                </KitSpace>
                <KitDivider />
                <KitSpace align="center" style={{justifyContent: 'center'}}>
                    <KitTypography.Text>Lorem</KitTypography.Text>
                    <KitDivider type="vertical" />
                    <KitTypography.Text>ipsum</KitTypography.Text>
                    <KitDivider type="vertical" />
                    <KitTypography.Text>dolor</KitTypography.Text>
                </KitSpace>
            </KitSpace>
        </KitGrid.Col>
    </KitGrid.Row>
);
EditorTemplate.path = 'components.Divider';
EditorTemplate.title = 'Divider';
