
import {
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom'

export default function Header() {

    return (
        <div>
            <Nav className="d-flex align-items-center ps-3 py-3 bg-success text-white">
                <h1 className="fs-3 mb-0">AcmeCredit</h1>
                <NavItem className="ps-3">
                    <NavLink tag={RRNavLink} to="/" className="link-light">
                        Loans
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={RRNavLink} to="/LoanApplication" className="link-light">
                        Loan Application
                    </NavLink>
                </NavItem>
            </Nav>
        </div>
    )

}