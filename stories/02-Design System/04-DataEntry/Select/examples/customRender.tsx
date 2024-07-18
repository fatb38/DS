import {KitSelect} from '@kit/DataEntry/';
import {KitSpace} from '@kit/Layout/';
import {KitTypography} from '@kit/General';
import {IKitOption} from '@kit/DataEntry/Select/types';

const App = () => {
    const recordOptions: IKitOption[] = [
        {
            value: 'cha-yellow',
            label: 'Chartreuse Jaune',
            idCard: {
                description: 'Chartreuse Jaune',
                avatarProps: {
                    size: 'small',
                    shape: 'square',
                    imageFit: 'contain',
                    src: 'public/images/chartreuse-jaune.png',
                    label: 'Chartreuse Jaune'
                }
            }
        },
        {
            value: 'cha-vep',
            label: 'Chartreuse VEP',
            idCard: {
                description: 'Chartreuse VEP',
                avatarProps: {
                    size: 'small',
                    shape: 'square',
                    imageFit: 'contain',
                    src: 'public/images/chartreuse-vep.png',
                    label: 'Chartreuse VEP'
                }
            }
        },
        {
            value: 'cha-verte',
            label: 'Chartreuse Verte',
            idCard: {
                description: 'Chartreuse Verte',
                avatarProps: {
                    size: 'small',
                    shape: 'square',
                    imageFit: 'contain',
                    src: 'public/images/chartreuse-verte.png',
                    label: 'Chartreuse Verte'
                }
            }
        }
    ];

    const styleSmall = {width: 340};
    const styleLarge = {width: 450};

    return (
        <KitSpace direction="vertical" size="l">
            <KitSpace direction="vertical">
                <KitTypography.Text weight="bold">Basic</KitTypography.Text>
                <KitSelect
                    placeholder="Select a status"
                    style={styleSmall}
                    options={recordOptions}
                    showSearch
                    onSearch={value => console.log(value)}
                    optionFilterProp="label"
                    dropdownRender={menu => (
                        <>
                            <KitTypography.Text weight="bold" style={{padding: '4px 0 16px 0'}}>
                                Suggestion (3)
                            </KitTypography.Text>
                            {menu}
                        </>
                    )}
                />
                <KitSpace>
                    <KitSelect
                        placeholder="Select a status"
                        style={styleSmall}
                        options={recordOptions}
                        defaultValue={recordOptions[0].value}
                        disabled
                        showSearch
                        onSearch={value => console.log(value)}
                        optionFilterProp="label"
                        dropdownRender={menu => (
                            <>
                                <KitTypography.Text weight="bold" style={{padding: '4px 0 16px 0'}}>
                                    Suggestion (3)
                                </KitTypography.Text>
                                {menu}
                            </>
                        )}
                    />
                    <KitSelect
                        placeholder="Select a status"
                        style={styleSmall}
                        options={recordOptions}
                        defaultValue={recordOptions[0].value}
                        status="warning"
                        showSearch
                        onSearch={value => console.log(value)}
                        optionFilterProp="label"
                        dropdownRender={menu => (
                            <>
                                <KitTypography.Text weight="bold" style={{padding: '4px 0 16px 0'}}>
                                    Suggestion (3)
                                </KitTypography.Text>
                                {menu}
                            </>
                        )}
                    />
                    <KitSelect
                        placeholder="Select a status"
                        style={styleSmall}
                        options={recordOptions}
                        defaultValue={recordOptions[0].value}
                        status="error"
                        showSearch
                        onSearch={value => console.log(value)}
                        optionFilterProp="label"
                        dropdownRender={menu => (
                            <>
                                <KitTypography.Text weight="bold" style={{padding: '4px 0 16px 0'}}>
                                    Suggestion (3)
                                </KitTypography.Text>
                                {menu}
                            </>
                        )}
                    />
                </KitSpace>
            </KitSpace>
            <KitSpace direction="vertical">
                <KitTypography.Text weight="bold">Multiple values (oneLineTags)</KitTypography.Text>
                <KitSelect
                    placeholder="Select a status"
                    style={styleLarge}
                    options={recordOptions}
                    showSearch
                    onSearch={value => console.log(value)}
                    optionFilterProp="label"
                    mode="multiple"
                    oneLineTags
                    dropdownRender={menu => (
                        <>
                            <KitTypography.Text weight="bold" style={{padding: '4px 0 16px 0'}}>
                                Suggestion (3)
                            </KitTypography.Text>
                            {menu}
                        </>
                    )}
                />
                <KitSpace>
                    <KitSelect
                        placeholder="Select a status"
                        style={styleLarge}
                        options={recordOptions}
                        defaultValue={[recordOptions[0].value, recordOptions[1].value]}
                        disabled
                        showSearch
                        onSearch={value => console.log(value)}
                        optionFilterProp="label"
                        mode="multiple"
                        oneLineTags
                        dropdownRender={menu => (
                            <>
                                <KitTypography.Text weight="bold" style={{padding: '4px 0 16px 0'}}>
                                    Suggestion (3)
                                </KitTypography.Text>
                                {menu}
                            </>
                        )}
                    />
                    <KitSelect
                        placeholder="Select a status"
                        style={styleLarge}
                        options={recordOptions}
                        defaultValue={[recordOptions[0].value, recordOptions[1].value]}
                        status="warning"
                        showSearch
                        onSearch={value => console.log(value)}
                        optionFilterProp="label"
                        mode="multiple"
                        oneLineTags
                        dropdownRender={menu => (
                            <>
                                <KitTypography.Text weight="bold" style={{padding: '4px 0 16px 0'}}>
                                    Suggestion (3)
                                </KitTypography.Text>
                                {menu}
                            </>
                        )}
                    />
                    <KitSelect
                        placeholder="Select a status"
                        style={styleLarge}
                        options={recordOptions}
                        defaultValue={[recordOptions[0].value, recordOptions[1].value]}
                        status="error"
                        showSearch
                        onSearch={value => console.log(value)}
                        optionFilterProp="label"
                        mode="multiple"
                        oneLineTags
                        dropdownRender={menu => (
                            <>
                                <KitTypography.Text weight="bold" style={{padding: '4px 0 16px 0'}}>
                                    Suggestion (3)
                                </KitTypography.Text>
                                {menu}
                            </>
                        )}
                    />
                </KitSpace>
            </KitSpace>
            <KitSpace direction="vertical">
                <KitTypography.Text weight="bold">Multiple values</KitTypography.Text>
                <KitSelect
                    placeholder="Select a status"
                    style={styleLarge}
                    options={recordOptions}
                    showSearch
                    onSearch={value => console.log(value)}
                    optionFilterProp="label"
                    mode="multiple"
                    dropdownRender={menu => (
                        <>
                            <KitTypography.Text weight="bold" style={{padding: '4px 0 16px 0'}}>
                                Suggestion (3)
                            </KitTypography.Text>
                            {menu}
                        </>
                    )}
                />
                <KitSpace>
                    <KitSelect
                        placeholder="Select a status"
                        style={styleLarge}
                        options={recordOptions}
                        defaultValue={[recordOptions[0].value, recordOptions[1].value, recordOptions[2].value]}
                        disabled
                        showSearch
                        onSearch={value => console.log(value)}
                        optionFilterProp="label"
                        mode="multiple"
                        dropdownRender={menu => (
                            <>
                                <KitTypography.Text weight="bold" style={{padding: '4px 0 16px 0'}}>
                                    Suggestion (3)
                                </KitTypography.Text>
                                {menu}
                            </>
                        )}
                    />
                    <KitSelect
                        placeholder="Select a status"
                        style={styleLarge}
                        options={recordOptions}
                        defaultValue={[recordOptions[0].value, recordOptions[1].value, recordOptions[2].value]}
                        status="warning"
                        showSearch
                        onSearch={value => console.log(value)}
                        optionFilterProp="label"
                        mode="multiple"
                        dropdownRender={menu => (
                            <>
                                <KitTypography.Text weight="bold" style={{padding: '4px 0 16px 0'}}>
                                    Suggestion (3)
                                </KitTypography.Text>
                                {menu}
                            </>
                        )}
                    />
                    <KitSelect
                        placeholder="Select a status"
                        style={styleLarge}
                        options={recordOptions}
                        defaultValue={[recordOptions[0].value, recordOptions[1].value, recordOptions[2].value]}
                        status="error"
                        showSearch
                        onSearch={value => console.log(value)}
                        optionFilterProp="label"
                        mode="multiple"
                        dropdownRender={menu => (
                            <>
                                <KitTypography.Text weight="bold" style={{padding: '4px 0 16px 0'}}>
                                    Suggestion (3)
                                </KitTypography.Text>
                                {menu}
                            </>
                        )}
                    />
                </KitSpace>
            </KitSpace>
        </KitSpace>
    );
};

export default App;
