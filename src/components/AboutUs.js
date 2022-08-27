import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import './styles/AbtUs.css'

function AboutUs() {
  return (
    <div>
      <Container className='text-center pt-4'>
        <h2>Best Organic Coffee with delight other options...</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta accusantium modi placeat expedita dolore culpa aperiam, ad quas ipsa iste sed quia quae corrupti est incidunt consequatur facilis pariatur sequi?</p>
      </Container>
      <div className='mainAbt'>
        <Container className="my-4 mt-5 abtUs">
        </Container>
      </div>
    </div>
  )
}

export default AboutUs