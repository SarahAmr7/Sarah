import React from 'react';
import Cards from '../Cards';
import Modal from '../Modal';
import '../../App.css'
import HeroSection from '../HeroSection'
import { CustomButton } from '../CustomButton';

function home(){
    
    
    
    return(
        <>
        {/* <Modal/> */}
        {/* <button onClick={Modal.toggleModal}>click me</button> */}
        <HeroSection/>
        <Cards/>
        

        </>
    )
}

export default home;