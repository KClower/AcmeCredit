import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { Table } from 'reactstrap';

export default function LoansTable(props) {
    console.log(props)
    const { tableCols, dataSourse } = props
    const history = useHistory()

    const clickHandler = (loan) => {
        history.push(`/EditLoan/${loan.id}`, loan)

    }


    return (
        <Table className='shadow'
        >
            <thead>
                <tr>
                    {tableCols.map(colname => {
                        return (
                            <th>{colname}</th>
                        )
                    })}
                </tr>
            </thead>
            <tbody>
                {dataSourse.map(rowData => {
                    return (
                        <tr>
                            <td scope="row">
                                {rowData.name}
                            </td>
                            <td>
                                {rowData.email}
                            </td>
                            <td>
                                {rowData.phoneNumber}
                            </td>
                            <td>
                                {rowData.loanType}
                            </td>
                            <td>
                                ${rowData.loanAmount}
                            </td>
                            <td>
                                <button className="btn btn-success" onClick={() => clickHandler(rowData)}>Edit</button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </Table>
    )
}