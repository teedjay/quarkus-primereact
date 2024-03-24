import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

function CustomersDataTable(props) {

    const [customers, setCustomers] = useState();

    useEffect(() => { fetchCustomers() }, [])

    async function fetchCustomers(){
        let api = await fetch('http://localhost:8080/api/customers')
        let json = await api.json()
        setCustomers(json)
    }

    return (
        <div>
            <h1>Customers</h1>
            <DataTable value={customers}>
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
            </DataTable>
        </div>
    );

}

export default CustomersDataTable;