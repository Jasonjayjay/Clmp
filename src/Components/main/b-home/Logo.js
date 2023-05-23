import React from 'react'
import './Logo.css'
import athena from './athena.png'
import aws from './aws.png'
import azure from './azure.png'
import lms from './lms.png'
import google_cloud from './Googleplat.png'
import software1 from './softone.png'
const Logo = () => {
  return (
    <div className='section2'>
      <div className='part1'>
      <img src={aws} alt="AWS" className='aws'/>
      <img src={google_cloud} alt="Google_Cloud" className='google_cloud'/>
      <img src={azure} alt="Azure" className='azure'/>
      </div>
      <div className='part2'>
      <img src={software1} alt="Software1" className='software1'/>
      <img src={lms} alt="Athena" className='lms'/>
      <img src={athena} alt="Athena" className='athena'/>
      </div>
    </div>
  )
}

export default Logo
