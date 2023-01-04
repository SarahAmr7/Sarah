import { height } from '@mui/system';
import React,{useState} from 'react';
import '../App.css';
import { CustomButton } from './CustomButton';
import './HeroSection.css';
import homepage from './homepage.png'

function HeroSection() {
   
    
    const[country,setcountry] = useState('')
    console.log(country)
   
    return (
        <div className='hero-container'>

            <h1 style={{alignSelf:'flex-start',padding:'100'}}>hi</h1>
           
            <img style={{width:800, height:800,alignSelf:'flex-end'}} src={homepage}/>
           
            <div className='hero-btns'>
                <CustomButton className = 'btns' 
                buttonStyle = 'btn--outline'
                buttonSize= 'btn--large'
                >
                   GET STARTED 
                </CustomButton>
                <CustomButton className = 'btns' 
                buttonStyle = 'btn--primary'
                buttonSize= 'btn--large'
                
                >
                   BROWSE COURSES
                </CustomButton>
            </div>
          
        </div>
    )
}

export default HeroSection
