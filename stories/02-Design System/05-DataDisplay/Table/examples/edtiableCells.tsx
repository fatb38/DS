import {KitTable, KitTooltip} from '@kit/DataDisplay/';
import {KitSpace} from '@kit/Layout/';
import {KitButton, KitTypography} from '@kit/General';
import {FunctionComponent, Key, PropsWithChildren, createContext, useContext, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
import {AntFlex, AntForm} from '@kit/Ant';
import {GetRef} from 'antd';
import {KitInput} from '@kit/DataEntry';
import {IKitTable} from '@kit/DataDisplay/Table/types';

type FormInstance<T> = GetRef<typeof AntForm<T>>;

const EditableContext = createContext<FormInstance<DataType> | null>(null);

const EditableRow: FunctionComponent<PropsWithChildren> = ({children}) => {
    const [form] = AntForm.useForm();

    return (
        <AntForm form={form} component={false}>
            <EditableContext.Provider value={form}>{children}</EditableContext.Provider>
        </AntForm>
    );
};

type DataType = {
    key: Key;
    name: string;
    age: string;
    address: string;
};

type EditableCellProps = {
    title: string;
    editable: boolean;
    dataIndex: keyof DataType;
    record: DataType;
    handleSave: (record: DataType) => void;
};

const EditableCell: FunctionComponent<PropsWithChildren<EditableCellProps>> = ({
    title,
    editable,
    children,
    dataIndex,
    record,
    handleSave
}) => {
    const [editing, setEditing] = useState(false);
    const form = useContext(EditableContext)!;

    const toggleEdit = () => {
        setEditing(!editing);
        form.setFieldsValue({[dataIndex]: record[dataIndex]});
    };

    const save = async () => {
        try {
            const values = await form.validateFields();

            toggleEdit();
            handleSave({...record, ...values});
        } catch (errInfo) {
            console.log('Save failed:', errInfo);
        }
    };

    const handleInputSave = () => {
        save().catch(e => {
            throw e;
        });
    };

    let childNode = children;

    if (editable) {
        const requiredLabel = `${title} is required.`;

        childNode = editing ? (
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
                <KitInput
                    ref={element => {
                        element?.focus();
                    }}
                    onPressEnter={handleInputSave}
                    onBlur={handleInputSave}
                />
            </AntForm.Item>
        ) : (
            <div style={{cursor: 'pointer'}} onClick={toggleEdit}>
                {children}
            </div>
        );
    }

    return childNode;
};

const App = () => {
    const [dataSource, setDataSource] = useState<DataType[]>([
        {
            key: '0',
            name: 'Edward King 0',
            age: '32',
            address: 'London, Park Lane no. 0'
        },
        {
            key: '1',
            name: 'Edward King 1',
            age: '32',
            address: 'London, Park Lane no. 1'
        }
    ]);

    const [count, setCount] = useState(2);

    const handleAdd = () => {
        const newData: DataType = {
            key: count,
            name: `Edward King ${count}`,
            age: '32',
            address: `London, Park Lane no. ${count}`
        };
        setDataSource([...dataSource, newData]);
        setCount(count + 1);
    };

    const handleDelete = (key: Key) => {
        const newData = dataSource.filter(item => item.key !== key);
        setDataSource(newData);
    };

    const handleSave = (row: DataType) => {
        const newData = [...dataSource];
        const index = newData.findIndex(item => row.key === item.key);

        if (index > -1) {
            newData[index] = {...newData[index], ...row};
        } else {
            newData.push(row);
        }

        setDataSource(newData);
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
            width: '10%'
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address'
        },
        {
            title: 'Action',
            dataIndex: 'action',
            width: '10%',
            render: (_, record: DataType) => (
                <KitButton
                    type="tertiary"
                    icon={<FontAwesomeIcon icon={faTrash} />}
                    onClick={() => handleDelete(record.key)}
                    danger
                />
            )
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
                editable: col.editable,
                dataIndex: col.dataIndex,
                title: col.title,
                handleSave
            })
        };
    });

    const components = {
        body: {
            row: EditableRow,
            cell: EditableCell
        }
    };

    return (
        <AntFlex gap={20} vertical={true}>
            <KitSpace>
                <KitButton onClick={handleAdd} type="primary">
                    Add a row
                </KitButton>
            </KitSpace>
            <KitTable dataSource={dataSource} components={components} columns={mergedColumns} pagination={false} />
        </AntFlex>
    );
};

export default App;
