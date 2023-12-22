import type {Meta, StoryObj} from '@storybook/react';
import {KitAutoComplete} from '@kit/DataEntry';
import {argTypes} from './data';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-regular-svg-icons';
import {Template} from './Template';

const meta: Meta<typeof KitAutoComplete> = {
    component: KitAutoComplete,
    title: 'Design System/DataEntry/AutoComplete',
    argTypes: argTypes
};

export default meta;
type Story = StoryObj<typeof KitAutoComplete>;

export const Api: Story = {
    render: Template,
    parameters: {
        chromatic: {disableSnapshot: true}
    }
};

export const Basic: Story = {
    render: () => (
        <KitAutoComplete
            options={[{label: 'Test', value: 'test'}]}
            style={{
                width: 200
            }}
            placeholder="input here"
            open
        />
    ),
    parameters: {
        chromatic: {disableSnapshot: false}
    }
};

export const Pattern: Story = {
    render: () => {
        const renderTitle = title => (
            <span>
                {title}
                <a
                    style={{float: 'right'}}
                    href="https://www.google.com/search?q=antd"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    more
                </a>
            </span>
        );
        const renderItem = (title: string, count: number) => ({
            value: title,
            label: (
                <div
                    style={{
                        display: 'flex',
                        flex: '1',
                        justifyContent: 'space-between'
                    }}
                >
                    {title}
                    <span>
                        <FontAwesomeIcon icon={faUser} /> {count}
                    </span>
                </div>
            )
        });

        const options = [
            {
                label: renderTitle('Libraries'),
                options: [renderItem('AntDesign', 10000), renderItem('AntDesign UI', 10600)]
            },
            {
                label: renderTitle('Solutions'),
                options: [renderItem('AntDesign UI FAQ', 60100), renderItem('AntDesign FAQ', 30010)]
            },
            {
                label: renderTitle('Articles'),
                options: [renderItem('AntDesign design language', 100000)]
            }
        ];

        return (
            <KitAutoComplete
                popupClassName="certain-category-search-dropdown"
                popupMatchSelectWidth={350}
                placeholder="input here"
                style={{width: 350}}
                options={options}
                open
            />
        );
    },
    parameters: {
        chromatic: {disableSnapshot: false}
    }
};

export const LabelHelperStatus: Story = {
    render: () => {
        return (
            <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                <KitAutoComplete
                    label="Label"
                    helper="Helper"
                    allowClear={false}
                    style={{
                        width: 200
                    }}
                />
                <KitAutoComplete
                    label="Label"
                    helper="Helper"
                    style={{
                        width: 200
                    }}
                />
                <KitAutoComplete
                    label="Label"
                    helper="Helper"
                    disabled={true}
                    style={{
                        width: 200
                    }}
                />
                <KitAutoComplete
                    label="Label"
                    helper="Helper"
                    status="error"
                    style={{
                        width: 200
                    }}
                />
                <KitAutoComplete
                    label="Label"
                    helper="Helper"
                    status="warning"
                    style={{
                        width: 200
                    }}
                />
            </div>
        );
    },
    parameters: {
        chromatic: {disableSnapshot: false}
    }
};
