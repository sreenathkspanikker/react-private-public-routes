import React, { useEffect, useState } from 'react'
import { Navbar } from 'react-bootstrap'
import { logout, isLogin } from '../middleware/auth';
import { Link } from 'react-router-dom';

const Header = props => {
    const [state, setState] = useState(false)

    useEffect(() => setState(isLogin()), [props])

    const handleLogout = () => {
        logout();
        setState(false)
    }

    return (
        <header>
            <Navbar>
                <Link className="navbar-brand" to="/home">Brand Logo</Link>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Signed in as: <a href="#login">Admin</a>
                    </Navbar.Text>
                    <Navbar.Text className="ml-3">
                        {state && <Link onClick={() => handleLogout()} to="/">Logout</Link>}
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
        </header>
    )
}

export default Header