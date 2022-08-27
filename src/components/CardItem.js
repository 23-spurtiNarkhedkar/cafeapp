import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import Menu from './NavLinks.js/Menu'
import data from './NavLinks.js/Data'
// import Img from '../Images/a'


function CardItem() {
    const category=[
        {

        }
    ]
    return (
        <div className='container my-3'>
            <h1 className='text-center my-md-5'>Menu</h1>
            <hr/>
            <Menu/>
            {/* <Button  >Coffee</Button> */}
            {/* <Button  >FastFood</Button> */}
            <Row>
                {category.map((cat) => {
                    return <>
                        <Col md={4} className="my-3" key={cat.id}>
                            <Card  style={{height:'400px'}}>
                                <Card.Img variant="top" src={cat.src} style={{height:'200px'}}/>
                                <Card.Body>
                                    <Card.Title>{cat.id}</Card.Title>
                                    {/* <Card.Title className='bold'>Rs.{cat.price.slice(0,30)}</Card.Title> */}
                                    <Card.Text>
                                        {/* {cat.catName.charAt(0).toLocaleUpperCase()+cat.catName.slice(1)} */}
                                    </Card.Text>
                                    {/* <div>{cat.desc.slice(0,40)}</div> */}
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </Card.Footer>
                            </Card>
                        </Col>
                    </>
                })}
            </Row>
        </div>
    )
}

export default CardItem