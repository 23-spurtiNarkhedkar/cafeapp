import React, { useState } from 'react'
import { Button, Row, Col, Form, Container } from 'react-bootstrap'
import LogIn from './LogIn'

function SignUp() {
    const [signin, setSignin] = useState('SignUp')

    const [fname, setfname] = useState('')
    const [lname, setlname] = useState('')
    const [email, setemail] = useState('')

    const arr = [
        {
            set: "setfname",
            type: "fname",
            placehold: "Enter first name",
            text: "First Name"
        },
        {
            set: "setlname",
            type: "lname",
            placehold: "Enter last name",
            text: "last Name"
        },
        {
            set: "setemail",
            type: "email",
            placehold: "Enter email",
            text: "Enter email"
        }
    ]
    return (
        <div className='container my-3 p-md-5 '>
            <h1 className='my-5 text-center'>Hugo Cafeteria</h1>
            <Container className="my-3 mt-md-5 jusify-content-center " >
                <Row style={{ boxShadow: '5px 10px grey' }}>
                    <Col md={6} style={{ backgroundColor: "#7A4069", color: "white  " ,fontFamily:'serif'}} className="pt-md-5">
                        <div className='text-center'>
                            <h3>Hello,<br />Welcome to Hugo Cafeteria !</h3>
                        </div>
                        <div className='align-self-center mx-5 my-3 mt-5 text-center pt-md-5'>
                            <h5>
                                {/* {signin === 'SignUp' ? "If already signed in go to login page" : "Not a user? Go to SignUp page"} */}
                            </h5>
                            <Button className='justify-content-center mx-5' onClick={(e)=>setSignin(`{signin === 'SignUp' ? "SignUp" : "LogIn"}`)}>{signin === 'SignUp' ? "LogIn" : "SignUp"}</Button>
                        </div>
                    </Col>
                   
                    <Col md={6} className="p-md-3 align-self-center " style={{ color: "#513252", backgroundColor: "#FFC18E" }}>
                       <div className='align-self-center mx-md-5 px-lg-3'>
                        <Form className='justify-content-center  my-3 mt-4 p-md-3'>

                            {arr.map((ele) => {
                                return (
                                    <Form.Group as={Col} md={12} controlId="formGridName" >
                                        <Form.Label onChange={(e) => ele.set(e.target.value)} value={ele.val}>{ele.text}</Form.Label>
                                        <Form.Control type={ele.type} placeholder={ele.placehold} />
                                    </Form.Group>
                                )
                            })}

                            <Form.Group className="mb-3 my-3" md={6} id="formGridCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>

                            <Button type='submit'>{signin}</Button>
                        </Form>
                        </div>
                    </Col>

                </Row>
                 {signin === 'SignUp' ? <SignUp /> : <LogIn />}
                {/* {signin === 'LogIn' ? <LogIn /> : <SignUp />} */}
            </Container>
        </div>
    )
}

export default SignUp