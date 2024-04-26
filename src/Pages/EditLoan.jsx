
import ApplicationForm from "../Components/ApplicationForm"

export default function EditLoan(props) {
    const { updateLoan, history } = props

    const loanInfo = history.location.state
    const formSubmit = (formData) => {
        updateLoan(formData)
        history.push("/")
    }
    return (
        <div className="container mt-5" style={{
            width: "60%"
        }}>
            <h2 className="pb-3">Edit Loan</h2>
            <ApplicationForm initialData={loanInfo} submitHandler={formSubmit} />
        </div>
    )
}