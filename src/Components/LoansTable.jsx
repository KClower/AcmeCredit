
import { Table } from 'reactstrap';

export default function LoansTable(props) {

    const { tableCols, dataSourse } = props

    const clickHandler = () => {

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
                                <button className="btn btn-success">Edit</button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </Table>
    )
}