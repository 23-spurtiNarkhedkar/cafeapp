import React, { useEffect, useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import './NavBar.css';

function Log() {
    const [count,setCount]=useState(0);

    useEffect(()=>{
        document.title=`${count}`
    })
    return (
        <div className='MainFrom' style={{height:"100%"}}>
            <Container className='LogMainForm'>
                <div className='text-center'>
                    <h2>Hugo Cafeteria Login Form</h2>
                    <div>
                        <h4>Fill out the form below to login</h4>
                    </div>
                </div>
                <hr />
                <Container className='inputGrp'>
                    <label for="inputPassword5" class="form-label">Password</label>
                    <input type="password" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock" />
                    <div id="passwordHelpBlock" class="form-text">
                        Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
                    </div>
                </Container>
                <Button onClick={()=>{
                    setCount(prevC=>prevC+1)
                }}>click me</Button>
                {count}
            </Container>
        </div>
    )
}

export default Log