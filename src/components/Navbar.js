import React from 'react';
import Logo from '../images/logo.png'
import './styles/Navbar.css';

class Navbar extends React.Component {
    render() {
        return(
            <div className="navbar navbar-light bg-light">
                <div className="navbar-container__img">
                    <img className="navbar__img" src={Logo} alt="logo"/>
                </div>
                <div className="navbar-menu">
                    <ul>
                        <li>Option</li>
                        <li>Option</li>
                    </ul>
                </div>

            </div>
        )
    }
}

export default Navbar;