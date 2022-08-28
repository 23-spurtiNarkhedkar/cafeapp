import React, { useState } from 'react'
import { Navbar, Container, Nav, Button, Form, NavLink } from 'react-bootstrap'
import './NavBar.css'

function NavBar() {
    return (
    <>
            <Navbar expand="lg" sticky='top'>
                <Container fluid>
                    <Navbar.Brand className='text-light' href="/">Hugo Cafeteria</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav " style={{ backgroundColor: '#FFC18E' }} />
                    <Navbar.Collapse className='justify-content-end'>
                        <div className="d-flex">
                            <Nav className="me-auto "  >
                              <NavLink className='text-light' href="/home">Home</NavLink>
                              <NavLink className='text-light' href="/menu">Menu</NavLink>
                              <NavLink className='text-light' href="/aboutUs">About Us</NavLink>
                              <NavLink className='text-light' href="/contactUs">Contact Us</NavLink>
                              <NavLink className='text-light' href="/fetchphoto">DataFetching</NavLink>

                              <NavLink className='text-light' href="/search">Search</NavLink>
                            </Nav>
                            <div className='mx-3 btnhover' >
     </div>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {/* {sign === "LogIn" ? <LogIn /> : <SignUp />} */}
        </>
    )
}

export default NavBar
