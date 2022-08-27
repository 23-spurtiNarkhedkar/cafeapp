import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap';

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

                    {/* {user.map((ele)=>{
                        return(
                            <Col key={ele.id}>
                            <h1> {ele.name}</h1>
                            <h3>{ele.clg}</h3>
                            <h3>{ele.age}</h3>
                            </Col>
                        )
                    })} */}
                        {user.map((ele) => {
                            return (
                                <Col md={4} key={ele.id}>
                                    <h3>{ele.albumID}</h3>
                                    <h3>{ele.title}</h3>
                                    <img src={ele.url}  style={{width:'100px'}}/>
                                </Col>
                            )
                        })}
                </Row>
            </div>
        </div>
    )
}

export default ApiFecth