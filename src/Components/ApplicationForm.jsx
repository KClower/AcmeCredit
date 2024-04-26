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
    phoneNumber: yup.string()
        .matches(/\d{3}[\-]\d{3}[\-]\d{4}/, { message: "Must be a valid phone number xxx-xxx-xxxx" })
        .required("Must include phone number"),
    loanType: yup.string().required("Please choose a Option"),
    loanAmount: yup.string()
        .matches(/[0-9]*[.,]?\.[0-9][0-9]/, { message: "Please provide a valid Amount" })
        .required("Must include an amount")
})

export default function ApplicationForm(props) {
    const { submitHandler, initialData } = props
    console.log("initialData", initialData)


    const [formState, setFormState] = useState(() => {
        if (initialData === undefined) {
            return ({
                name: "",
                email: "",
                phoneNumber: "",
                loanType: "",
                loanAmount: ""
            }
            )
        }
        else {
            return (initialData)
        }
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

    const formSubmit = (e) => {
        e.preventDefault()
        submitHandler(formState)
    }


    const inputChange = e => {
        e.persist();
        validate(e)
        console.log("input changed!", e.target.value)
        setFormState({ ...formState, [e.target.name]: e.target.value });

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

    console.log(formState)
    return (
        <Form onSubmit={formSubmit}>
            <FormGroup>
                <Label for="name">
                    Name
                </Label>
                <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formState.name}
                    onChange={inputChange}
                />
                {errorState.name.length > 0 ? (<p className="text-danger">{errorState.name}</p>) : null}
            </FormGroup>
            <FormGroup>
                <Label for="email">
                    E-mail
                </Label>
                <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={inputChange}
                />
                {errorState.email.length > 0 ? (<p className="text-danger">{errorState.email}</p>) : null}
            </FormGroup>
            <FormGroup>
                <Label for="phoneNumber">
                    Phone Number
                </Label>
                <Input
                    id="phoneNumber"
                    name="phoneNumber"
                    type="tele"
                    placeholder="Ex. 867-530-9999"
                    value={formState.phoneNumber}
                    onChange={inputChange}
                />
                {errorState.phoneNumber.length > 0 ? (<p className="text-danger">{errorState.phoneNumber}</p>) : null}
            </FormGroup>
            <FormGroup>
                <Label for="loanType">
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
                </Input>
                {errorState.loanType.length > 0 ? (<p className="text-danger">{errorState.loanType}</p>) : null}
            </FormGroup>
            <FormGroup>
                <Label for="loanAmount">
                    Loan Amount
                </Label>
                <Input
                    id="loanAmount"
                    name="loanAmount"
                    type="text"
                    inputMode="numeric"
                    value={formState.loanAmount}
                    onChange={inputChange}
                />
                {errorState.loanAmount.length > 0 ? (<p className="text-danger">{errorState.loanAmount}</p>) : null}
            </FormGroup>
            <Button disabled={buttonDisabled}>
                Submit
            </Button>
        </Form>
    )








}