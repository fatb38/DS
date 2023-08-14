import React from 'react';
import { KitAlert } from "@kit/Feedback/";

const App= ({}) => {
    return (
        <>
            <KitAlert type="success" message="Success Text"/>
            <br/>
            <KitAlert type="info" message="Info Text"/>
            <br/>
            <KitAlert type="warning" message="Warning Text"/>
            <br/>
            <KitAlert type="error" message="Error Text"/>
        </>
    );
};

export default App;