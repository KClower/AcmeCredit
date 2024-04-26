import React, { useState, useEffect } from "react";
import * as yup from "yup";
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap';

const formSchema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup.string()
        .email("Must be a valid email address")
        .required("Must include email address"),
    phone: yup.number("Must be a valid phone number")
        .required("Must include phone number"),
    amount: yup.number().required("Must include an amount")
})

export default function LoanApplication() {

    const [formState, setFormState] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        loanAmount: ""
    });

    // const [buttonDisabled, setButtonDisabled] = useState(true);

    // useEffect(() => {
    //     formSchema.isValid(formState).then((valid) => {
    //         setButtonDisabled(!valid);
    //     })
    // }, [formState])

    // const [errorState, setErrorState] = useState({
    //     name: "",
    //     email: "",
    //     phoneNumber: "",
    //     loanAmount: ""
    // });

    const inputChange = (event) => {
        // event.persist();
        console.log("input changed", event.target.value)
        // let value = event.target.type === "numberz" ? event.target.numberz : event.target.value;
        setFormState({ ...formState, [event.target.name]: value });
    }

    return (
        <div className="container mt-5" style={{
            width: "60%"
        }}>
            <h2 className="pb-3">Loan Application</h2>
            <Form>
                <FormGroup>
                    <Label htmlFor="name">
                        Name
                    </Label>
                    <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formState.name}
                        onChange={inputChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="email">
                        E-mail
                    </Label>
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formState.email}
                        onChange={inputChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="phoneNumber">
                        Phone Number
                    </Label>
                    <Input
                        id="phoneNumber"
                        name="phoneNumber"
                        type="text"
                        value={formState.phoneNumber}
                        onChange={inputChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="loanAmount">
                        Loan Amount
                    </Label>
                    <Input
                        id="loanAmount"
                        name="loanAmount"
                        type="text"
                        value={formState.loanAmount}
                        step="0.01"
                        onChange={inputChange}
                    />
                </FormGroup>
                <Button>
                    Submit
                </Button>
            </Form>
        </div>
    )

}