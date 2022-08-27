import React, { useState } from 'react'
import { Button, Row, Col ,Form, Container} from 'react-bootstrap'
import SignUp from './SignUp'

function LogIn() {
    const [signin, setSignin] = useState('SignUp')

    return (
        <Container className="my-3 mt-md-5 jusify-content-center">
            <Row>
                <Col md={6}>
                    <div className='text-center'>
                        <h3>Hello,<br />Welcome to Hugo Cafeteria !</h3>
                    </div>
                    <div>
                        <h5>If not signed in go to sign up page</h5>
                        {/* <Button onClick={(e) => setSignin('LogIn')}>{signin}</Button> */}
                    </div>
                </Col>
                <Col md={6}>
                    <Form>
                        <Row className="mb-3">
                            <Form.Group as={Col}  md={6} controlId="formGridName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="Name" placeholder="Enter Name" />
                            </Form.Group>

                            <Form.Group as={Col} md={6} controlId="formGridEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                        </Row>
                        
                        <Row className="mb-3">
                            <Form.Group as={Col}  md={6} controlId="formGridCity">
                                <Form.Label>City</Form.Label>
                                <Form.Control />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridZip">
                                <Form.Label>Zip</Form.Label>
                                <Form.Control />
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3"  md={6} id="formGridCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
            {signin==='LogIn'?<LogIn/>:<SignUp/>}
        </Container>
    )
}

export default LogIn