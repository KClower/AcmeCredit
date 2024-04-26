import { Route } from 'react-router-dom';
import LoanApplication from './Pages/LoanApplication';
import Loans from './Pages/Loans';
import Header from './Components/Header';


function App() {


  return (
    <>
      <div>
        <Header />
        <Route exact path="/" component={Loans} />
        <Route path="/LoanApplication" component={LoanApplication} />
      </div>
    </>
  )
}

export default App
