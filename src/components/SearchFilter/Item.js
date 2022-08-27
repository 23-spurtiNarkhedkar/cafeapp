// import React from "react";
import { Button, Card, Col, Row } from 'react-bootstrap'

import React, { useState } from 'react'

function Item({ price, category, desc, src, name }) {

    const[readmore,setReadMore]=useState(false)
    return (
        <>
            <Col md={4} className='p-3'>
                <Card >
                    {/* style={{ height: '400px' }} */}
                    <Card.Img variant="top" src={src} style={{ height: '300px' }} />
                    <Card.Body>
                        <Card.Title>{price}</Card.Title>
                        <Card.Title className='bold'>
                            {name}
                            {/* Rs.{cat.price.slice(0, 30)} */}
                        </Card.Title>
                        <Card.Text>
                            {category}
                            {/* {cat.catName.charAt(0).toLocaleUpperCase() + cat.catName.slice(1)} */}
                        </Card.Text>
                        <div>
                            {readmore?desc:desc.slice(0,40)}
                            {/* {desc.slice(0, 40)} */}
                            </div>
                            {/* while using toggle use !readmore as it will toggle as u want... */}
                        <button onClick={(e)=>setReadMore(!readmore)}>{readmore?"Show Less":"...Read More"}</button>
                    </Card.Body>
                </Card>
            </Col>
        </>
    )
}

export default Item