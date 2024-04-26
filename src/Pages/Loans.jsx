
import LoansTable from "../Components/LoansTable"


export default function Loans(props) {
    const { loanData } = props


    const columns = ["Name", "E-mail", "Phone #", "Type of Loan", "Loan Amount", ""]


    return (
        <div className="container mt-5">
            <h2>Loans</h2>

            <LoansTable
                tableCols={columns}
                dataSourse={loanData}

            />
        </div>
    )
}