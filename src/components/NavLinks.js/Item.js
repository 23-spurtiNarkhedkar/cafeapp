// import React from "react";
import { Button, Card, Col, Row } from 'react-bootstrap'
import '../styles/Cards.css'

import React, { useState } from 'react'

function Item({ price, category, desc, src, name }) {

    const[readmore,setReadMore]=useState(false)
    return (
        <>
            <Col md={4} className='p-3'>
                <Card  style={{height:'35rem'}}>
                    <Card.Img variant="top" src={src} style={{ height: '300px' }} />
                    <Card.Body>
                        <Card.Title>Rs. {price} /-</Card.Title>
                        <Card.Title className='bold'>
                            {name}
                        </Card.Title>
                        <Card.Text>
                            {category}
                        </Card.Text>
                        <div>
                            {readmore?desc:desc.slice(0,30)}
                            </div>
                        <Button onClick={(e)=>setReadMore(!readmore)}>{readmore?"Show Less":"...Read More"}</Button>
                    </Card.Body>
                </Card>
            </Col>
        </>
    )
}

export default Item