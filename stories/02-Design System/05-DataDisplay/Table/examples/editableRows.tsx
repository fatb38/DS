import {KitTable, KitTooltip} from '@kit/DataDisplay/';
import {IKitTable} from '@kit/DataDisplay/Table/types';
import {KitSpace} from '@kit/Layout/';
import {KitButton, KitTypography} from '@kit/General';
import {KitInput, KitInputNumber} from '@kit/DataEntry';
import {AntForm} from '@kit/Ant';
import {FunctionComponent, HTMLAttributes, Key, PropsWithChildren, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faClose, faEdit, faSave} from '@fortawesome/free-solid-svg-icons';

type DataType = {
    key: React.Key;
    name: string;
    age: number;
    address: string;
};

const originData: DataType[] = [];

for (let i = 0; i < 20; i++) {
    originData.push({
        key: i.toString(),
        name: `Edward ${i}`,
        age: 32,
        address: `London Park no. ${i}`
    });
}

type EditableCellProps = HTMLAttributes<HTMLElement> & {
    editing: boolean;
    dataIndex: string;
    title: string;
    inputType: 'number' | 'text';
};

const EditableCell: FunctionComponent<PropsWithChildren<EditableCellProps>> = ({
    editing,
    dataIndex,
    title,
    inputType,
    children
}) => {
    const inputNode = inputType === 'number' ? <KitInputNumber /> : <KitInput />;

    const requiredLabel = `${title} is required.`;

    return editing ? (
        <AntForm.Item
            name={dataIndex}
            rules={[
                {
                    required: true,
                    message: (
                        <KitTooltip title={requiredLabel} trigger={['hover', 'focus']}>
                            <KitTypography.Text tabIndex={0} ellipsis={{tooltip: false}}>
                                {requiredLabel}
                            </KitTypography.Text>
                        </KitTooltip>
                    )
                }
            ]}
        >
            {inputNode}
        </AntForm.Item>
    ) : (
        children
    );
};

const App = () => {
    const [form] = AntForm.useForm<DataType>();
    const [data, setData] = useState(originData);
    const [editingKey, setEditingKey] = useState<Key>();

    const isEditing = (record: DataType) => record.key === editingKey;

    const edit = (record: DataType) => {
        form.setFieldsValue({name: record.name ?? '', age: record.age ?? 0, address: record.address ?? ''});
        setEditingKey(record.key);
    };

    const cancel = () => {
        setEditingKey('');
    };

    const save = async (key: Key) => {
        try {
            const row = await form.validateFields();

            const newData = [...data];
            const index = newData.findIndex(item => key === item.key);

            if (index > -1) {
                newData[index] = {...newData[index], ...row};
            } else {
                newData.push(row);
            }

            setData(newData);
            setEditingKey('');
        } catch (errInfo) {
            console.log('Validate Failed:', errInfo);
        }
    };

    const handleInputSave = (handleInputSave: Key) => {
        save(handleInputSave).catch(e => {
            throw e;
        });
    };

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            width: '25%',
            editable: true
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
            width: '10%',
            editable: true
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
            editable: true
        },
        {
            title: 'Action',
            key: 'action',
            width: '10%',
            render: (_, record: DataType) => {
                const editable = isEditing(record);

                return editable ? (
                    <KitSpace>
                        <KitButton icon={<FontAwesomeIcon icon={faClose} />} onClick={cancel} />
                        <KitButton
                            type="primary"
                            icon={<FontAwesomeIcon icon={faSave} />}
                            onClick={() => handleInputSave(record.key)}
                        >
                            Save
                        </KitButton>
                    </KitSpace>
                ) : (
                    <KitSpace>
                        <KitButton onClick={cancel}>Action</KitButton>
                        <KitButton type="primary" icon={<FontAwesomeIcon icon={faEdit} />} onClick={() => edit(record)}>
                            Edit
                        </KitButton>
                    </KitSpace>
                );
            }
        }
    ];

    const mergedColumns: IKitTable['columns'] = columns.map(col => {
        if (!col.editable) {
            return col;
        }
        return {
            ...col,
            onCell: (record: DataType) => ({
                record,
                inputType: col.dataIndex === 'age' ? 'number' : 'text',
                dataIndex: col.dataIndex,
                title: col.title,
                editing: isEditing(record)
            })
        };
    });

    return (
        <AntForm form={form} component={false}>
            <KitTable
                dataSource={data}
                columns={mergedColumns}
                components={{
                    body: {
                        cell: EditableCell
                    }
                }}
                pagination={{pageSize: 5, onChange: cancel}}
            />
        </AntForm>
    );
};

export default App;
