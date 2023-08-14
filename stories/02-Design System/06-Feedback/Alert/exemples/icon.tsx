import React from 'react';
import { KitAlert } from "@kit/Feedback/";

const App= ({}) => {
    return (
        <>
            <KitAlert message="Success Tips" type="success" showIcon />
            <br/>
            <KitAlert message="Informational Notes" type="info" showIcon />
            <br/>
            <KitAlert message="Warning" type="warning" showIcon closable />
            <br/>
            <KitAlert message="Error" type="error" showIcon />
            <br/>
            <KitAlert
                message="Success Tips"
                description="Detailed description and advice about successful copywriting."
                type="success"
                showIcon
            />
            <br/>
            <KitAlert
                message="Informational Notes"
                description="Additional description and information about copywriting."
                type="info"
                showIcon
            />
            <br/>
            <KitAlert
                message="Warning"
                description="This is a warning notice about copywriting."
                type="warning"
                showIcon
                closable
            />
            <br/>
            <KitAlert
                message="Error"
                description="This is an error message about copywriting."
                type="error"
                showIcon
            />
        </>
    );
};

export default App;