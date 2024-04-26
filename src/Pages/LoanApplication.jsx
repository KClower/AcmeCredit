import ApplicationForm from "../Components/ApplicationForm";



export default function LoanApplication(props) {
    const { history, addLoan } = props

    const formSubmit = formData => {

        addLoan(formData)
        history.push('/')
        console.log("Form Submitted!");

    }

    return (
        <div className="container mt-5" style={{
            width: "60%"
        }}>
            <h2 className="pb-3">Loan Application</h2>
            <ApplicationForm submitHandler={formSubmit} />
        </div>
    )

}