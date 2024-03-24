import React from 'react';
import ReactDOM from 'react-dom/client';
import { PrimeReactProvider } from "primereact/api";
import { Button } from 'primereact/button'; 
import StepsMenu from './StepsMenu';
import MegaButton from './MegaButton';
import BlockSection from './BlockSection';
import CustomersDataTable from './CustomersDataTable';
import "primereact/resources/themes/bootstrap4-light-blue/theme.css";
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";

const root = ReactDOM.createRoot(document.getElementById('root'));

const divStyle = {
    minWidth: '200px',
    minHeight: '100px'
}

root.render(
    <PrimeReactProvider>

        <StepsMenu/>
        <CustomersDataTable/>

        <h1>Flex Shrink</h1>
        <div className="flex">
            <div className="flex-1 h-4rem bg-primary font-bold text-center p-4 border-round"><i className="pi pi-user"/></div>
            <div className="flex-1 h-4rem bg-primary font-bold text-center p-4 border-round mx-4"><i className="pi pi-users"/></div>
            <div className="flex-1 h-4rem bg-primary font-bold text-center p-4 border-round"><i className="pi pi-briefcase"/></div>
        </div>

        <h1>Flex Wrap</h1>
        <div className="flex flex-wrap">
            <div className="flex align-items-center justify-content-center bg-primary font-bold m-2 border-round" style={divStyle}>1</div>
            <div className="flex align-items-center justify-content-center bg-primary font-bold m-2 border-round" style={divStyle}>2</div>
            <div className="flex align-items-center justify-content-center bg-primary font-bold m-2 border-round" style={divStyle}>3</div>
            <div className="flex align-items-center justify-content-center bg-primary font-bold m-2 border-round" style={divStyle}>4</div>
            <div className="flex align-items-center justify-content-center bg-primary font-bold m-2 border-round" style={divStyle}>5</div>
            <div className="flex align-items-center justify-content-center bg-primary font-bold m-2 border-round" style={divStyle}>6</div>
            <div className="flex align-items-center justify-content-center bg-primary font-bold m-2 border-round" style={divStyle}>7</div>
            <div className="flex align-items-center justify-content-center bg-primary font-bold m-2 border-round" style={divStyle}>8</div>
        </div>

        <h1>Text Editor with button</h1>
        <MegaButton/>
        <Button label="Submit" />

        <h1>Blocking Section</h1>
        <BlockSection/>

    </PrimeReactProvider>
);