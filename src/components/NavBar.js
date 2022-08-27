import React, { useState } from 'react'
import { Navbar, Container, Nav, Button, Form, NavLink } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import LogIn from './LogIn'
import './NavBar.css'
import SignUp from './SignUp'

function NavBar() {
    // const [sign, setSign] = useState(null)

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
                              {/* <NavLink className='text-light' href="/log">Log</NavLink> */}
                              {/* <NavLink className='text-light' href="/githubUsers">Github Users</NavLink> */}
                              <NavLink className='text-light' href="/search">Search</NavLink>
                            </Nav>
                            <div className='mx-3 btnhover' >
                                {/* <Button className='btnSign mx-2' href='/LogIn'>LogIn</Button>  */}
                                {/* <Button className='btnSign mx-2' style={{ backgroundColor: 'transparent', borderColor: 'black' }}>
                                    <NavLink to='/LogSign'>
                                        SignIn/Up
                                    </NavLink>
                                </Button> */}
                                {/* <Button className='btnSign' onClick={(e) => setSign("LogIn")}>LogIn</Button>  */}
                                {/* <Button className='btnSign mx-2' onClick={(e) => setSign("SignUp")}>SignUp</Button>  */}
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

// <Navbar expand="lg" sticky='top' >
//                 <Container fluid>
//                     <Navbar.Brand className='text-light' href="/">Hugo Cafeteria</Navbar.Brand>
//                     <Navbar.Toggle aria-controls="basic-navbar-nav " style={{ backgroundColor: '#FFC18E' }} />
//                     <Navbar.Collapse className='justify-content-end'>
//                         <div className='d-flex'>
//                             <Nav className="me-auto "  >
//                                 <Link className='text-light' to="/home">Home</Link>
//                                 <Link className='text-light' to="/menu">Menu</Link>
//                                 <Link className='text-light' to="/aboutUs">About Us</Link>
//                                 <Link className='text-light' to="/contactUs">Contact Us</Link>
//                             </Nav>
//                             <div className='mx-3 btnhover' >
//                                 {/* <Button className='btnSign mx-2' href='/LogIn'>LogIn</Button>  */}
//                                 <Button className='btnSign mx-2' style={{ backgroundColor: 'transparent', borderColor: 'black' }}>
//                                     <Link to='/LogSign'>
//                                         SignIn/Up
//                                     </Link>
//                                 </Button>
//                                 {/* <Button className='btnSign' onClick={(e) => setSign("LogIn")}>LogIn</Button>  */}
//                                 {/* <Button className='btnSign mx-2' onClick={(e) => setSign("SignUp")}>SignUp</Button>  */}
//                             </div>
//                         </div>
//                     </Navbar.Collapse>
//                 </Container>
//             </Navbar>