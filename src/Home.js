import React from 'react';
import './Home.css';
import Product from './Product';



function Home() {
  return (
    <div className='home'>
      <div className='home-container'>
        {/* <img className='homeimage' src='amazonoriginal.jpg' alt='' /> */}

        <div className='home_row'>
          <Product id = '1' title='The Blue Ocean Strategy' price={11.99} rating={3} image = 'book.jpg'/>
          <Product id  = '2' title='NEW LAUNCHED 5G GALAXY with low price' price={100.99} rating={3} image = 'mobile1.jpg' />

        </div>
        <div className='home_row'>
          <Product id='3' title='BRANDED  BLUETOOTH headphone with wireless ' price={50.49} rating={3} image = 'headphone1.jpg'/>
          <Product id = '4' title='LAVA smartwatch with pulse analysing' price={20.99} rating={3} image = 'smartwatch.jpg'/>

          <Product id = '5' title='NEW BRANDED Headphone with advanced features' price={49.99} rating={3} image = 'headphone2.jpg'/>

        </div>
        <div className='home_row'>
        <Product id='6' title='SAMSUNG LED new launch FEB 2023|low price high quality' price={199.99} rating={3} image = 'ledtv.jpg'/>

        </div>
      </div>
    </div>
  )
}

export default Home
