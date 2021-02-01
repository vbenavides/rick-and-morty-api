import React from 'react';
// import Footer from './Footer.js';
// import Navbar from './Navbar.js';

function Layout(props) {
    return (
        <React.Fragment>
            {/* <Navbar /> */}
            {props.children}
            {/* <Footer /> */}
        </React.Fragment>
    )
}

export default Layout;