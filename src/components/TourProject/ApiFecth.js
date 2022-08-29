import React, { useEffect, useState } from 'react'
import { Row, Col,Card } from 'react-bootstrap';

function ApiFecth() {

    // as in api we have array so initially the array is empty
    const [user, setUser] = useState([]);

    const getUsers = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/photos");
        // const response = await fetch("http://localhost:8000/userapi");

        // console.log(response);
        // const data=response.json();

        setUser(await response.json());
        // console.log(data);
    }

    useEffect(() => {
        getUsers();
    })

    return (
        <div>ApiFecth

            <h1>name</h1>
            <div className='text-center'>
                <Row>
                    {user.map((ele) => {
                        return (
                            <Col md={4} key={ele.id} >
                                <Card style={{ height:'10rem'}} className=" my-2">
                                    <Row className='m-2'>
                                        <Col class="mx-auto d-block">
                                            <img class="rounded mx-auto d-block" src={ele.url} style={{ width: '100px' }} />
                                        </Col>
                                        <Col>
                                            <h5>{ele.title}</h5>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                        )
                    })}
                </Row>
            </div>
        </div>
    )
}

export default ApiFecth