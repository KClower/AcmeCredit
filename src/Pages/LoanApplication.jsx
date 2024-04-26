import React, { useState, useEffect } from "react";
import * as yup from "yup";
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button,
} from 'reactstrap';

const formSchema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup.string()
        .email("Must be a valid email address")
        .required("Must include email address"),
    phoneNumber: yup.tele("Must be a valid phone number xxx-xxx-xxxx")
        .required("Must include phone number"),
    loanType: yup.string().required("Please choose a Option"),
    loanAmount: yup.number().required("Must include an amount")
})

export default function LoanApplication() {

    const [formState, setFormState] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        loanType: "",
        loanAmount: ""
    });

    const [buttonDisabled, setButtonDisabled] = useState(true);

    useEffect(() => {
        formSchema.isValid(formState).then((valid) => {
            setButtonDisabled(!valid);
        })
    }, [formState])

    const [errorState, setErrorState] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        loanType: "",
        loanAmount: ""
    });

    const formSubmit = e => {
        e.preventrDefault();
        console.log("Form Submitted!");
        axios.post('http://reqres.in/api/users', formState)
            .then(response => console.log(response))
            .catch(err => console.log(err))
    }

    const validate = (e) => {
        yup.reach(formSchema, e.target.name).validate(e.target.value)
            .then(valid => {
                setErrorState({
                    ...errorState, [e.target.name]: ""
                })
            })
            .catch(err => {
                console.log(err.errors)
                setErrorState({
                    ...errorState, [e.target.name]: err.errors[0]
                })
            })
    }

    const inputChange = e => {
        e.persist();
        validate(e)
        console.log("input changed!", e.target.value)
        setFormState({ ...formState, [e.target.name]: e.target.value });

    }

    return (
        <div className="container mt-5" style={{
            width: "60%"
        }}>
            <h2 className="pb-3">Loan Application</h2>
            <Form onSubmit={formSubmit}>
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
                    {errorState.name.length > 0 ? (<p className="error">{errorState.name}</p>) : null}
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
                    {errorState.email.length > 0 ? (<p className="error">{errorState.email}</p>) : null}
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="phoneNumber">
                        Phone Number
                    </Label>
                    <Input
                        id="phoneNumber"
                        name="phoneNumber"
                        type="tele"
                        value={formState.phoneNumber}
                        onChange={inputChange}
                    />
                    {errorState.phoneNumber.length > 0 ? (<p className="error">{errorState.phoneNumber}</p>) : null}
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="loanType">
                        Type of Loan
                    </Label>
                    <Input
                        id="loanType"
                        name="loanType"
                        type="select"
                        value={formState.loanType}
                        onChange={inputChange}
                    >
                        <option value="">-- Please Choose an Option --</option>
                        <option value="Personal">Personal</option>
                        <option value="Business">Business</option>
                        <option value="Consolidation">Consolidation</option>
                        {errorState.loanType.length > 0 ? (<p className="error">{errorState.loanType}</p>) : null}
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="loanAmount">
                        Loan Amount
                    </Label>
                    <Input
                        id="loanAmount"
                        name="loanAmount"
                        type="numberz"
                        step="0.01"
                        value={formState.loanAmount}
                        onChange={inputChange}
                    />
                    {errorState.loanAmount.length > 0 ? (<p className="error">{errorState.loanAmount}</p>) : null}
                </FormGroup>
                <Button disabled={buttonDisabled}>
                    Submit
                </Button>
            </Form>
        </div>
    )

}