import React, { useEffect, useMemo, useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import Item from './Item'
import data from './Data'
import ButtonCat from './ButtonCat'

function Menu() {
  const [selectedCategory, setSelectedCategory] = useState(data)

  // / Add default value on page load
  // useEffect(() => {
  //   setCatList(data);
  // }, []);

  const getFilteredList = ((currItem) => {
    const res = data.filter((currData) => {
      return currData.category === currItem;
    });
    setSelectedCategory(res);
  })


  // const filteredlist = useMemo(getFilteredList, [selectedCategory, catList])

  return (
    <div>
      <h1 className='text-center'>Menu</h1>
      <Row>
        <Col lg={2} xs={12}><Button className=' btn m-2 lg ' onClick={(e) => setSelectedCategory(data)}>All</Button></Col>
        {/* <ButtonCat category={catarr}/> */}
        <Col lg={2} xs={12}><Button className=' btn m-2 lg ' onClick={(e) => getFilteredList("Fast Food")}>Fast Food</Button></Col>
        <Col lg={2} xs={12}><Button className=' btn m-2 lg ' onClick={(e) => getFilteredList("Coffee")}>Coffee</Button></Col>
        <Col lg={2} xs={12}><Button className=' btn m-2 lg ' onClick={(e) => getFilteredList("Dessert")}>Dessert</Button></Col>
        <Col lg={2} xs={12}><Button className=' btn m-2 lg ' onClick={(e) => getFilteredList("Ice Cream")}>Ice Cream</Button></Col>
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