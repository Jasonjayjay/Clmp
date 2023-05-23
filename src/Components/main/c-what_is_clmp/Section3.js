import React from 'react'
import ComputerIcon from "./Vector.png";
import VidIcon from "./Vector2.png";
import './Section3.css'
const Section3 = () => {
  return (
    <div className='about-section-container'>
       <header className='header2'>What is CLMP?</header>
       <p className='body1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
         do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation. Sed ut
           perspiciatis unde omnis iste natus error sit voluptatem 
           accusantium doloremque laudantium, totam rem aperiam, 
           eaque ipsa quae ab illo inventore
      </p>
      <div className="container">
        <div className="box">
          <div className='compbox1'>
              <img src={ComputerIcon} alt=""/>
              <h1>What is CLMP?</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Nisl convallis arcu bibendum morbi in 
                        bibendum velit nunc tellus.
                    </p>
          </div>
        </div>
        <div className="box">
          <div className='compbox1'>
            <img src={VidIcon} alt="" />
            <h1>What is CLMP?</h1>
                  <p>
                      Lorem ipsum dolor sit amet consectetur. Nisl convallis arcu bibendum morbi in 
                      bibendum velit nunc tellus.
                  </p>
          </div>
        </div>
        
    </div>
    </div>
  )
}

export default Section3
