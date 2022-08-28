import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';
import FilterFuncData from './FilterFuncData';

function Filterfunc() {
    const [data, setData] = useState(FilterFuncData);

    const FilteredList = ((currItem) => {
        const res = FilterFuncData.filter((currData) => {
            return currData.category === currItem;
        });
        setData(res);
    })

    const [search, setSearch] = useState("");   
    return (
        <div>
            <Container className='mt-4'>
                <input className='mx-auto d-block' type='text' placeholder='search' onChange={(event) => { setSearch(event.target.value); }} />
                {data.filter((val) => {
                    if (search == "") {
                        return val;
                    }
                    else if (val.category.toLocaleLowerCase().includes(search.toLocaleLowerCase())) {
                        return val;
                    }
                }).map((ele) => {
                    return (
                        <div className='text-center' key={ele.id}>
                            {ele.category}

                        </div>
                    )
                })}
                <Row className='my-3'>
                    <Col >
                        <Button onClick={() => setData(FilterFuncData)}> All </Button>
                        </Col>
                    <Col>
                        <Button onClick={() => FilteredList('Women')}> Women </Button>
                        </Col>
                    <Col>
                        <Button onClick={() => FilteredList('Men')}> Men </Button>
                        </Col>
                    <Col >
                        <Button onClick={() => FilteredList('Kids')}> Kids </Button>
                        </Col>
                    <Col>
                        <Button onClick={() => FilteredList('Footwear')}> Footwear </Button>
                        </Col>
                    {/* <Col md={3}>
                        <Button onClick={() => { setCat('Women') }}> Women </Button></Col>
                    <Col md={3}>
                        <Button onClick={() => { setCat('Men') }}> Men </Button></Col>
                    <Col md={3}>
                        <Button onClick={() => { setCat('Kids') }}> Kids </Button></Col>
                    <Col md={3}>
                        <Button onClick={() => { setCat('Footwear') }}> Footwear </Button></Col> */}
                </Row>
            </Container>
            <Row className='my-3'>
                {data.map((ele) => {
                    return (
                        <Col md={4} >
                            <div className='text-center border border-secondary  m-2'>
                                <h1>
                                    {ele.title}
                                </h1>
                                {ele.price}<br></br>
                                <hr />
                                {ele.category}
                            </div>
                        </Col>
                    )
                })}
            </Row>
        </div>
    )
}

export default Filterfunc