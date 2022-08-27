import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap';

function Epistek() {

    const [user, setUser] = useState([]);

    const getUsers = async () => {
        const response = await fetch('https://api.github.com/users');
        setUser(await response.json());
    }
    useEffect(() => {
        getUsers();
    }, [])
    return (
        <div>
            <Container>

                <h1 className='text-center my-3'>Github Users Data</h1>
                <Row>


                    {user.map((ele) => {
                        return (
                            <Col>
                                <Card style={{ width: '18rem' }} className='my-2'>
                                    <Card.Img variant="top" src={ele.avatar_url} style={{ height: '10rem' }} />
                                    <Card.Body>
                                        <Card.Title>{ele.login}</Card.Title>
                                        <Card.Title>{ele.email}</Card.Title>
                                        <Card.Title>Followers : {ele.followers_url}</Card.Title>
                                        <Card.Title>{ele.following_url}</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>
                                        {/* <Button variant="primary">Go somewhere</Button> */}
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </div>
    )
}

export default Epistek