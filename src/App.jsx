import { useState } from 'react';
import { Route } from 'react-router-dom';
import LoanApplication from './Pages/LoanApplication';
import Loans from './Pages/Loans';
import Header from './Components/Header';
import EditLoan from './Pages/EditLoan';

let id = 0
const getId = () => {
  return id += 1
}

const initialLoanState = [{
  id: getId(),
  name: "John Doe",
  email: "JohnDoe@gmail.com",
  phoneNumber: "555-555-5555",
  loanType: "Business",
  loanAmount: "5000.00"
},
{
  id: getId(),
  name: "John Doe",
  email: "JohnDoe@gmail.com",
  phoneNumber: "123-456-7890",
  loanType: "Personal",
  loanAmount: "1500.00"
},
{
  id: getId(),
  name: "John Doe",
  email: "JohnDoe@gmail.com",
  phoneNumber: "555-567-5309",
  loanType: "Consolidation",
  loanAmount: "30000.00"
}]

function App() {

  const [loans, setLoans] = useState(initialLoanState)

  function addLoan(newLoan) {
    setLoans([...loans, { ...newLoan, id: getId() }]);
  }

  function updateLoan(editedLoan) {
    const updatedLoans = loans.map(loan => {
      if (loan.id === editedLoan.id) {
        return { ...editedLoan }
      }
      else { return (loan) }
    })
    setLoans(updatedLoans)
  }


  return (
    <>
      <div>
        <Header />
        <Route exact path="/" render={(routeProps) => <Loans {...routeProps} loanData={loans} />} />
        <Route path="/LoanApplication" render={(routeProps) => <LoanApplication {...routeProps} addLoan={addLoan} />} />
        <Route path="/EditLoan/:loanId" render={(routeProps) => <EditLoan {...routeProps} updateLoan={updateLoan} />} />
      </div>
    </>
  )
}

export default App
