import React from 'react'
import Icon1 from "./icon1.png";
import Icon2 from "./icon2.png";
import Icon3 from "./icon3.png";
import Icon4 from "./icon4.png";
import './Section4.css'
const Section4 = () => {
  return (
    <div className='section4'>
      <header className='header3'>What We Can Do For You</header>
       <p className='body2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
         do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation. Sed ut
           perspiciatis unde omnis iste natus error sit voluptatem 
           accusantium doloremque laudantium, totam rem aperiam, 
           eaque ipsa quae ab illo inventore
      </p>
      <div className="container1">
        <div className="Iconbox1">
          <div className='Iconbox2'>
            <img src={Icon1} alt="" />
            <h1>What is CLMP?</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur. Nisl convallis arcu bibendum morbi in 
                    bibendum velit nunc tellus.
                </p>
                <div className="links-container">
                  <a href="">Learn more</a>
                </div>
          </div>  
        </div>
        <div className="Iconbox1">
          <div className='Iconbox2'>
            <img src={Icon2} alt="" />
            <h1>What is CLMP?</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur. Nisl convallis arcu bibendum morbi in 
                    bibendum velit nunc tellus.
                </p>
                <div className="links-container">
                  <a href="">Learn more</a>
                </div>
          </div>  
        </div>
        <div className="Iconbox1">
          <div className='Iconbox2'>
            <img src={Icon3} alt="" />
            <h1>What is CLMP?</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur. Nisl convallis arcu bibendum morbi in 
                    bibendum velit nunc tellus.
                </p>
                <div className="links-container">
                  <a href="">Learn more</a>
                </div>
          </div>  
        </div>
        <div className="Iconbox1">
          <div className='Iconbox2'>
            <img src={Icon4} alt="" />
            <h1>What is CLMP?</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur. Nisl convallis arcu bibendum morbi in 
                    bibendum velit nunc tellus.
                </p>
                <div className="links-container">
                  <a href="">Learn more</a>
                </div>
          </div>  
        </div>

      </div>  
    </div>
  )
}

export default Section4
