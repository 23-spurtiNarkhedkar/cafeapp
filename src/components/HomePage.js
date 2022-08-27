import React from 'react'
import { Container } from 'react-bootstrap'
import CardItem from './CardItem'
import MapCarousel from './MapCarousel'
import './NavBar.css'
import Menu from './NavLinks.js/Menu'
import './styles/Home.css';

function HomePage() {
  const seasonals = [
    {
      id: 1,
      title: "Monsoon Delight",
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6EOi3E7k-_vEAPqo65MzoL06v5G6OSXnAZw&usqp=CAU'
    },
    {
      id: 2,
      title: "Scoop to Chreish UR MOOD",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI1GvRgF7iVRHvU25u9ofZGojlU0Z7yBISMw&usqp=CAU"
    }
  ]


  return (
    <div>
      <MapCarousel />
      {/* <CardItem /> */}
      <Container className='my-3 '>
        <Menu />
      </Container>
      
      {seasonals.map((element) => {
        // "#513252"
        return (
          <Container className='seasonsal' fluid  key={element.id}>
            <div className='container' style={{ display: 'grid', placeItems: 'center' }}>
              <h1 className='text-center bold text-light my-3 '>{element.title}</h1>
              <img className='seasonimg my-3' src={element.src} alt='...'  />
            </div>
          </Container>
        )
      })}
    </div>
  )
}

export default HomePage