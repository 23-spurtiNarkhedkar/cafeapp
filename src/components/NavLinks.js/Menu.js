import React, { useEffect, useMemo, useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import Item from './Item'
import data from './Data'
import '../styles/Btncss.css'

function Menu() {
  const [selectedCategory, setSelectedCategory] = useState(data)

  const getFilteredList = ((currItem) => {
    const res = data.filter((currData) => {
      return currData.category === currItem;
    });
    setSelectedCategory(res);
  })

  return (
    <div>
      <h1 className='text-center'>Menu</h1>
      <Row >
        <Col lg={2} xs={12} ><Button className='m-1' onClick={(e) => setSelectedCategory(data)}>All</Button></Col>
        {/* <ButtonCat category={catarr}/> */}
        <Col lg={2} xs={12} ><Button className='m-1' onClick={(e) => getFilteredList("Fast Food")}>Fast Food</Button></Col>
        <Col lg={2} xs={12} ><Button className='m-1' onClick={(e) => getFilteredList("Coffee")}>Coffee</Button></Col>
        <Col lg={2} xs={12} ><Button className='m-1' onClick={(e) => getFilteredList("Dessert")}>Dessert</Button></Col>
        <Col lg={2} xs={12} ><Button className='m-1' onClick={(e) => getFilteredList("Ice Cream")}>Ice Cream</Button></Col>
      </Row>

      <Row>
        {selectedCategory.map((element, index) => {
          return (
            <Item {...element} key={index} />
          )
        })}
      </Row>
    </div>
  )
}

export default Menu