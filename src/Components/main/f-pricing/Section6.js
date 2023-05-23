import React from 'react'
import plan1_check from "./plan1-check.png";
import plan1_cross from "./plan1-cross.png";
import plan2_check from "./plan2-check.png";
import './Section6.css'
import { Button, ButtonGroup } from 'react-bootstrap';
const Section6 = () => {
  return (
    <div className='section6'>
     <div className="header">
      <h1>Get the right plan for future product.</h1>
      <div className="button-group">
        <button className='choice-btn1'>Monthly</button>
        <button className='choice-btn2'>Yearly</button>
      </div>
    </div>
         
      <div className='plans'>
        <div className='plan1'>
            <h3>Starter</h3>
            <div className='plan-price'>
                <p className='plan-num'>Free</p>
            </div>
            <div className='plan-list'>
                <div className='plan-list-check'>
                    <img src={plan1_check} alt='Plan1_check' className='plan1-check' />
                    Lorem Ipsum Dolor
                </div>  
                <div className='plan-list-check'>
                    <img src={plan1_check} alt='Plan1_check' className='plan1-check' />
                    Amet minim moliit non
                </div>   
                <div className='plan-list-cross'>
                    <img src={plan1_cross} alt='Plan1_cross' className='plan1-cross' />
                    Lorem Ipsum Dolor
                </div>   
                <div className='plan-list-cross'>
                    <img src={plan1_cross} alt='Plan1_cross' className='plan1-cross' />
                    Lorem Ipsum Dolor
                </div>    
                     
            </div> 
            <button className='plan-btn'>Get Started </button>
        </div>
        <div className='plan2'>
            <h3>Premium</h3>
            <div className='plan-price'>
                <p className='plan-num2'>$25</p><p className='plan-month2'> / Month</p>
            </div>
            <div className='plan-list'>
                <div className='plan-list-check2'>
                    <img src={plan2_check} alt='Plan2_check' className='plan2-check' />
                    Lorem Ipsum Dolor
                </div>  
                <div className='plan-list-check2'>
                    <img src={plan2_check} alt='Plan2_check' className='plan2-check' />
                    Lorem Ipsum Dolor
                </div>  
                <div className='plan-list-check2'>
                    <img src={plan2_check} alt='Plan2_check' className='plan2-check' />
                    Lorem Ipsum Dolor
                </div>  
                <div className='plan-list-check2'>
                    <img src={plan2_check} alt='Plan2_check' className='plan2-check' />
                    Lorem Ipsum Dolor
                </div>  
                 
            </div>
            <button className='plan-btn'>Get Started </button>
        </div>
        <div className='plan1'>
            <h3>Enterprise</h3>
            <div className='plan-price'>
                <p className='plan-num'>$100</p><p className='plan-month'> / Month</p>
            </div>
            
            <div className='plan-list'>
                <div className='plan-list-check'>
                    <img src={plan1_check} alt='Plan1_check' className='plan1-check' />
                    Lorem Ipsum Dolor
                </div>  
                <div className='plan-list-check'>
                    <img src={plan1_check} alt='Plan1_check' className='plan1-check' />
                    Lorem Ipsum Dolor
                </div>  
                <div className='plan-list-check'>
                    <img src={plan1_check} alt='Plan1_check' className='plan1-check' />
                    Lorem Ipsum Dolor
                </div>  
                <div className='plan-list-check'>
                    <img src={plan1_check} alt='Plan1_check' className='plan1-check' />
                    Lorem Ipsum Dolor
                </div>  
                  
            </div>
            <button className='plan-btn'>Get Started </button> 
        </div>
      </div>
    </div>
  )
}

export default Section6
