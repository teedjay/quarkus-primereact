import React, { useState } from 'react';
import { InputTextarea } from 'primereact/inputtextarea';
import { Message } from 'primereact/message';

function MegaButton(props) {

    const [value, setValue] = useState('This is the start message');

    return (
        <div>
            <InputTextarea value={value} onChange={(e) => setValue(e.target.value)} rows={5} cols={30} />
            <Message text={value} />
        </div>
    );

}

export default MegaButton;