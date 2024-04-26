
import React, { useState } from 'react';
import LoansTable from "../Components/LoansTable"


export default function Loans() {

    // const [personsInfo, setPersonsInfo] = ({
    //     name: "",
    //     email: "",
    //     phoneNumber: "",
    //     loanAmount: ""
    // })

    const columns = ["First Name", "E-mail", "Phone Number", "Loan Amount", ""]
    const data = [{
        id: "1",
        name: "John Doe",
        email: "JohnDoe@gmail.com",
        phoneNumber: "555-555-5555",
        loanAmount: "5000.00"
    },
    {
        id: "2",
        name: "John Doe",
        email: "JohnDoe@gmail.com",
        phoneNumber: "123-456-7890",
        loanAmount: "1500.00"
    },
    {
        id: "3",
        name: "John Doe",
        email: "JohnDoe@gmail.com",
        phoneNumber: "555-567-5309",
        loanAmount: "30000.00"
    }]

    return (
        <div className="container mt-5">
            <h2>Loans</h2>

            <LoansTable
                tableCols={columns}
                dataSourse={data}

            />
        </div>
    )
}