import React from 'react';
import {KitInputNumber} from '@kit/DataEntry/';
import {KitSpace} from '@kit/Layout';

const App = () => {
    const formatterDollar = value => {
        return `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    };

    const formatterPercent = value => {
        return `${value}%`;
    };

    const parserDollar = (value: string | undefined) => {
        return value?.replace(/\$\s?|(,*)/g, '') ?? '';
    };

    const parserPercent = (value: string | undefined) => {
        return value?.replace('%', '') ?? '';
    };

    return (
        <KitSpace>
            <KitInputNumber defaultValue={1000} formatter={formatterDollar} parser={parserDollar} />
            <KitInputNumber min={0} max={100} defaultValue={100} formatter={formatterPercent} parser={parserPercent} />
        </KitSpace>
    );
};

export default App;
