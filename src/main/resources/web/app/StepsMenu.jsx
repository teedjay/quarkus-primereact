import React, { useState } from 'react';
import { Steps } from 'primereact/steps';

export default function StepsMenu() {

    const items = [
        {
            label: 'Personal'
        },
        {
            label: 'Seat'
        },
        {
            label: 'Payment'
        },
        {
            label: 'Confirmation'
        }
    ];

    return (
        <div>
            <Steps model={items} activeIndex={2} />
        </div>
    );

}