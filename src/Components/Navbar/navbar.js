import React from 'react';
import './navbar.css'
import { Container, Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export const CustomNavbar = () => {
  return (
    <section>
        <Navbar expand={'lg'} className='navbar-wrap' >
            {/* <Container> */}
                <Navbar.Brand expand={'lg'}>
                    <span className='logo'>LOGO</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link>Home</Nav.Link>
                        <Nav.Link>Services</Nav.Link>
                        <Nav.Link>About</Nav.Link>
                        <Nav.Link>FAQ</Nav.Link>
                        <Nav.Link className='open-time-hide'>
                            <div className='open-time'>
                                <span className='separated-line-i'></span>
                                We're Available
                                <span className='green-circle'></span>
                                11:12 am
                                <span className='separated-line-ii'></span>
                            </div>
                        </Nav.Link>
                        <Nav.Link className='quote-box'>
                            Get a free quote
                        </Nav.Link>
                        <Nav.Link className='nav-phone'>
                            1300 00 000
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            {/* </Container> */}
        </Navbar>
    </section>
  )
}

export default CustomNavbar;
